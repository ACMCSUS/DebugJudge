package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Algorithmic.ProgrammingLanguage;
import com.google.inject.Singleton;
import com.google.protobuf.TextFormat;

import java.io.IOException;
import java.io.Reader;
import java.util.List;

import static acmcsus.debugjudge.store.MessageStore.dataDirectoryPath;
import static java.nio.file.Files.newBufferedReader;

public class BalloonDeliveryStore {

  public static BalloonDeliveries getDeliveries(int teamId) throws IOException {
    Reader fileReader = newBufferedReader(
      profileDirectoryPath.resolve(format("prof%d/deliveries.textproto", teamId)));
    BalloonDeliveries.Builder builder = BalloonDeliveries.newBuilder();
    TextFormat.merge(fileReader, builder);
    return builder.build();
  }

}
