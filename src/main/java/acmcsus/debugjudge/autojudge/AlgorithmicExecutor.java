package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.AutoJudge.AJ2SMessage.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.Competition.Problem.*;
import acmcsus.debugjudge.proto.Competition.Problem.AlgorithmicProblemValue.*;
import acmcsus.debugjudge.proto.Competition.Submission.*;
import com.google.common.base.*;
import com.google.protobuf.*;
import org.slf4j.*;

import java.io.*;
import java.math.*;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.Function;

import static acmcsus.debugjudge.ctrl.MessageStores.PROBLEM_STORE;
import static com.google.protobuf.TextFormat.shortDebugString;

public class AlgorithmicExecutor implements Function<Competition.Submission, AutoJudgeResultMessage> {

  private static final Logger logger = LoggerFactory.getLogger(AlgorithmicExecutor.class);

  private Map<Integer, Competition.Problem> problemMap;
  private Map<String, Algorithmic.ProgrammingLanguage> languageMap;

  public AlgorithmicExecutor(Algorithmic.ProgrammingLanguage.List languages) {
    problemMap = new HashMap<>();
    for (Competition.Problem problem : PROBLEM_STORE.readAll()) {
      problemMap.put(problem.getId(), problem);
    }

    languageMap = new HashMap<>();
    for (Algorithmic.ProgrammingLanguage language : languages.getLanguageList()) {
      if (language.getName().isEmpty() || languageMap.containsKey(language.getName())) {
        throw new IllegalArgumentException("Languages must have a unique name assigned to them");
      }
      languageMap.put(language.getName(), language);
    }
  }

  @Override
  public AutoJudgeResultMessage apply(Competition.Submission submission) {
    AlgorithmicSubmission algorithmicSubmission = submission.getAlgorithmicSubmission();

    Algorithmic.ProgrammingLanguage language = languageMap.get(algorithmicSubmission.getLanguage());

    AutoJudgeResultMessage.Builder resultBuilder = AutoJudgeResultMessage.newBuilder();

    if (language == null) {
      return resultBuilder
          .setPreliminaryJudgement(Competition.SubmissionJudgement.JUDGEMENT_FAILURE)
          .setPreliminaryJudgementMessage(PreliminaryJudgementCode.UNKNOWN_LANGUAGE_MESSAGE)
          .build();
    }

    try {
      // TODO: check filename matches restrictive pattern
      Files.write(
          Paths.get(algorithmicSubmission.getFileName()),
          algorithmicSubmission.getSourceCodeBytes().toByteArray());

      if (!language.getCompile().isEmpty()) {
        ExecutionResult compileResult =
            execute(executeCommandFormat(language.getRun(), submission), null, 30);

        resultBuilder.setCompileResult(compileResult);

        if (compileResult.getTimeSeconds() == -1) {
          return resultBuilder
              .setPreliminaryJudgement(Competition.SubmissionJudgement.JUDGEMENT_FAILURE)
              .setPreliminaryJudgementMessage(PreliminaryJudgementCode.COMPILE_TIME_EXCEEDED_MESSAGE)
              .build();
        }
        else if (compileResult.getExitCode() != 0) {
          return resultBuilder
              .setPreliminaryJudgement(Competition.SubmissionJudgement.JUDGEMENT_FAILURE)
              .setPreliminaryJudgementMessage(PreliminaryJudgementCode.COMPILE_ERROR_MESSAGE)
              .build();
        }
      }

      AlgorithmicProblemValue algorithmicProblem =
          problemMap.get(submission.getProblemId()).getAlgorithmicProblem();

      boolean hasErr = false;
      boolean hasTLE = false;

      for (int caseIdx = 0; caseIdx < algorithmicProblem.getTestCaseCount(); caseIdx++) {
        AlgorithmicTestCase testCase = algorithmicProblem.getTestCase(caseIdx);
        ExecutionResult executionResult =
            execute(
                executeCommandFormat(language.getRun(), submission),
                testCase.getInput().getBytes(),
                algorithmicProblem.getTimeLimitSeconds());

        hasErr |= executionResult.getExitCode() != 0;
        hasTLE |= executionResult.getTimeSeconds() == -1;

        resultBuilder.putCaseResults(caseIdx, executionResult);
      }

      if (hasErr) {
        return resultBuilder
            .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
            .setPreliminaryJudgementMessage(PreliminaryJudgementCode.RUNTIME_ERROR_MESSAGE)
            .build();
      }
      else if (hasTLE) {
        return resultBuilder
            .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
            .setPreliminaryJudgementMessage(PreliminaryJudgementCode.TIME_EXCEEDED_MESSAGE)
            .build();
      }

      return validateResults(algorithmicProblem, resultBuilder);
    }
    catch (IOException | InterruptedException e) {
      logger.error("Error running submission " + shortDebugString(submission), e);
      return resultBuilder
          .setPreliminaryJudgement(Competition.SubmissionJudgement.JUDGEMENT_FAILURE)
          .setPreliminaryJudgementMessage(PreliminaryJudgementCode.INTERNAL_ERROR_MESSAGE)
          .build();
    }
  }

