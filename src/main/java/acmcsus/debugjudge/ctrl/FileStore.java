package acmcsus.debugjudge.ctrl;

import static java.lang.String.format;

import acmcsus.debugjudge.model.Problem;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.model.Submission;
import com.moandjiezana.toml.Toml;
import com.moandjiezana.toml.TomlWriter;
import java.io.File;
import java.io.FileFilter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FileStore {

  private static final FileFilter TOML_FILTER =
    p -> p.getName().endsWith(".toml");

  private static final TomlWriter TOML_WRITER = new TomlWriter.Builder()
    .indentTablesBy(4)
    .indentValuesBy(4)
    .build();

  private static Path problemDirectoryPath = Paths.get("data/problems/");
  private static Path profileDirectoryPath = Paths.get("data/profiles/");

  private static Map<Long, Profile> profilesById = new HashMap<>();
  private static List<Problem> problems = null;

  public static void readProblems() throws IOException {
    File problemDirectory = problemDirectoryPath.toFile();

    File[] files = problemDirectory.listFiles(TOML_FILTER);

    if (files == null) {
      System.err.println("data/problems must be a directory!");
      System.exit(1);
    }

    List<Problem> problems = new ArrayList<>();

    for (File file : files) {
      try {
        FileReader fileReader = new FileReader(file);
        Toml toml = new Toml();
        toml.read(fileReader);
        problems.add(toml.to(Problem.class));
      } catch (FileNotFoundException e) {
        e.printStackTrace();
      }
    }

    FileStore.problems = problems;
  }

  public static List<Problem> getProblems() throws IOException {
    if (problems == null) {
      readProblems();
    }
    return problems;
  }

  public static void readProfile(long id) {
    readProfile(profileDirectoryPath.resolve(format("prof%d/profile.toml", id)));
  }

  public static void readProfile(Path profilePath) {
    Toml toml = new Toml();
    toml.read(profilePath.toFile());

    Profile profile = toml.to(Profile.class);
    profilesById.put(profile.id, profile);
  }

  public static void readProfiles() throws IOException {
    Files.find(profileDirectoryPath, 2,
      (p, bfa) ->
        bfa.isRegularFile() &&
          p.getName(0).toString().matches("prof[0-9]+") &&
          p.getFileName().toString().equals("profile.toml"))
      .forEach(FileStore::readProfile);
  }

  public static Profile getProfile(long id) {
    if (!profilesById.containsKey(id)) {
      readProfile(id);
    }
    return profilesById.get(id);
  }

  public static void saveProfile(Profile profile) throws IOException {
    if (profile.id == null) {
      profile.id = 0L;
      while (Files.exists(profileDirectoryPath.resolve("prof" + profile.id))) {
        profile.id++;
      }
      Files.createDirectories(profileDirectoryPath.resolve("prof" + profile.id + "/submissions"));
      profilesById.put(profile.id, profile);
    }
    TOML_WRITER.write(profile,
      profileDirectoryPath.resolve(format("prof%d/profile.toml", profile.id)).toFile());
  }

  public static Collection<Profile> getTeams() throws IOException {
    if (profilesById.isEmpty()) {
      readProfiles();
    }
    return profilesById.values().stream()
      .filter(p -> p.isTeam)
      .collect(Collectors.toCollection(ArrayList::new));
  }

  public static Submission[] getSubmissionsForTeam(Profile profile) throws IOException {
    Path teamSubDirectory = profileDirectoryPath.resolve(format("prof%d/submissions", profile.id));
    Files.createDirectories(teamSubDirectory);

    Stream<Path> subTomlPaths = Files.find(teamSubDirectory, 2,
      (path, bfa) -> bfa.isRegularFile() && path.toFile().getName().endsWith(".toml"));

    return subTomlPaths
      .map(FileStore::getSubmissionFromTomlPath)
      .filter(Objects::nonNull)
      .toArray(Submission[]::new);
  }

  public static Submission getSubmissionFromTomlPath(Path path) {
    try {
      FileReader fileReader = new FileReader(path.toFile());
      Toml toml = new Toml();
      toml.read(fileReader);
      Submission sub = toml.to(Submission.class);
      return sub;
    } catch (IOException e) {
      e.printStackTrace();
      return null;
    }
  }

  public static Submission getSubmissionFromIds(Long tid, Long pid, Long sid) {
    Path submissionPath = profileDirectoryPath.resolve(
      format("prof%d/submissions/prob%d/sub%d.toml", tid, pid, sid));

    Toml toml = new Toml();
    toml.read(submissionPath.toFile());
    return toml.to(Submission.class);
  }

  public static void saveSubmission(Submission submission) throws IOException {
    Path submissionPath = profileDirectoryPath.resolve(
      format("prof%d/submissions/prob%d/sub%d.toml", submission.teamId, submission.problemId,
        submission.id));

    Files.createDirectories(submissionPath.getParent());

    TOML_WRITER.write(submission, submissionPath.toFile());
  }
}
