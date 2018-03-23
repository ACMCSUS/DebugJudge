package acmcsus.debugjudge.ctrl.api;

import static acmcsus.debugjudge.ctrl.FileStore.getSubmissionFromIds;
import static acmcsus.debugjudge.ctrl.SecurityApi.getProfile;
import static java.lang.Long.parseLong;
import static spark.Spark.get;
import static spark.Spark.halt;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.model.Submission;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import spark.Request;
import spark.Response;
import spark.Spark;

class ApiJudgeController {

  private ApiJudgeController() { /* Static */ }

  static void judgeApiPath() {
    Spark.before("/*", SecurityApi::judgeFilter);
    get("/submission/:tid/:pid/:sid/", ApiJudgeController::getSubmission);
  }

  private static String getSubmission(Request req, Response res) throws JsonProcessingException {
    Profile judge = getProfile(req);

    if (judge == null) {
      throw halt(401);
    }

    Submission result = getSubmissionFromIds(
      parseLong(req.params("tid")),
      parseLong(req.params("pid")),
      parseLong(req.params("sid")));

    if (result == null) {
      throw halt(404);
    }

    ObjectMapper mapper = new ObjectMapper();
    return mapper.writeValueAsString(result);
  }
}
