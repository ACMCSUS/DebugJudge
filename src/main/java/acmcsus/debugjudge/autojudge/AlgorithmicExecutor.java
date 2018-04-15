package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.Problem.*;
import acmcsus.debugjudge.proto.Competition.Problem.AlgorithmicProblemValue.*;
import acmcsus.debugjudge.proto.Competition.Submission.*;
import org.slf4j.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;

import static acmcsus.debugjudge.ctrl.MessageStores.PROBLEM_STORE;
import static com.google.protobuf.TextFormat.shortDebugString;

public class AlgorithmicExecutor implements Function<Competition.Submission, ExecutionResult> {

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
  public ExecutionResult apply(Competition.Submission submission) {
    AlgorithmicSubmission algorithmicSubmission = submission.getAlgorithmicSubmission();

    Algorithmic.ProgrammingLanguage language = languageMap.get(algorithmicSubmission.getLanguage());

    if (language == null) {
      return ExecutionResult.UNKNOWN_LANGUAGE_RESULT;
    }

    try {
      // TODO: check filename matches restrictive pattern
      Files.write(
          Paths.get(algorithmicSubmission.getFileName()),
          algorithmicSubmission.getSourceCodeBytes().toByteArray());

      if (!language.getCompile().isEmpty()) {
        Process process = new ProcessBuilder()
            .command("bash", "-c", commandFormat(language.getCompile(), submission))
            .inheritIO()
            .start();

        if (!process.waitFor(30, TimeUnit.SECONDS)) {
          return ExecutionResult.COMPILE_TIME_EXCEEDED_RESULT;
        }

        if (process.exitValue() != 0) {
          return ExecutionResult.COMPILE_ERROR_RESULT;
        }
      }

      AlgorithmicProblemValue algorithmicProblem =
          problemMap.get(submission.getProblemId()).getAlgorithmicProblem();

      for (AlgorithmicTestCase testCase : algorithmicProblem.getTestCaseList()) {
        File tmpOut = File.createTempFile("run","res");
        File tmpErr = File.createTempFile("run","err");

        Process process = new ProcessBuilder()
            .command("bash", "-c", commandFormat(language.getRun(), submission))
//            .inheritIO()
            .redirectOutput(tmpOut)
            .redirectError(tmpErr)
            .start();

        try {
          System.out.write(testCase.getInput().getBytes());
          process.getOutputStream().write(testCase.getInput().getBytes());
          process.getOutputStream().flush();
        }
        catch (Exception ignored) {}

        if (!process.waitFor(30, TimeUnit.SECONDS)) {
          process.destroyForcibly();
          return ExecutionResult.TIME_EXCEEDED_RESULT;
        }

        System.out.write(Files.readAllBytes(tmpOut.toPath()));
        System.out.flush();
        System.err.write(Files.readAllBytes(tmpErr.toPath()));
        System.err.flush();

        if (process.exitValue() != 0) {
          return ExecutionResult.RUNTIME_ERROR_RESULT;
        }

        tmpOut.delete();
        tmpErr.delete();
      }

      // remove inheritIO
//      InputStream procOut = process.getInputStream();
//      InputStream procErr = process.getErrorStream();
//      OutputStream procIn = process.getOutputStream();


      return ExecutionResult.SUCCESS_RESULT;
    }
    catch (IOException | InterruptedException e) {
      logger.error("Error running submission " + shortDebugString(submission), e);
      return ExecutionResult.INTERNAL_ERROR_RESULT;
    }
  }

  private static String commandFormat(String command, Competition.Submission submission) {
    String fileName = submission.getAlgorithmicSubmission().getFileName();

    if (!fileName.matches("\\w+.\\w+")) {
      throw new IllegalArgumentException("Illegal File Name!");
    }

    String baseName = fileName.substring(0, fileName.lastIndexOf('.'));

    return command
        .replaceAll("\\{\\{FILE_NAME}}", fileName)
        .replaceAll("\\{\\{BASE_NAME}}", baseName);
  }

}
