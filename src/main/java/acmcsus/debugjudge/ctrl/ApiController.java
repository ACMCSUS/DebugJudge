package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.ProcessBody;
import acmcsus.debugjudge.Views;
import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.WebSocket.S2CMessage.CompetitionStateChangeMessage.CompetitionState;
import acmcsus.debugjudge.ws.JudgeQueueHandler;
import acmcsus.debugjudge.ws.SocketHandler;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.ebean.Ebean;
import io.ebean.ExpressionList;
import spark.Request;
import spark.Response;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.sql.Date;
import java.time.Instant;
import java.util.List;

import static acmcsus.debugjudge.ctrl.SecurityApi.getCompetition;
import static acmcsus.debugjudge.ctrl.SecurityApi.getJudge;
import static java.lang.String.format;
import static spark.Spark.*;

public class ApiController {
    private ApiController(){ /* Static */ }

    private static final ObjectMapper errorMapper = new ObjectMapper();

    public static void routeAPI() {
        path("/api", () -> {

            before("/reset", SecurityApi::judgeFilter);
            get("/reset", (req, res) -> {
                if (competitionState != CompetitionState.WAITING) {
                    competitionState = CompetitionState.WAITING;
                    SocketHandler.teamReloadProblems();
                    SocketHandler.teamReloadStatus();
                }
                return "okay";
            });

            before("/start", SecurityApi::judgeFilter);
            get("/start", (req, res) -> {
                if (competitionState != CompetitionState.STOPPED) {
                    competitionState = CompetitionState.STARTED;
                    SocketHandler.broadcastStateChange();
                }
                return "okay";
            });

            before("/stop", SecurityApi::judgeFilter);
            get("/stop", (req, res) -> {
                if (competitionState != CompetitionState.STOPPED) {
                    competitionState = CompetitionState.STOPPED;
                    SocketHandler.teamReloadStatus();
                }
                return "okay";
            });

            before("/profile", SecurityApi::loggedInFilter);
            get("/profile", ApiController::getProfile);

            before("/teams", SecurityApi::loggedInFilter);
            get("/teams", ApiController::getTeams);
//            post("/teams" ApiController::newTeam);

            path("/team", () -> {
                before("/:id", SecurityApi::loggedInFilter);
                get("/:id", ApiController::getTeam);
            });


            before("/submissions", SecurityApi::loggedInFilter);
            get("/submissions", ApiController::getSubmissions);
            post("/submissions", ApiController::newSubmission);

            path("/submission", () -> {
                before("/:id", SecurityApi::loggedInFilter);
                get("/:id", ApiController::getSubmission);

                before("/:id/accept", SecurityApi::judgeFilter);
                post("/:id/accept", ApiController::acceptSubmission);

                before("/:id/reject", SecurityApi::judgeFilter);
                post("/:id/reject", ApiController::rejectSubmission);
            });


            before("/problems", SecurityApi::loggedInFilter);
            get("/problems", ApiController::getProblems);

            path("/problem", () -> {
                before("/:id", SecurityApi::loggedInFilter);
                get("/:id", ApiController::getProblem);
            });


            get("/scoreboard", ScoreboardController::getScoreboard);


            after("/*", (req, res) -> res.type("application/json"));
        });
    }

    public static CompetitionState competitionState = CompetitionState.WAITING;

    private static String getProfile(Request req, Response res) throws JsonProcessingException {
        ObjectNode jsonNode = new ObjectNode(JsonNodeFactory.instance);
        Profile profile = SecurityApi.getProfile(req);
        if (profile == null) throw halt(401);

        if (profile.getType() == Profile.ProfileType.TEAM) {
            jsonNode.put("type", "team");
            jsonNode.put("id", profile.getId());
            jsonNode.put("name", profile.getName());
            jsonNode.put("members", ((Team)profile).memberNames);

        } else if (profile.getType() == Profile.ProfileType.JUDGE) {
            jsonNode.put("type", "judge");
            jsonNode.put("id", profile.getId());
            jsonNode.put("name", profile.getName());

        } else {
            throw halt(401);
        }

        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(jsonNode);
    }

    public static String getTeams(Request req, Response res) throws JsonProcessingException {
        Competition competition = getCompetition(req);
        List<Team> result = Team.find.query().where()
                .eq("competition_id", competition.id)
                .findList();

        return writeForView(result, Views.PublicView.class);
    }
    public static String getTeam(Request req, Response res) throws JsonProcessingException {
        Team result = Team.find.query().where()
                .eq("id", req.params("id"))
                .findOne();

        if (result == null) throw halt(404);

        return writeForView(result, Views.PublicView.class);
    }

