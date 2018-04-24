package acmcsus.debugjudge.ctrl.api;

import acmcsus.debugjudge.*;
import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.proto.Competition.*;
import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.google.inject.*;
import spark.*;

import java.io.*;
import java.util.*;

import static spark.Spark.*;

public class ApiBaseController {

  public static void baseApiPath() {
    Spark.before("/*", SecurityApi::loggedInFilter);
    after("/*", (req, res) -> res.type("application/json"));

    get("/profile", ApiBaseController::getProfile);
//    get("/teams", ApiBaseController::getTeams);
//    get("/problems", ApiBaseController::getProblems);

//    path("/t/", ApiTeamController::teamApiPath);
//    path("/j/", ApiJudgeController::judgeApiPath);
//    path("/a/", ApiAdminController::adminApiPath);
  }

//  private static String getTeams(Request req, Response res) throws IOException {
//    return writeForView(PROFILE_STORE.readAll().toArray(), Views.PublicView.class);
//  }

  @Inject
  static CompetitionController competitionController;

//  private static String getProblems(Request req, Response res) throws IOException {
//    Profile profile = SecurityApi.getProfileNonNull(req);
//
//    // TODO: This is unnecessary, useful for debugging
////    FileStore.readProblems();
//
//    if (competitionController.getCompetitionState() == CompetitionState.WAITING &&
//        profile.getProfileType() == Profile.ProfileType.TEAM) {
//      return "[]";
//    }
//
//    List<Problem> result = PROBLEM_STORE.readAll();
//
//    if (profile.getProfileType() == Profile.ProfileType.JUDGE) {
//      return writeForJudge(result);
//    }
//    else {
//      return writeForTeam(result);
//    }
//  }

  private static String getProfile(Request req, Response res) throws JsonProcessingException {
    ObjectNode jsonNode = new ObjectNode(JsonNodeFactory.instance);
    Profile profile = SecurityApi.getProfile(req);
    if (profile == null) {
      throw halt(401);
    }

    jsonNode.put("id", profile.getId());
    jsonNode.put("name", profile.getName());
    jsonNode.put("profileType", profile.getProfileType().getNumber());

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
