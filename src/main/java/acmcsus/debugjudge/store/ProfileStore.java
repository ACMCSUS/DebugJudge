package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Competition;
import com.google.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.PrintStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

import static java.lang.String.format;
import static java.nio.file.Files.createDirectories;

@Singleton
public class ProfileStore extends MessageStore<Competition.Profile> {

  private static Logger logger = LoggerFactory.getLogger(ProfileStore.class);

  @Override
  public Competition.Profile.Builder newBuilder() {
    return Competition.Profile.newBuilder();
  }

  @Override
  public Path getPath(Competition.Profile profile) {
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
  public Competition.Profile create(Competition.Profile profile) throws IOException {
    requireValid(profile);

    Competition.Profile.Builder builder = Competition.Profile.newBuilder();
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
