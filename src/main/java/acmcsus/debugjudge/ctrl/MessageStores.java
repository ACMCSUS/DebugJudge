package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Competition.*;
import com.google.protobuf.*;
import com.google.protobuf.Message.*;
import org.slf4j.*;
import spark.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.stream.*;

import static java.lang.String.format;
import static java.nio.file.Files.*;
import static java.util.Collections.unmodifiableList;
import static spark.Spark.halt;

// TODO: make this package-private
public class MessageStores {

  private static Logger logger = LoggerFactory.getLogger(MessageStore.class);

  private static Path problemDirectoryPath = Paths.get("data/problems/");
  private static Path profileDirectoryPath = Paths.get("data/profiles/");

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
    public Builder newBuilder() {
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
                  p.getName(1).toString().matches("prob\\d+") &&
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
                  p.getName(2).toString().matches("prob\\d+") &&
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
//            p.getName(1).toString().matches("prob\\d+") &&
//            p.getFileName().toString().equals("sub\\d+.textproto"));
//    }

    @Override
    public Submission clearProtectedFields(Submission submission) {
      Submission.Builder builder = Submission.newBuilder(submission);

      builder.clearJudgeId();
      builder.clearJudgement();
      builder.clearJudgementMessage();

      return super.clearProtectedFields(builder.build());
    }
  }

  public static class ProfileStore extends MessageStore<Profile> {

    @Override
    public Builder newBuilder() {
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
    public Builder newBuilder() {
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
          builder.getAlgorithmicProblemBuilder().clearValidatorProgram();
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
      return builder.build();
    }
  }

  //  public static List<Problem> getProblems() throws IOException {
//    if (problems == null) {
//      readProblems();
//    }
//    return problems;
//  }
//
//  public static void readProfile(long id) {
//    readProfile(profileDirectoryPath.resolve(format("prof%d/profile.textproto", id)));
//  }
//
//  public static void readProfile(Path profilePath) {
//    try {
//      Profile.Builder builder = Profile.newBuilder();
//      TextFormat.merge(newBufferedReader(profilePath), builder);
//      profilesById.put(builder.getId(), builder.build());
//    }
//    catch (IOException ioexception) {
//      logger.error("error reading profile from " + profilePath, ioexception);
//    }
//  }
//
//  public static void readProfiles() throws IOException {
//  }
//
//  public static Profile getProfile(long id) throws IOException {
//    if (!profilesById.containsKey(id)) {
//      readProfile(id);
//    }
//    return profilesById.get(id);
//  }
//
//  public static long createProfile(Profile profile) throws IOException {
//
//  }
//
//  public static Collection<Profile> getTeams() throws IOException {
//    if (profilesById.isEmpty()) {
//      readProfiles();
//    }
//    return profilesById.values().stream()
//      .filter(p -> p.getProfileType() == Profile.ProfileType.TEAM)
//      .collect(Collectors.toCollection(ArrayList::new));
//  }
//
//  public static Submission[] getSubmissionsForTeam(Profile profile) throws IOException {
//    Path teamSubDirectory = profileDirectoryPath
//      .resolve(format("prof%d/submissions", profile.getId()));
//    createDirectories(teamSubDirectory);
//
//    Stream<Path> subPaths = Files.find(teamSubDirectory, 2,
//      (path, bfa) -> bfa.isRegularFile() && path.toFile().getName().endsWith(".textproto"));
//
//    return subPaths
//      .map(FileStore::getSubmissionFromPath)
//      .filter(Objects::nonNull)
//      .toArray(Submission[]::new);
//  }
//
//  public static Submission getSubmissionFromPath(Path path) {
//    try {
//      Submission.Builder builder = Submission.newBuilder();
//      TextFormat.merge(Files.newBufferedReader(path), builder);
//      return builder.build();
//    }
//    catch (IOException e) {
//      logger.warn("Error reading submission from " + path, e);
//      return null;
//    }
//  }
//
//  public static Submission getSubmissionFromIds(Long tid, Long pid, Long sid) {
//    Path submissionPath = profileDirectoryPath.resolve(
//      format("prof%d/submissions/prob%d/sub%d.textproto", tid, pid, sid));
//
//    return getSubmissionFromPath(submissionPath);
//  }
//
//  public static String createSubmission(Submission submission) throws IOException {
//    Path submissionPath = profileDirectoryPath.resolve(
//      format("prof%d/submissions/prob%d/sub%d.textproto",
//        submission.getTeamId(),
//        submission.getProblemId(),
//        submission.getSubmissionTimeSeconds()));
//
//    createDirectories(submissionPath.getParent());
//
////    submission(format("prof%d/prob%d/%d",
////      submission.getTeamId(),
////      submission.getProblemId(),
////      submission.getSubmissionTimeMillis()));
//
//    BufferedWriter writer = newBufferedWriter(submissionPath);
//    TextFormat.print(submission, writer);
//    writer.close();
//  }
//
//  public static void saveSubmission(Submission submission, Profile profile, SubmissionJudgement
// ruling) {
//    Path submissionPath =
//
//    Submission.Builder builder = Submission.newBuilder(getSubmissionFromPath(submissionPath));
//    builder.setJudgement(ruling);
//    builder.setJudgementMessage();
//
//    if (!Files.exists(submissionPath)) {
//      throw new RuntimeException("Tried to save ruling for a submission that doesn't exist");
//    }
//  }
//
//  // TODO: Make this more secure? Not strictly necessary.
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
