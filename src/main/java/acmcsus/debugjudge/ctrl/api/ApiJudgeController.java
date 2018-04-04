//package acmcsus.debugjudge.ctrl.api;
//
//import acmcsus.debugjudge.ctrl.*;
//import acmcsus.debugjudge.proto.Competition.*;
//import com.fasterxml.jackson.core.*;
//import com.fasterxml.jackson.databind.*;
//import spark.*;
//
//import static acmcsus.debugjudge.ctrl.FileStore.getSubmissionFromIds;
//import static acmcsus.debugjudge.ctrl.SecurityApi.getProfile;
//import static java.lang.Long.parseLong;
//import static spark.Spark.get;
//import static spark.Spark.halt;
//
//class ApiJudgeController {
//
//  private ApiJudgeController() { /* Static */ }
//
//  static void judgeApiPath() {
//    Spark.before("/*", SecurityApi::judgeFilter);
//    get("/submission/:tid/:pid/:sid/", ApiJudgeController::getSubmission);
//  }
//
//  private static String getSubmission(Request req, Response res) throws JsonProcessingException {
//    Profile judge = getProfile(req);
//
//    if (judge == null) {
//      throw halt(401);
//    }
//
//    Submission result = getSubmissionFromIds(
//      parseLong(req.params("tid")),
//      parseLong(req.params("pid")),
//      parseLong(req.params("sid")));
//
//    if (result == null) {
//      throw halt(404);
//    }
//
//    ObjectMapper mapper = new ObjectMapper();
//    return mapper.writeValueAsString(result);
//  }
//}
