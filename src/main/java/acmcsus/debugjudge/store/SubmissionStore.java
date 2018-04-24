package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Competition;
import com.google.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

import static acmcsus.debugjudge.store.MessageStore.profileDirectoryPath;
import static java.lang.String.format;

@Singleton
public class SubmissionStore extends MessageStore<Competition.Submission> {

  private static Logger logger = LoggerFactory.getLogger(SubmissionStore.class);

  @Override
  public Competition.Submission.Builder newBuilder() {
    return Competition.Submission.newBuilder();
  }

  @Override
  public Path getPath(Competition.Submission submission) {
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
  public Competition.Submission clearProtectedFields(Competition.Submission submission) {
    Competition.Submission.Builder builder = Competition.Submission.newBuilder(submission);

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
