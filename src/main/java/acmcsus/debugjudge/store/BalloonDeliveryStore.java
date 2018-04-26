package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Algorithmic;
import acmcsus.debugjudge.proto.Algorithmic.BalloonDeliveries;
import acmcsus.debugjudge.proto.Algorithmic.BalloonDeliveries.BalloonDeliveryStatus;
import acmcsus.debugjudge.proto.Algorithmic.ProgrammingLanguage;
import com.google.inject.Singleton;
import com.google.protobuf.TextFormat;
import org.apache.commons.io.FileUtils;

import java.io.IOException;
import java.io.Reader;
import java.io.Writer;
import java.nio.file.Path;
import java.util.List;

import static acmcsus.debugjudge.store.MessageStore.dataDirectoryPath;
import static acmcsus.debugjudge.store.MessageStore.profileDirectoryPath;
import static java.lang.String.format;
import static java.nio.file.Files.newBufferedReader;
import static java.nio.file.Files.newBufferedWriter;

public class BalloonDeliveryStore {

  public static BalloonDeliveries getDeliveries(int teamId) throws IOException {
    Path filePath = profileDirectoryPath.resolve(format("prof%d/deliveries.textproto", teamId));
    FileUtils.touch(filePath.toFile());

    Reader fileReader = newBufferedReader(filePath);
    BalloonDeliveries.Builder builder = BalloonDeliveries.newBuilder();
    TextFormat.merge(fileReader, builder);
    return builder.build();
  }

  public static void setDeliveryStatus(int teamId, int problemId, BalloonDeliveryStatus status)
      throws IOException {
    Path filePath = profileDirectoryPath.resolve(format("prof%d/deliveries.textproto", teamId));
    FileUtils.touch(filePath.toFile());

    Reader fileReader = newBufferedReader(filePath);
    BalloonDeliveries.Builder builder = BalloonDeliveries.newBuilder();
    TextFormat.merge(fileReader, builder);

    builder.putDeliveries(problemId, status);

    Writer fileWriter = newBufferedWriter(filePath);
    TextFormat.print(builder, fileWriter);
    fileWriter.flush();
    fileWriter.close();
  }
}