  private static String executeCommandFormat(String command, Competition.Submission submission) {
    String fileName = submission.getAlgorithmicSubmission().getFileName();

    if (!fileName.matches("\\w+.\\w+")) {
      throw new IllegalArgumentException("Illegal File Name!");
    }

    String baseName = fileName.substring(0, fileName.lastIndexOf('.'));

    return command
        .replaceAll("\\{\\{FILE_NAME}}", fileName)
        .replaceAll("\\{\\{BASE_NAME}}", baseName);
  }

  private static ExecutionResult execute(String command, byte[] input, int maxSeconds)
      throws IOException, InterruptedException {
    File tmpOut = File.createTempFile("exec_out", "txt");
    File tmpErr = File.createTempFile("exec_err", "txt");

    if (maxSeconds == 0) {
      maxSeconds = 60;
    }

    Process process = new ProcessBuilder()
        .command("bash", "-c", command)
        .redirectOutput(tmpOut)
        .redirectError(tmpErr)
        .start();

    Stopwatch stopwatch = Stopwatch.createStarted();

    try {
      if (input != null) {
        process.getOutputStream().write(input);
        process.getOutputStream().flush();
      }
    }
    catch (IOException ioe) {
      logger.error("error writing input to process", ioe);
    }

    ExecutionResult.Builder result = ExecutionResult.newBuilder();

    if (!process.waitFor(maxSeconds, TimeUnit.SECONDS)) {
      process.destroyForcibly();
      result.setTimeSeconds(-1);
    }
    else {
      result.setTimeSeconds((int) stopwatch.elapsed(TimeUnit.SECONDS));
    }
    stopwatch.stop();

    result = result
        .setResultOutBytes(ByteString.copyFrom(Files.readAllBytes(tmpOut.toPath())))
        .setResultErrBytes(ByteString.copyFrom(Files.readAllBytes(tmpErr.toPath())))
        .setExitCode(process.exitValue());

    tmpOut.delete();
    tmpErr.delete();

    return result.build();
  }

  private static AutoJudgeResultMessage validateResults(
      AlgorithmicProblemValue problemValue, AutoJudgeResultMessage.Builder resBuilder)
      throws IOException, InterruptedException {

    switch (problemValue.getValidatorCase()) {
      case VALIDATOR_PROGRAM: {
        return runValidatorProgram(problemValue, resBuilder);
      }
      case VALIDATOR_SCANNER: {
        return runValidatorScanner(problemValue, resBuilder);
      }
      default: {
        logger.error("Unsupported Validator Case: " + problemValue.getValidatorCase());
        return resBuilder
            .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
            .setPreliminaryJudgementMessage(PreliminaryJudgementCode.INTERNAL_ERROR_MESSAGE)
            .build();
      }
    }
  }

