package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.proto.Competition.Problem.*;
import acmcsus.debugjudge.proto.Competition.Problem.AlgorithmicProblemValue.*;
import com.google.protobuf.*;
import org.slf4j.*;
import spark.*;

import java.io.*;
import java.nio.file.*;
import java.util.List;
import java.util.*;
import java.util.stream.*;

import static java.lang.String.format;
import static java.nio.file.Files.*;
import static java.util.Collections.unmodifiableList;
import static spark.Spark.halt;

// TODO: make this package-private
public class MessageStores {

  private static Logger logger = LoggerFactory.getLogger(MessageStore.class);

  private static Path dataDirectoryPath = Paths.get(System.getenv().getOrDefault("DATA_DIR", "data"));
  private static Path problemDirectoryPath = dataDirectoryPath.resolve("problems/");
  private static Path profileDirectoryPath = dataDirectoryPath.resolve("profiles/");

  public static final SubmissionStore SUBMISSION_STORE = new SubmissionStore();
  public static final ProfileStore PROFILE_STORE = new ProfileStore();
  public static final ProblemStore PROBLEM_STORE = new ProblemStore();

  public static abstract class MessageStore<M extends Message> {

    public abstract Path getPath(M m);

    public abstract Stream<Path> getAllPaths();

    public abstract M.Builder newBuilder();

    public M create(M m) throws IOException {
      m = clearProtectedFields(m);
      requireValid(m);

      Path storePath = getPath(m);
      Files.createDirectories(storePath.getParent());
      Files.createFile(storePath);

      BufferedWriter writer = newBufferedWriter(storePath);
      TextFormat.print(m, writer);
      writer.close();

      return m;
    }

    public M save(M m) throws IOException {
      requireValid(m);

      Path storePath = getPath(m);
      Files.createDirectories(storePath.getParent());

      BufferedWriter writer = newBufferedWriter(storePath);
      TextFormat.print(m, writer);
      writer.close();

      return m;
    }

    public M readFromPath(Path p) throws IOException {
      if (!Files.isRegularFile(p)) {
        throw new NoSuchFileException(p.toString());
      }
      BufferedReader reader = newBufferedReader(p);
      M.Builder mBuilder = newBuilder();
      TextFormat.merge(reader, mBuilder);
      reader.close();
      return (M) mBuilder.build();
    }

    public Stream<M> streamAll() {
      return streamAll(getAllPaths());
    }

    public Stream<M> streamAll(Stream<Path> paths) {
      return paths.map(p -> {
        try {
          return readFromPath(p);
        }
        catch (IOException ioe) {
          logger.error(format("error reading problem at %s", p), ioe);
          return null;
        }
      }).filter(Objects::nonNull);
    }

    public List<M> readAll() {
      return unmodifiableList(streamAll().collect(Collectors.toList()));
    }

    public List<M> readAll(Stream<Path> paths) {
      return unmodifiableList(streamAll(paths).collect(Collectors.toList()));
    }

    /**
     * Clear protected fields before reading
     *
     * @param m message to clear fields of
     * @return m, with protected fields cleared
     */
    public M clearProtectedFields(M m) {
      return m;
    }

    /**
     * @param m message to check
     * @return true, iff valid.
     * @throws HaltException if the message is invalid
     */
    public boolean isValid(M m) {
      return true;
    }

    /**
     * @param m message to check
     * @throws HaltException if invalid
     */
    public void requireValid(M m) {
      if (!isValid(m)) {
        throw halt(400);
      }
    }
  }

  public static class SubmissionStore extends MessageStore<Submission> {

    @Override
    public Submission.Builder newBuilder() {
      return Submission.newBuilder();
    }

    @Override
    public Path getPath(Submission submission) {
      return profileDirectoryPath.resolve(
          format("prof%d/submissions/prob%d/sub%d.textproto",
              submission.getTeamId(),
              submission.getProblemId(),
              submission.getSubmissionTimeSeconds()));
    }

    public Stream<Path> getPathsForTeam(long teamId) {
      if (teamId <= 0) {
        throw new IllegalArgumentException("teamId must be positive");
      }
      try {
        Path profileDirectory = profileDirectoryPath.resolve("prof" + teamId);
        return Files.find(profileDirectory, 5,
            (p, bfa) -> {
              p = profileDirectory.relativize(p);
              return bfa.isRegularFile() &&
                  p.getName(0).toString().matches("submissions") &&
                  p.getName(1).toString().matches("prob-?\\d+") &&
                  p.getFileName().toString().matches("sub\\d+.textproto");
            });
      }
      catch (IOException e) {
        logger.error("Could not start path finder", e);
        return Stream.empty();
      }
    }

    public Path pathForIds(long teamId, long problemId, long submissionTimeSeconds) {
      return profileDirectoryPath.resolve(
          format("prof%d/submissions/prob%d/sub%d.textproto",
              teamId, problemId, submissionTimeSeconds));
    }

