//package acmcsus.debugjudge.ctrl.api;
//
//import acmcsus.debugjudge.*;
//import acmcsus.debugjudge.ctrl.*;
//import acmcsus.debugjudge.proto.Competition.*;
//import acmcsus.debugjudge.ws.*;
//import com.fasterxml.jackson.databind.*;
//import spark.*;
//
//import java.io.*;
//import java.time.*;
//import java.util.*;
//
//import static acmcsus.debugjudge.ctrl.CompetitionController.getCompetitionState;
//import static acmcsus.debugjudge.ctrl.FileStore.createSubmission;
//import static acmcsus.debugjudge.ctrl.api.ApiBaseController.writeForTeam;
//import static java.lang.String.format;
//import static spark.Spark.*;
//
//class ApiTeamController {
//
//  private ApiTeamController() { /* Static */ }
//
//  static void teamApiPath() {
//    Spark.before("/*", SecurityApi::teamFilter);
//    get("/submissions", ApiTeamController::getSubmissions);
//    post("/submissions", ApiTeamController::newSubmission);
//  }
//
//
//  private static String getSubmissions(Request req, Response res) throws IOException {
//    Profile profile = SecurityApi.getProfile(req);
//    if (profile == null) {
//      throw halt(401);
//    }
//
//    return writeForTeam(FileStore.getSubmissionsForTeam(profile));
//  }
//
//  @Deprecated
//  private static String newSubmission(Request req, Response res) {
//    if (getCompetitionState() != CompetitionState.STARTED) {
//      BaseSocketService.alert(SecurityApi.getProfileNonNull(req), "Can't submit right now!");
//      throw halt(400);
//    }
//
//    try {
//      JsonNode json = ProcessBody.asJson(req);
//
//      Long teamId = req.attribute("profile");
//      Long problemId = json.get("problem_id").asLong();
//      Date submittedAt = Date.from(Instant.now());
//      String code = json.get("code").asText();
//
//      Submission.Builder builder = Submission.newBuilder();
//      builder.setTeamId(teamId);
//      builder.setProblemId(problemId);
//      builder.setSubmissionTimeMillis(submittedAt.getTime());
//      builder.setDebuggingSubmission(
//        Submission.DebuggingSubmission.newBuilder().setCode(code));
//
//      return Long.toString(createSubmission(builder.build()));
//    }
//    catch (Exception e) {
//      StringWriter sw = new StringWriter();
//      e.printStackTrace(new PrintWriter(sw));
//
//      throw halt(400, format("{\"error\":\"%s\"}",
//        sw.toString()
//          .replaceAll("\"", "\\\"")
//          .replaceAll("\\\\", "\\\\")));
//    }
//  }
//
//}