  private static AutoJudgeResultMessage runValidatorProgram(
      AlgorithmicProblemValue problemValue, AutoJudgeResultMessage.Builder resBuilder)
      throws IOException, InterruptedException {

    for (int caseIdx = 0; caseIdx < problemValue.getTestCaseCount(); caseIdx++) {
      ExecutionResult result = resBuilder.getCaseResultsOrThrow(caseIdx);

      Path inpFile = Files.createTempFile("validate_inp", "txt");
      Path expFile = Files.createTempFile("validate_exp", "txt");
      Path resFile = Files.createTempFile("validate_out", "txt");

      Files.write(inpFile, problemValue.getTestCase(caseIdx).getInput().getBytes());
      Files.write(expFile, problemValue.getTestCase(caseIdx).getExpected().getBytes());
      Files.write(resFile, result.getResultOut().getBytes());

      ExecutionResult validatorResult = execute(
          problemValue.getValidatorProgram()
              .replaceAll("\\{\\{INP_FILE}}", inpFile.toAbsolutePath().toString())
              .replaceAll("\\{\\{EXP_FILE}}", expFile.toAbsolutePath().toString())
              .replaceAll("\\{\\{OUT_FILE}}", resFile.toAbsolutePath().toString()),
          null, 60);

      if (validatorResult.getTimeSeconds() == -1) {
        return resBuilder
            .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
            .setPreliminaryJudgementMessage("Validator Timeout")
            .build();
      }
      else if (validatorResult.getExitCode() != 0) {
        String message = result.getResultErr().trim().split("\\r?\\n")[0];

        if (message.isEmpty()) {
          message = "Wrong Answer";
        }

        return resBuilder
            .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
            .setPreliminaryJudgementMessage(message)
            .build();
      }
    }

    return resBuilder
        .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_SUCCESS)
        .setPreliminaryJudgementMessage("Correct Answer")
        .build();
  }

  private static AutoJudgeResultMessage runValidatorScanner(
      AlgorithmicProblemValue problemValue, AutoJudgeResultMessage.Builder resBuilder) {

    boolean correct = true;

    caseLoop:
    for (int caseIdx = 0; caseIdx < problemValue.getTestCaseCount(); caseIdx++) {
      ExecutionResult result = resBuilder.getCaseResultsOrThrow(caseIdx);

      Scanner expLineScn = new Scanner(problemValue.getTestCase(caseIdx).getExpected());
      expLineScn.useDelimiter("(\\s\\R\\s)+");
      Scanner resLineScn = new Scanner(result.getResultOut());
      resLineScn.useDelimiter("(\\s\\R\\s)+");

      double doubleTolerance = problemValue.getValidatorScanner().getFloatPrecision();

      while (expLineScn.hasNextLine()) {
        if (!resLineScn.hasNextLine()) {
          return resBuilder
              .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
              .setPreliminaryJudgementMessage("Incomplete Output (Missing Lines)")
              .build();
        }

        Scanner expValScn = new Scanner(expLineScn.nextLine());
        Scanner resValScn = new Scanner(resLineScn.nextLine());

        while (expValScn.hasNext()) {
          if (expValScn.hasNextBigInteger()) {
            if (!resValScn.hasNextBigInteger()) {
              correct = false;
              break caseLoop;
            }

            BigInteger expVal = expValScn.nextBigInteger();
            BigInteger resVal = resValScn.nextBigInteger();
            if (!expVal.equals(resVal)) {
              correct = false;
              break caseLoop;
            }
          }
          else if (expValScn.hasNextDouble()) {
            if (!resValScn.hasNextDouble()) {
              correct = false;
              break caseLoop;
            }

            double expVal = expValScn.nextDouble();
            double resVal = resValScn.nextDouble();
            if (Math.abs(expVal - resVal) > doubleTolerance) {
              correct = false;
              break caseLoop;
            }
          }
          else if (expValScn.hasNext()) {
            if (!resValScn.hasNext()) {
              correct = false;
              break caseLoop;
            }

            String expVal = expValScn.next();
            String resVal = resValScn.next();
            if (!expVal.equals(resVal)) {
              correct = false;
              break caseLoop;
            }
          }
        }
      }

      if (resLineScn.hasNextLine()) {
        return resBuilder
            .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
            .setPreliminaryJudgementMessage("Excessive Output (Too Many Lines)")
            .build();
      }
    }

    if (correct) {
      return resBuilder
          .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_SUCCESS)
          .setPreliminaryJudgementMessage("Correct Answer")
          .build();
    }
    else {
      return resBuilder
          .setPreliminaryJudgement(SubmissionJudgement.JUDGEMENT_FAILURE)
          .setPreliminaryJudgementMessage("Wrong Answer")
          .build();
    }
  }

}
