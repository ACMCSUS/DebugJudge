package acmcsus.debugjudge.ctrl.api;

import static acmcsus.debugjudge.ctrl.CompetitionController.changeCompetitionState;
import static spark.Spark.get;

import acmcsus.debugjudge.ctrl.CompetitionController;
import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.proto.Competition.CompetitionState;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import spark.Request;
import spark.Response;
import spark.Spark;

class ApiAdminController {

  private ApiAdminController() { /* Static */ }

  static void adminApiPath() {
    Spark.before("/*", SecurityApi::judgeFilter);

    get("/reset", (req, res) -> {
      changeCompetitionState(CompetitionState.WAITING);
      return "{\"result\":\"okay\"}";
    });

    get("/start", (req, res) -> {
      changeCompetitionState(CompetitionState.STARTED);
      return "{\"result\":\"okay\"}";
    });

    get("/stop", (req, res) -> {
      changeCompetitionState(CompetitionState.STOPPED);
      return "{\"result\":\"okay\"}";
    });

    get("/status", ApiAdminController::getCompetitionStatus);
  }

  private static String getCompetitionStatus(Request req, Response res) throws IOException {
    Map<String, String> ret = new HashMap<>();

    ret.put("competitionState", CompetitionController.getCompetitionState().name());

    ObjectMapper objectMapper = new ObjectMapper();
    return objectMapper.writeValueAsString(ret);
  }

}
