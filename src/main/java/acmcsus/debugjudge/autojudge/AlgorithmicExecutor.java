package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.Algorithmic.ProgrammingLanguage;
import acmcsus.debugjudge.proto.AutoJudge.AJ2SMessage.AutoJudgeResultMessage;
import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.proto.Competition.ExecutionResult;
import acmcsus.debugjudge.proto.Competition.Problem;
import acmcsus.debugjudge.proto.Competition.Problem.AlgorithmicProblemValue;
import acmcsus.debugjudge.proto.Competition.Problem.AlgorithmicProblemValue.AlgorithmicTestCase;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.Competition.Submission.AlgorithmicSubmission;
import acmcsus.debugjudge.proto.Competition.SubmissionJudgement;
import com.google.common.base.Stopwatch;
import com.google.protobuf.ByteString;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import static com.google.protobuf.TextFormat.shortDebugString;

public class AlgorithmicExecutor {

  private static final Logger logger = LoggerFactory.getLogger(AlgorithmicExecutor.class);

  public AutoJudgeResultMessage execute(Submission submission, Problem problem,
                                        ProgrammingLanguage language) {

    AlgorithmicSubmission algorithmicSubmission = submission.getAlgorithmicSubmission();
    AlgorithmicProblemValue algorithmicProblem = problem.getAlgorithmicProblem();

    AutoJudgeResultMessage.Builder resultBuilder = AutoJudgeResultMessage.newBuilder();

    if (language == null) {
      return resultBuilder
          .setPreliminaryJudgement(Competition.SubmissionJudgement.JUDGEMENT_FAILURE)
          .setPreliminaryJudgementMessage(PreliminaryJudgementCode.UNKNOWN_LANGUAGE_MESSAGE)
          .build();
    }

    Path sandboxDirPath = null;
    File sandboxDir = null;

    try {
      sandboxDirPath = Files.createTempDirectory("aj_sandbox");
      sandboxDir = sandboxDirPath.toFile();

      // TODO: check filename matches restrictive pattern
      Files.write(
          sandboxDirPath.resolve(algorithmicSubmission.getFileName()),
          algorithmicSubmission.getSourceCodeBytes().toByteArray());

      if (!language.getCompile().isEmpty()) {
        ExecutionResult compileResult =
            execute(
                executeCommandFormat(language.getCompile(), submission),
                null, 30, sandboxDir);

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

      boolean hasErr = false;
      boolean hasTLE = false;

      for (int caseIdx = 0; caseIdx < algorithmicProblem.getTestCaseCount(); caseIdx++) {
        AlgorithmicTestCase testCase = algorithmicProblem.getTestCase(caseIdx);
        ExecutionResult executionResult =
            execute(
                executeCommandFormat(language.getRun(), submission),
                testCase.getInput().getBytes(),
                algorithmicProblem.getTimeLimitSeconds(), sandboxDir);

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

      return validateResults(sandboxDir, algorithmicProblem, resultBuilder);
    }
    catch (IOException | InterruptedException e) {
      logger.error("Error running submission " + shortDebugString(submission), e);
      return resultBuilder
          .setPreliminaryJudgement(Competition.SubmissionJudgement.JUDGEMENT_FAILURE)
          .setPreliminaryJudgementMessage(PreliminaryJudgementCode.INTERNAL_ERROR_MESSAGE)
          .build();
    }
    finally {
      if (sandboxDirPath != null) {
        FileUtils.deleteQuietly(sandboxDir);
      }
    }
  }

  private static String executeCommandFormat(String command, Submission submission) {
    String fileName = submission.getAlgorithmicSubmission().getFileName();

    if (!fileName.matches("\\w+\\.\\w+")) {
      throw new IllegalArgumentException("Illegal File Name!");
    }

    String baseName = fileName.substring(0, fileName.lastIndexOf('.'));

    return command
        .replaceAll("\\{\\{FILE_NAME}}", fileName)
        .replaceAll("\\{\\{BASE_NAME}}", baseName);
  }

  private static ExecutionResult execute(String command, byte[] input, int maxSeconds,
                                         File directory)
      throws IOException, InterruptedException {
    File tmpOut = File.createTempFile("exec_out", "txt");
    File tmpErr = File.createTempFile("exec_err", "txt");

    File inpFile = File.createTempFile("exec_inp", "txt");
    Files.write(inpFile.toPath(), input == null ? new byte[0] : input);

    if (maxSeconds == 0) {
      maxSeconds = 60;
    }

    ExecutionResult.Builder result = ExecutionResult.newBuilder();
    Stopwatch stopwatch = Stopwatch.createStarted();
    {
      Process process = new ProcessBuilder()
          .command("bash", "-c", command)
          .directory(directory)
          .redirectInput(inpFile)
          .redirectOutput(tmpOut)
          .redirectError(tmpErr)
          .start();
/*
      try {
        if (input != null) {
          process.getOutputStream().write(input);
          process.getOutputStream().flush();
          process.getOutputStream().close();
        }
      }
      catch (IOException ioe) {
        logger.error("error writing input to process", ioe);
      }
*/
      if (!process.waitFor(maxSeconds, TimeUnit.SECONDS)) {
        process.destroyForcibly();
        result.setTimeSeconds(-1);
      }
      else {
        result
            .setExitCode(process.exitValue())
            .setTimeSeconds((int) stopwatch.elapsed(TimeUnit.SECONDS));
      }
    }
    stopwatch.stop();

    result = result
        .setResultOutBytes(ByteString.copyFrom(Files.readAllBytes(tmpOut.toPath())))
        .setResultErrBytes(ByteString.copyFrom(Files.readAllBytes(tmpErr.toPath())));

    inpFile.delete();
    tmpOut.delete();
    tmpErr.delete();

    return result.build();
  }

  private static AutoJudgeResultMessage validateResults(
      File sandboxDir, AlgorithmicProblemValue problemValue,
      AutoJudgeResultMessage.Builder resBuilder)
      throws IOException, InterruptedException {

    switch (problemValue.getValidatorCase()) {
      case VALIDATOR_PROGRAM: {
        return runValidatorProgram(sandboxDir, problemValue, resBuilder);
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
      File sandboxDir, AlgorithmicProblemValue problemValue,
      AutoJudgeResultMessage.Builder resBuilder)
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
          null, 60, sandboxDir);

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
