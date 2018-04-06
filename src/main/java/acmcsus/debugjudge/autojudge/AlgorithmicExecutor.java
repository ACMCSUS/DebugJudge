package acmcsus.debugjudge.autojudge;

import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.Submission.*;
import org.slf4j.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;

import static com.google.protobuf.TextFormat.shortDebugString;

public class AlgorithmicExecutor implements Function<Competition.Submission, ExecutionResult> {

  private static final Logger logger = LoggerFactory.getLogger(AlgorithmicExecutor.class);

  private Map<String, Algorithmic.ProgrammingLanguage> languageMap;

  public AlgorithmicExecutor(Algorithmic.ProgrammingLanguage.List languages) {
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
            .command("bash", "-c", language.getCompile())
            .inheritIO()
            .start();

        if (!process.waitFor(30, TimeUnit.SECONDS)) {
          return ExecutionResult.TIME_EXCEEDED_RESULT;
        }

        if (process.exitValue() != 0) {
          return ExecutionResult.RUNTIME_ERROR_RESULT;
        }
      }

      {
        Process process = new ProcessBuilder()
            .command("bash", "-c", "sleep 40")//language.getRun())
            .inheritIO()
            .start();

        if (!process.waitFor(30, TimeUnit.SECONDS)) {
          process.destroyForcibly();
          return ExecutionResult.TIME_EXCEEDED_RESULT;
        }

        if (process.exitValue() != 0) {
          return ExecutionResult.RUNTIME_ERROR_RESULT;
        }
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

}
