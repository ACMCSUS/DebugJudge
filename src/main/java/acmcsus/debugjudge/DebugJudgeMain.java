package acmcsus.debugjudge;

import static acmcsus.debugjudge.ctrl.ApiController.routeAPI;
import static acmcsus.debugjudge.ctrl.SecurityApi.getProfile;
import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.init;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.webSocket;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.model.Profile;
import acmcsus.debugjudge.model.Profile.ProfileType;
import acmcsus.debugjudge.ws.SocketHandler;
import spark.Request;
import spark.Response;
import spark.staticfiles.StaticFilesConfiguration;

public class DebugJudgeMain {

  public static void main(String[] args) {
    port(4567);
    webSocket("/ws/connect", SocketHandler.getInstance());
    get("/ws/nonce", SocketHandler::nonceRoute);

    routeAPI();

    before("/registerTeam", SecurityApi::judgeFilter);
    get("/registerTeam", DebugJudgeMain::registerRoute);
    post("/registerTeam", SecurityApi::registerTeam);

    get("/login", DebugJudgeMain::loginRoute);
    post("/login", SecurityApi::login);
    get("/logout", SecurityApi::logout);

    get("/", (req, res) -> {
      Profile profile = getProfile(req);

      if (profile == null) {
        res.redirect("/login");
      }
      else if (profile.getType() == ProfileType.TEAM) {
        res.redirect("/team/");
      }
      else if (profile.getType() == ProfileType.JUDGE) {
        res.redirect("/judge/");
      }
      else {
        throw new RuntimeException();
      }
      return "";
    });
    angularRoutes("/team/", "/judge/");

    StaticFilesConfiguration staticHandler = new StaticFilesConfiguration();
    staticHandler.configure("/app");
    before((req, res) -> staticHandler.consume(req.raw(), res.raw()));

    init();
  }

  private static void angularRoutes(String... routes) {
    for (String routeString : routes) {
      before(routeString, DebugJudgeMain::htmlFilter);
      get(routeString, DebugJudgeMain::htmlRoute);
    }
  }

  private static void htmlFilter(Request req, Response res) {
    if (!SecurityApi.isLoggedIn(req)) { res.redirect("/login"); }
  }

  private static Object htmlRoute(Request req, Response res) {
    try {
      Profile profile = getProfile(req);

      switch (profile.getType()) {
        case TEAM:
          return DebugJudgeMain.class.getResourceAsStream("/app/team/index.html");
        case JUDGE:
          return DebugJudgeMain.class.getResourceAsStream("/app/judge/index.html");
        default:
          res.status(500);
          return new RuntimeException("Did not recognize ProfileType " + profile.getType());
      }
    } catch (Exception e) {
      e.printStackTrace();
      throw e;
    }
  }

  private static Object loginRoute(Request req, Response res) {
    try {
      if (SecurityApi.isLoggedIn(req)) {
        res.redirect("/");
        return "";
      }
      return DebugJudgeMain.class.getResourceAsStream("/login.html");
    } catch (Exception e) {
      e.printStackTrace();
      throw e;
    }
  }

  private static Object registerRoute(Request req, Response res) {
    try {
      if (SecurityApi.getJudge(req) == null) {
        res.redirect("/");
        return "";
      }
      return DebugJudgeMain.class.getResourceAsStream("/register.html");
    } catch (Exception e) {
      e.printStackTrace();
      throw e;
    }
  }

}
