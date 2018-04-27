package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Admin.A2SMessage.SetSchedulingMessage;
import com.google.protobuf.TextFormat;

import java.io.IOException;
import java.io.Reader;
import java.io.Writer;
import java.nio.file.Path;

import static acmcsus.debugjudge.store.MessageStore.dataDirectoryPath;
import static java.nio.file.Files.newBufferedReader;
import static java.nio.file.Files.newBufferedWriter;

public class SchedulingStore {

  private static Path schedulingConfigPath = dataDirectoryPath.resolve("schedule.textproto");

  public static SetSchedulingMessage getScheduling() throws IOException {
    SetSchedulingMessage.Builder builder = SetSchedulingMessage.newBuilder();
    {
      Reader reader = newBufferedReader(schedulingConfigPath);
      TextFormat.merge(reader, builder);
      reader.close();
    }
    return builder.build();
  }

  public static void save(SetSchedulingMessage schedule) throws IOException {
    Writer writer = newBufferedWriter(schedulingConfigPath);
    TextFormat.print(schedule, writer);
    writer.flush();
    writer.close();
  }

}
