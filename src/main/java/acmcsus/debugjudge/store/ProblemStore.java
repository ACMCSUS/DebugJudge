package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Competition;
import com.google.inject.Singleton;
import com.google.protobuf.ByteString;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;
import java.util.Scanner;
import java.util.stream.Stream;

@Singleton
public class ProblemStore extends MessageStore<Competition.Problem> {

  private static Logger logger = LoggerFactory.getLogger(ProfileStore.class);

  @Override
  public Path getPath(Competition.Problem problem) {
    throw new UnsupportedOperationException();
  }

  @Override
  public Stream<Path> getAllPaths() {
    try {
      return Files.find(problemDirectoryPath, 1,
          (p, bfa) ->
              bfa.isRegularFile() && p.getFileName().toString().endsWith(".textproto"));
    }
    catch (IOException e) {
      logger.error("Could not start path finder", e);
      return Stream.empty();
    }
  }

  @Override
  public Competition.Problem.Builder newBuilder() {
    return Competition.Problem.newBuilder();
  }

  @Override
  public Competition.Problem clearProtectedFields(Competition.Problem problem) {
    Competition.Problem.Builder builder = Competition.Problem.newBuilder(problem);

    switch (builder.getValueCase()) {
      case DEBUGGING_PROBLEM: {
        builder.getDebuggingProblemBuilder().clearAnswer();
        break;
      }
      case ALGORITHMIC_PROBLEM: {
        builder.getAlgorithmicProblemBuilder()
            .clearValidator()
            .clearTestCase()
            .clearTestCaseDirectory();
        break;
      }
      default: {
        logger.warn("Did not clear answer field for problem of type: {}", builder.getValueCase());
      }
    }

    return super.clearProtectedFields(builder.build());
  }

  @Override
  public Competition.Problem readFromPath(Path p) throws IOException {
    Competition.Problem.Builder builder = Competition.Problem.newBuilder(super.readFromPath(p));

    if (builder.getDescriptionCase() == Competition.Problem.DescriptionCase.DESCRIPTION_FILE) {
      try {
        builder.setDescriptionTextBytes(
            ByteString.copyFrom(
                Files.readAllBytes(p.getParent().resolve(builder.getDescriptionFile()))));
      }
      catch (IOException e) {
        logger.error("could not find description file " + builder.getDescriptionFile() + " listed in " + p);
        return null;
      }
    }

    if (builder.getValueCase() == Competition.Problem.ValueCase.DEBUGGING_PROBLEM) {
      String definitionFile = builder.getDebuggingProblem().getDefinitionFile();

      if (!definitionFile.isEmpty()) {
        Competition.Problem.DebuggingProblemValue.Builder debugBuilder = Competition.Problem.DebuggingProblemValue.newBuilder();
        debugBuilder.setLanguage(builder.getDebuggingProblem().getLanguage());

        Scanner scn = new Scanner(p.getParent().resolve(definitionFile));
        scn.useDelimiter("\\n?(#|//) @DBG:");
        while (scn.hasNext()) {
          String chunk = scn.next();
          if (chunk.startsWith("PRECODE")) {
            debugBuilder.setPrecode(chunk.substring(chunk.indexOf('\n') + 1));
          }
          else if (chunk.startsWith("CODE")) {
            debugBuilder.setCode(chunk.substring(chunk.indexOf('\n') + 1));
          }
          else if (chunk.startsWith("ANSWER")) {
            debugBuilder.setAnswer(chunk.substring(chunk.indexOf('\n') + 1));
          }
          else if (chunk.startsWith("POSTCODE")) {
            debugBuilder.setPostcode(chunk.substring(chunk.indexOf('\n') + 1));
          }
          else if (!chunk.startsWith("IGNORE")) {
            logger.error("Invalid problem definition file {} for problem {}",
                definitionFile, p);
          }
        }
        builder.setDebuggingProblem(debugBuilder);
      }
    }
    else if (builder.getValueCase() == Competition.Problem.ValueCase.ALGORITHMIC_PROBLEM) {
      Competition.Problem.AlgorithmicProblemValue.Builder algoBuilder = builder.getAlgorithmicProblemBuilder();

      if (algoBuilder.getTimeLimitSeconds() == 0) {
        algoBuilder.setTimeLimitSeconds(60);
      }

      if (algoBuilder.getMemoryLimitMegabytes() == 512) {
        algoBuilder.setTimeLimitSeconds(60);
      }

      String testCaseDirectory = builder.getAlgorithmicProblem().getTestCaseDirectory();
      if (!(testCaseDirectory == null || testCaseDirectory.isEmpty())) {
        Files.find(p.getParent().resolve(testCaseDirectory), 1,
            (casePath, bfa) -> {
              String fileName = casePath.getFileName().toString();
              return bfa.isRegularFile() &&
                  fileName.endsWith(".inp") &&
                  Files.exists(
                      casePath.getParent().resolve(fileName.replaceAll("\\.inp\\b", ".exp")));
            })
            .map((casePath) -> {
              String fileName = casePath.getFileName().toString();
              Competition.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.Builder testCase = Competition.Problem.AlgorithmicProblemValue.AlgorithmicTestCase.newBuilder();
              Path expPath =
                  casePath.getParent().resolve(fileName.replaceAll("\\.inp\\b", ".exp"));

              try {
                testCase.setInputBytes(ByteString.copyFrom(Files.readAllBytes(casePath)));
                testCase.setExpectedBytes(ByteString.copyFrom(Files.readAllBytes(expPath)));

                return testCase;
              }
              catch (IOException e) {
                return null;
              }
            })
            .filter(Objects::nonNull)
            .forEach(algoBuilder::addTestCase);
      }
    }
    return builder.build();
  }

}