    @Override
    public Stream<Path> getAllPaths() {
      try {
        return Files.find(profileDirectoryPath, 5,
            (p, bfa) -> {
              p = profileDirectoryPath.relativize(p);
              return bfa.isRegularFile() &&
                  p.getName(0).toString().matches("prof\\d+") &&
                  p.getName(1).toString().matches("submissions") &&
                  p.getName(2).toString().matches("prob-?\\d+") &&
                  p.getFileName().toString().matches("sub\\d+.textproto");
            });
      }
      catch (IOException e) {
        logger.error("Could not start path finder", e);
        return Stream.empty();
      }
    }

    //    public Stream<Submission> readAllForTeam(Profile profile) throws IOException {
//      Files.find(PROFILE_STORE.getPath(profile), 2,
//        (p, bfa) ->
//          bfa.isRegularFile() &&
//            p.getName(0).toString().matches("submissions") &&
//            p.getName(1).toString().matches("prob-?\\d+") &&
//            p.getFileName().toString().equals("sub\\d+.textproto"));
//    }

    @Override
    public Submission clearProtectedFields(Submission submission) {
      Submission.Builder builder = Submission.newBuilder(submission);

      builder.clearJudgeId();

      switch (builder.getValueCase()) {
        case ALGORITHMIC_SUBMISSION: {
          builder.getAlgorithmicSubmissionBuilder()
              .clearCompileResult()
              .clearCaseResults();
          break;
        }
      }

      return super.clearProtectedFields(builder.build());
    }
  }

  public static class ProfileStore extends MessageStore<Profile> {

    @Override
    public Profile.Builder newBuilder() {
      return Profile.newBuilder();
    }

    @Override
    public Path getPath(Profile profile) {
      if (profile == null) {
        throw new IllegalArgumentException("getPath of null profile prohibited");
      }
      return getPathForId(profile.getId());
    }

    public Path getPathForId(long profileId) {
      if (profileId == 0) {
        throw new IllegalArgumentException("profileId 0 is considered null and thus prohibited");
      }
      return profileDirectoryPath.resolve(format("prof%d/profile.textproto", profileId));
    }

    @Override
    public Stream<Path> getAllPaths() {
      try {
        return Files.find(profileDirectoryPath, 2,
            (p, bfa) -> {
              p = profileDirectoryPath.relativize(p);
              return bfa.isRegularFile() &&
                  p.getName(0).toString().matches("prof\\d+") &&
                  p.getFileName().toString().equals("profile.textproto");
            });
      }
      catch (IOException e) {
        logger.error("Could not start path finder", e);
        return Stream.empty();
      }
    }

    @Override
    public Profile create(Profile profile) throws IOException {
      requireValid(profile);

      Profile.Builder builder = Profile.newBuilder();
      builder.setName(profile.getName());
      builder.setProfileType(profile.getProfileType());

      if (profile.getId() == 0) {
        int id = 1;
        while (Files.exists(profileDirectoryPath.resolve("prof" + id))) {
          id++;
        }
        builder.setId(id);
      }

      return super.create(builder.build());
    }
  }

  public static class ProblemStore extends MessageStore<Problem> {

    @Override
    public Path getPath(Problem problem) {
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
    public Problem.Builder newBuilder() {
      return Problem.newBuilder();
    }

    @Override
    public Problem clearProtectedFields(Problem problem) {
      Problem.Builder builder = Problem.newBuilder(problem);

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
    public Problem readFromPath(Path p) throws IOException {
      Problem.Builder builder = Problem.newBuilder(super.readFromPath(p));

      if (builder.getDescriptionCase() == Problem.DescriptionCase.DESCRIPTION_FILE) {
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

      if (builder.getValueCase() == Problem.ValueCase.DEBUGGING_PROBLEM) {
        String definitionFile = builder.getDebuggingProblem().getDefinitionFile();

        if (!definitionFile.isEmpty()) {
          Problem.DebuggingProblemValue.Builder debugBuilder = Problem.DebuggingProblemValue.newBuilder();
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
      else if (builder.getValueCase() == Problem.ValueCase.ALGORITHMIC_PROBLEM) {
        AlgorithmicProblemValue.Builder algoBuilder = builder.getAlgorithmicProblemBuilder();

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
                AlgorithmicTestCase.Builder testCase = AlgorithmicTestCase.newBuilder();
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

  // TODO: Make this more secure? Not strictly necessary.
  public static void writeLoginSecret(long id, String secret) throws IOException {
    Path secretPath = profileDirectoryPath.resolve(
        format("prof%d/loginSecret.txt", id));

    createDirectories(secretPath.getParent());
    new PrintStream(secretPath.toFile()).println(secret);
  }

  public static String getLoginSecret(long id) throws IOException {
    Path secretPath = profileDirectoryPath.resolve(
        format("prof%d/loginSecret.txt", id));

    createDirectories(secretPath.getParent());
    List<String> lines = Files.readAllLines(secretPath);

    if (lines.size() == 1 || (lines.size() == 2 && lines.get(1).trim().isEmpty())) {
      return lines.get(0);
    }
    throw new IOException("Did not find a properly formatted secret file");
  }

}
