package acmcsus.debugjudge.ctrl;

import static spark.Spark.halt;

import acmcsus.debugjudge.PasswordGenerator;
import acmcsus.debugjudge.ProcessBody;
import acmcsus.debugjudge.model.Profile;
import com.fasterxml.jackson.databind.JsonNode;
import java.io.IOException;
import java.util.Map;
import spark.HaltException;
import spark.Request;
import spark.Response;

public class SecurityApi {

  private SecurityApi() { /* Static */ }

  public static Object registerTeam(Request req, Response res) throws IOException {
    Profile registrar = getProfile(req);

    if (registrar == null || !registrar.isJudge) {
      throw halt(403);
    }

    Profile team = new Profile();
    JsonNode json = ProcessBody.asJson(req);
    team.name = json.get("team_name").asText();
//    team.memberNames = json.get("member_names").asText();
    team.loginSecret = PasswordGenerator.randomPassword();
    team.isTeam = true;

    FileStore.saveProfile(team);

    res.type("application/json");
    return String.format("{" +
      "\"username\":\"team_%d\"," +
      "\"password\":\"%s\"" +
      "}", team.id, team.loginSecret);
  }

  private static class LoginAttempt {

    String username;
    String password;

    LoginAttempt(Map<String, String> map) {
      if (map.size() != 2 || !map.containsKey("username") || !map.containsKey("password")) {
        throw halt(401, "Could not parse form");
      }
      username = map.get("username");
      password = map.get("password");
    }

    public Long getId() {
      return Long.parseLong(username.substring(username.indexOf("_") + 1));
    }
  }

  public static String login(Request req, Response res) {
    try {
      LoginAttempt loginAttempt = new LoginAttempt(ProcessBody.asMap(req.body(), "UTF-8"));
      return login(req, res, loginAttempt);
    } catch (HaltException he) {
      throw he;
    } catch (Exception ignored) {
      ignored.printStackTrace();
    }
    throw halt(401, "Bad Username");
  }

  private static String login(Request req, Response res, LoginAttempt loginAttempt) {
    Profile profile = FileStore.getProfile(loginAttempt.getId());
    System.out.println(profile);

    if (profile == null || !profile.loginSecret.equals(loginAttempt.password)) {
      throw halt(401, "Incorrect id number or incorrect password");
    }

    req.session().attribute("profile", profile.id);
    res.redirect("/");
    return "";
  }

  public static String logout(Request req, Response res) {
    req.session().attribute("profile", null);
    res.redirect("/login");
    return "";
  }

  public static Profile getProfile(Request req) {
    Long id = req.session().attribute("profile");
    if (id == null) { return null; }

    try {
      return FileStore.getProfile(id);
    } catch (Exception e) {
      return null;
    }
  }

  public static boolean isLoggedIn(Request req) {
    return getProfile(req) != null;
  }

  public static void loggedInFilter(Request req, Response res) {
    if (!isLoggedIn(req)) {
      throw halt(401, "You must be logged in to use this API route!");
    }
  }

  public static void teamFilter(Request req, Response res) {
    Profile prof = getProfile(req);
    if (prof == null) {
      throw halt(401);
    }
    else if (!prof.isTeam) {
      throw halt(403);
    }
  }

  public static void judgeFilter(Request req, Response res) {
    Profile prof = getProfile(req);
    System.out.println(prof);
    if (prof == null) {
      throw halt(401);
    }
    else if (!prof.isJudge) {
      throw halt(403);
    }
  }

  public static void adminFilter(Request req, Response res) {
    Profile prof = getProfile(req);
    if (prof == null) {
      throw halt(401);
    }
    else if (!prof.isAdmin) {
      throw halt(403);
    }
  }
}
