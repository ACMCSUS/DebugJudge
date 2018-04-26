package acmcsus.debugjudge.store;

import acmcsus.debugjudge.proto.Algorithmic.ProgrammingLanguage;
import com.google.inject.Singleton;
import com.google.protobuf.TextFormat;

import java.io.IOException;
import java.io.Reader;
import java.util.List;

import static acmcsus.debugjudge.store.MessageStore.dataDirectoryPath;
import static java.nio.file.Files.newBufferedReader;

@Singleton
public class LanguageStore {

  public List<ProgrammingLanguage> readLanguages() throws IOException {
    Reader fileReader = newBufferedReader(dataDirectoryPath.resolve("languages.textproto"));
    ProgrammingLanguage.List.Builder listBuilder = ProgrammingLanguage.List.newBuilder();
    TextFormat.merge(fileReader, listBuilder);
    return listBuilder.getLanguageList();
  }

}
