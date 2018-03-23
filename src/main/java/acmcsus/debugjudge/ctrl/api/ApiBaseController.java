package acmcsus.debugjudge.ctrl.api;

import static acmcsus.debugjudge.ctrl.CompetitionController.getCompetitionState;
import static spark.Spark.after;
import static spark.Spark.get;
import static spark.Spark.halt;
import static spark.Spark.path;

import acmcsus.debugjudge.Views;
import acmcsus.debugjudge.ctrl.FileStore;
import acmcsus.debugjudge.ctrl.ScoreboardController;
import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.model.Problem;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.proto.Competition.CompetitionState;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.io.IOException;
import java.util.List;
import spark.Request;
import spark.Response;
import spark.Spark;

public class ApiBaseController {

  public static void baseApiPath() {
    Spark.before("/*", SecurityApi::loggedInFilter);
    after("/*", (req, res) -> res.type("application/json"));

    get("/profile", ApiBaseController::getProfile);
    get("/teams", ApiBaseController::getTeams);
    get("/problems", ApiBaseController::getProblems);
    get("/scoreboard", ScoreboardController::getScoreboard);

    path("/t/", ApiTeamController::teamApiPath);
    path("/j/", ApiJudgeController::judgeApiPath);
    path("/a/", ApiAdminController::adminApiPath);
  }

  private static String getTeams(Request req, Response res) throws IOException {
    return writeForView(FileStore.getTeams(), Views.PublicView.class);
  }

  private static String getProblems(Request req, Response res) throws IOException {
    Profile profile = SecurityApi.getProfile(req);

    // TODO: This is unnecessary, useful for debugging
    FileStore.readProblems();

    if (getCompetitionState() == CompetitionState.WAITING && profile.isTeam) {
      return "[]";
    }

    List<Problem> result = FileStore.getProblems();
    return writeForJudge(result);
  }

  private static String getProfile(Request req, Response res) throws JsonProcessingException {
    ObjectNode jsonNode = new ObjectNode(JsonNodeFactory.instance);
    Profile profile = SecurityApi.getProfile(req);
    if (profile == null) { throw halt(401); }

    jsonNode.put("id", profile.id);
    jsonNode.put("name", profile.name);

    ObjectMapper mapper = new ObjectMapper();
    return mapper.writeValueAsString(jsonNode);
  }

  static String writeForTeam(Object result) throws JsonProcessingException {
    return writeForView(result, Views.TeamView.class);
  }
  static String writeForJudge(Object result) throws JsonProcessingException {
    return writeForView(result, Views.JudgeView.class);
  }
  static String writeForPublic(Object result) throws JsonProcessingException {
    return writeForView(result, Views.PublicView.class);
  }

  static String writeForView(Object result, Class clazz) throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    ObjectWriter writer = mapper.writerWithView(clazz);
    return writer.writeValueAsString(result);
  }

}
