package acmcsus.debugjudge.ctrl;

import static spark.Spark.halt;

import acmcsus.debugjudge.PasswordGenerator;
import acmcsus.debugjudge.ProcessBody;
import acmcsus.debugjudge.model.Competition;
import acmcsus.debugjudge.model.Judge;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.model.Team;
import com.fasterxml.jackson.databind.JsonNode;
import java.io.IOException;
import java.util.Map;
import spark.HaltException;
import spark.Request;
import spark.Response;

public class SecurityApi {

  private SecurityApi() { /* Static */ }

  public static Object registerTeam(Request req, Response res) throws IOException {
    Judge judge = getJudge(req);

    Team team = new Team();
    JsonNode json = ProcessBody.asJson(req);
    team.teamName = json.get("team_name").asText();
    team.memberNames = json.get("member_names").asText();
    team.competition = judge.competition;
    team.loginSecret = PasswordGenerator.randomPassword();

    team.save();

    res.type("application/json");
    return String.format("{" +
      "\"username\":\"team_%d\"," +
      "\"password\":\"%s\"" +
      "}", team.id, team.loginSecret);
  }

  private static class LoginAttempt {

    public String username;
    public String password;

    public LoginAttempt(Map<String, String> map) {
      if (map.size() != 2 || !map.containsKey("username") || !map.containsKey("password")) {
        throw halt(401, "Could not parse form");
      }
      username = map.get("username");
      password = map.get("password");
    }

    public boolean isTeamLogin() {
      return username.length() < 32
        && username.matches("team_\\d+");
    }

    public boolean isJudgeLogin() {
      return username.length() < 32
        && username.matches("judge_\\d+");
    }

    public Long getId() {
      return Long.parseLong(username.substring(username.indexOf("_") + 1));
    }
  }

  public static String login(Request req, Response res) {
    try {
      LoginAttempt loginAttempt = new LoginAttempt(ProcessBody.asMap(req.body(), "UTF-8"));

      if (loginAttempt.isTeamLogin()) {
        return loginTeam(req, res, loginAttempt);
      }
      else if (loginAttempt.isJudgeLogin()) {
        return loginJudge(req, res, loginAttempt);
      }
    } catch (HaltException he) {
      throw he;
    } catch (Exception ignored) {
      ignored.printStackTrace();
    }
    throw halt(401, "Bad Username");
  }

  public static String logout(Request req, Response res) {
    req.session().attribute("team", null);
    req.session().attribute("judge", null);
    res.redirect("/login");
    return "";
  }

  private static String loginTeam(Request req, Response res, LoginAttempt loginAttempt) {
    Team team = Team.find.byId(loginAttempt.getId());

    if (team == null || !team.loginSecret.equals(loginAttempt.password)) {
      throw halt(401, "Incorrect team number or incorrect Password");
    }

    req.session().attribute("team", team.id);
    res.redirect("/");
    return "";
  }

  private static String loginJudge(Request req, Response res, LoginAttempt loginAttempt) {
    Judge judge = Judge.find.byId(loginAttempt.getId());

    if (judge == null || !judge.loginSecret.equals(loginAttempt.password)) {
      throw halt(401, "Incorrect judge number or incorrect password");
    }

    req.session().attribute("judge", judge.id);
    res.redirect("/");
    return "";
  }

  public static void loggedInFilter(Request req, Response res) {
    if (!isLoggedIn(req)) {
      throw halt(401, "You must be logged in to use this API route!");
    }
  }

  public static void teamFilter(Request req, Response res) {
    if (getTeam(req) == null) {
      throw halt(401, "You must be logged in as a team to use this API route!");
    }
  }

  public static void judgeFilter(Request req, Response res) {
    if (getJudge(req) == null) {
      throw halt(401, "You must be logged in as a judge to use this API route!");
    }
  }

  public static Team getTeam(Request req) {
    Long teamId = req.session().attribute("team");
    if (teamId == null) { return null; }

    try {
      return Team.find.byId(teamId);
    } catch (Exception e) {
      return null;
    }
  }

  public static Judge getJudge(Request req) {
    Long judgeId = req.session().attribute("judge");
    if (judgeId == null) { return null; }

    try {
      return Judge.find.byId(judgeId);
    } catch (Exception e) {
      return null;
    }
  }

  public static Profile getProfile(Request req) {
    Team team = getTeam(req);
    if (team != null) { return team; }
    return getJudge(req);
  }

  public static Competition getCompetition(Request req) {
    Team team = getTeam(req);
    if (team != null) { return team.competition; }

    Judge judge = getJudge(req);
    if (judge != null) { return judge.competition; }

    return null;
  }

  public static boolean isLoggedIn(Request req) {
    return getProfile(req) != null;
  }
}
