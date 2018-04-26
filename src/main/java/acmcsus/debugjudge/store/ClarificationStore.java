package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Competition.Clarification;
import com.google.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

import static java.lang.String.format;
import static java.util.Objects.requireNonNull;

@Singleton
public class ClarificationStore extends MessageStore<Clarification> {

  private static Logger logger = LoggerFactory.getLogger(ClarificationStore.class);

  @Override
  public Clarification.Builder newBuilder() {
    return Clarification.newBuilder();
  }

  @Override
  public Path getPath(Clarification clarification) {
    return pathForId(requireNonNull(clarification).getId());
  }

  public Path pathForId(String id) {
    return dataDirectoryPath.resolve(
        format("clars/%s.textproto", id));
  }

  @Override
  public Stream<Path> getAllPaths() {
    try {
      return Files.find(dataDirectoryPath.resolve("clars/"), 3,
          (p, bfa) -> bfa.isRegularFile() && p.getFileName().toString().endsWith(".textproto"));
    }
    catch (IOException e) {
      logger.error("Could not start path finder", e);
      return Stream.empty();
    }
  }
}