    public static String getSubmissions(Request req, Response res) throws JsonProcessingException {
        Profile profile = SecurityApi.getProfile(req);
        if (profile == null) throw halt(401);

        ExpressionList<Submission> expr = Submission.find.query()
                .fetch("problem", "*")
                .where()
                .eq("competition_id", profile.getCompetition().id);


        if (profile.getType() == Profile.ProfileType.TEAM) {
            expr = expr.eq("team_id", profile.getId());
        }

        return writeForProfile(expr.findList(), profile);
    }
    public static String getSubmission(Request req, Response res) throws JsonProcessingException {
        Team team = SecurityApi.getTeam(req);
        Judge judge = getJudge(req);

        Submission result = Submission.find.query()
                .fetch("problem", "*")
                .where()
                .eq("id", req.params("id"))
                .findOne();

        if (result == null || (judge == null && (team == null || !team.id.equals(result.team.id))))
            throw halt(404);

        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(result);
    }
    private static String newSubmission(Request req, Response res) {
        SecurityApi.teamFilter(req, res);

        if (competitionState != CompetitionState.STARTED) {
            SocketHandler.alert(SecurityApi.getProfile(req), "Can't submit right now!");
            throw halt(400);
        }

        try {
            JsonNode json = ProcessBody.asJson(req);

            Submission submission = new Submission();
            submission.team = SecurityApi.getTeam(req);
            submission.problem = Problem.find.byId(json.get("problem_id").asLong());
            submission.submittedAt = Date.from(Instant.now());
            submission.code = json.get("code").asText();

            submission.save();
            submission.refresh();

            Event event = new Event();
            event.submission = submission;
            event.eventType = Event.EventType.SUBMISSION;
            SocketHandler.notify(submission.team, event);

            JudgeQueueHandler.getInstance().submitted(submission);

            return Long.toString(submission.id);
        } catch (Exception e) {
            StringWriter sw = new StringWriter();
            e.printStackTrace(new PrintWriter(sw));

            throw halt(400, format("{\"error\":\"%s\"}",
                    sw.toString()
                            .replaceAll("\"", "\\\"")
                            .replaceAll("\\\\", "\\\\")));
        }
    }
    private static String acceptSubmission(Request req, Response res) {
        Judge judge = SecurityApi.getJudge(req);
        if (judge == null) throw halt(403);

        try {
            Submission submission = Submission.find.byId(Long.valueOf(req.params("id")));
            if (submission == null) throw halt(404);

            submission.accepted(judge, Date.from(Instant.now()));
            submission.update();

            Event event = new Event();
            event.submission = submission;
            event.eventType = Event.EventType.ACCEPTANCE;
            SocketHandler.notify(submission.team, event);

            JudgeQueueHandler.getInstance().accepted(submission);

            return "200";
        } catch (Exception e) {
            e.printStackTrace();
            throw halt(400);
        }
    }
    private static String rejectSubmission(Request req, Response res) {
        Judge judge = SecurityApi.getJudge(req);
        if (judge == null) throw halt(403);

        try {
            Submission submission = Submission.find.byId(Long.valueOf(req.params("id")));
            if (submission == null) throw halt(404);

            submission.rejected(judge, Date.from(Instant.now()));
            submission.update();

            Event event = new Event();
            event.submission = submission;
            event.eventType = Event.EventType.REJECTION;
            SocketHandler.notify(submission.team, event);

            JudgeQueueHandler.getInstance().rejected(submission);

            return "200";
        } catch (Exception e) {
            e.printStackTrace();
            throw halt(400);
        }
    }

    public static String getProblems(Request req, Response res) throws JsonProcessingException {
        Competition competition = getCompetition(req);
        Profile profile = SecurityApi.getProfile(req);

        if (competitionState == CompetitionState.WAITING &&
                profile.getType() != Profile.ProfileType.JUDGE) {
            return "[]";
        }

        List<Problem> result = Problem.find.query().where()
                .eq("competition_id", competition.id)
                .findList();

        return writeForProfile(result, profile);
    }
    public static String getProblem(Request req, Response res) throws JsonProcessingException {
        Competition competition = getCompetition(req);
        Profile profile = SecurityApi.getProfile(req);

        if (competitionState == CompetitionState.WAITING &&
                profile.getType() != Profile.ProfileType.JUDGE) {
            throw halt(404);
        }

        try {
            Problem result = Problem.find.query().where()
                    .eq("competition", competition.id)
                    .eq("id", Long.parseLong(req.params("id")))
                    .findOne();

            if (result == null) throw halt(404);

            return writeForProfile(result, profile);
        } catch (Exception e) {
            e.printStackTrace();
            throw halt(400);
        }
    }

    private static String writeForProfile(Object result, Profile profile) throws JsonProcessingException {
        Class clazz;

        if (profile != null && profile.getType() == Profile.ProfileType.TEAM)
            clazz = Views.TeamView.class;
        else if (profile != null && profile.getType() == Profile.ProfileType.JUDGE)
            clazz = Views.JudgeView.class;
        else
            clazz = Views.PublicView.class;

        return writeForView(result, clazz);
    }
    private static String writeForView(Object result, Class clazz) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        ObjectWriter writer = mapper.writerWithView(clazz);
        return writer.writeValueAsString(result);
    }


}
