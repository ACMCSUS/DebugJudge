package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.*;
import acmcsus.debugjudge.proto.Competition.*;
import com.fasterxml.jackson.databind.*;
import spark.*;

import java.io.*;
import java.util.*;

import static acmcsus.debugjudge.ctrl.MessageStores.PROFILE_STORE;
import static acmcsus.debugjudge.ctrl.MessageStores.getLoginSecret;
import static java.lang.Integer.parseInt;
import static java.util.Objects.requireNonNull;
import static spark.Spark.halt;

public class SecurityApi {

  private SecurityApi() { /* Static */ }

  public static Object registerTeam(Request req, Response res) throws IOException {
    Profile registrar = getProfile(req);

    if (registrar == null || registrar.getProfileType() != Profile.ProfileType.REGISTRAR) {
      throw halt(403);
    }

    Profile profile;
    JsonNode json = ProcessBody.asJson(req);
    Profile.Builder builder = Profile.newBuilder();

    builder.setName(json.get("team_name").asText());
    builder.setProfileType(Profile.ProfileType.TEAM);
    profile = builder.build();

    profile = PROFILE_STORE.create(profile);

    String loginSecret = PasswordGenerator.randomPassword();
    MessageStores.writeLoginSecret(profile.getId(), loginSecret);

    res.type("application/json");
    return String.format("{" +
      "\"username\":\"team_%d\"," +
      "\"password\":\"%s\"" +
      "}", profile.getId(), loginSecret);
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

    public Integer getId() {
      return parseInt(username.substring(username.indexOf("_") + 1));
    }
  }

  public static String login(Request req, Response res) {
    try {
      LoginAttempt loginAttempt = new LoginAttempt(ProcessBody.asMap(req.body(), "UTF-8"));
      return login(req, res, loginAttempt);
    }
    catch (HaltException he) {
      throw he;
    }
    catch (Exception ignored) {
      ignored.printStackTrace();
    }
    throw halt(401, "Bad Username");
  }

  private static String login(Request req, Response res, LoginAttempt loginAttempt) throws IOException {
    Profile profile = PROFILE_STORE.readFromPath(PROFILE_STORE.getPathForId(loginAttempt.getId()));

    if (profile == null || !getLoginSecret(profile.getId()).equals(loginAttempt.password)) {
      throw halt(401, "Incorrect id number or incorrect password");
    }

    req.session().attribute("profile", profile.getId());
    res.redirect("/");
    return "";
  }

  public static String logout(Request req, Response res) {
    req.session().attribute("profile", null);
    res.redirect("/login");
    return "";
  }

  public static Profile getProfile(Request req) {
    Integer id = req.session().attribute("profile");
    if (id == null) {
      return null;
    }

    try {
      return PROFILE_STORE.readFromPath(PROFILE_STORE.getPathForId(id));
    }
    catch (Exception e) {
      return null;
    }
  }

  public static Profile getProfileNonNull(Request req) {
    return requireNonNull(getProfile(req));
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
    else if (prof.getProfileType() != Profile.ProfileType.TEAM) {
      throw halt(403);
    }
  }

  public static void judgeFilter(Request req, Response res) {
    Profile prof = getProfile(req);
    if (prof == null) {
      throw halt(401);
    }
    else if (prof.getProfileType() != Profile.ProfileType.JUDGE) {
      throw halt(403);
    }
  }

  public static void adminFilter(Request req, Response res) {
    Profile prof = getProfile(req);
    if (prof == null) {
      throw halt(401);
    }
    else if (prof.getProfileType() != Profile.ProfileType.ADMIN) {
      throw halt(403);
    }
  }
}
