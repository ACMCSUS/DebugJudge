package acmcsus.debugjudge.model;

import com.moandjiezana.toml.TomlWriter;
import java.io.IOException;
import java.io.StringWriter;

public class Profile {

  public boolean isTeam;
  public boolean isJudge;
  public boolean isAdmin;

  public Long id;
  public String name;
  public String loginSecret;

  @Override
  public String toString() {
    try {
      StringWriter writer = new StringWriter();
      new TomlWriter().write(this, writer);
      return writer.toString();
    } catch (IOException e) {
      e.printStackTrace();
      return super.toString();
    }
  }

}
