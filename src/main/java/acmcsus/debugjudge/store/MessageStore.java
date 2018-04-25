package acmcsus.debugjudge.store;

import com.google.protobuf.Message;
import com.google.protobuf.TextFormat;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.HaltException;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.lang.String.format;
import static java.nio.file.Files.newBufferedReader;
import static java.nio.file.Files.newBufferedWriter;
import static java.util.Collections.unmodifiableList;
import static spark.Spark.halt;

// TODO: make this package-private
public abstract class MessageStore<M extends Message> {

  private static Logger logger = LoggerFactory.getLogger(MessageStore.class);

  static Path dataDirectoryPath = Paths.get(System.getenv().getOrDefault("DATA_DIR", "data"));
  static Path problemDirectoryPath = dataDirectoryPath.resolve("problems/");
  static Path profileDirectoryPath = dataDirectoryPath.resolve("profiles/");

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
