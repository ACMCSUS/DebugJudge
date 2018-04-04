package acmcsus.debugjudge.test;

import acmcsus.debugjudge.proto.*;
import com.google.protobuf.*;
import org.junit.*;

import java.io.*;

public class Toml2Proto {

  @Test
  public void toml2Proto() throws IOException {
    Competition.Profile.Builder builder = Competition.Profile.newBuilder();
    TextFormat.merge("" +
      "name: '\\nasdf\\nasdf\\nasdf'\n" +
      "profile_type: JUDGE", builder);

    TextFormat.print(builder.build(), System.out);
//    builder.fields

//    assertEquals(0L, sub.getProblemId());
//    assertEquals(1L, sub.getTeamId());
  }

}
