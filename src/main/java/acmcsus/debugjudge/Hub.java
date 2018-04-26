package acmcsus.debugjudge;

import acmcsus.debugjudge.ctrl.SecurityApi;
import acmcsus.debugjudge.ctrl.api.ApiBaseController;
import acmcsus.debugjudge.proto.Competition.Profile;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.SubmissionStore;
import acmcsus.debugjudge.ws.AdminSocketService;
import acmcsus.debugjudge.ws.AutoJudgeSocketService;
import acmcsus.debugjudge.ws.BalloonRunnerSocketService;
import acmcsus.debugjudge.ws.BaseSocketService;
import acmcsus.debugjudge.ws.JudgeSocketService;
import acmcsus.debugjudge.ws.TeamSocketService;
import com.google.inject.Guice;
import com.google.inject.Inject;
import com.google.inject.Injector;
import spark.Request;
import spark.Response;
import spark.staticfiles.StaticFilesConfiguration;

import static acmcsus.debugjudge.ctrl.SecurityApi.getProfile;
import static java.lang.Integer.parseInt;
import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.init;
import static spark.Spark.path;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.webSocket;

public class Hub {

  public static void main(String[] args) {
    Injector injector = Guice.createInjector(new HubModule());

    injector.getInstance(AdminSocketService.class);
    injector.getInstance(AutoJudgeSocketService.class);
    injector.getInstance(BalloonRunnerSocketService.class);
    injector.getInstance(JudgeSocketService.class);
    injector.getInstance(TeamSocketService.class);

    StateService stateService = injector.getInstance(StateService.class);
    injector.getInstance(SubmissionStore.class)
        .streamAll()
        .forEach(stateService::submissionUpdated);

    Hub hub = injector.getInstance(Hub.class);
    hub.start();
  }

  private BaseSocketService socketService;
  private SecurityApi securityApi;

  @Inject
  public Hub(BaseSocketService socketService, SecurityApi securityApi) {
    this.socketService = socketService;
    this.securityApi = securityApi;
  }

  public void start() {
    int port = parseInt(System.getenv().getOrDefault("HUB_PORT", "4567"));
    port(port);
    webSocket("/ws/connect", socketService);
    get("/ws/nonce", socketService::nonceRoute);

    path("/api/", ApiBaseController::baseApiPath);

    get("/register", Hub::registerRoute);
    post("/register", securityApi::registerTeam);

    get("/login", Hub::loginRoute);
    post("/login", securityApi::login);
    get("/logout", securityApi::logout);

    StaticFilesConfiguration staticHandler = new StaticFilesConfiguration();
    staticHandler.configure("/angular");
    before((req, res) -> {
      Profile profile = getProfile(req);

      if (("/".equals(req.uri()) || "/index.html".equals(req.uri()))) {
        if (profile == null) {
          res.redirect("/login");
          return;
        }
        else if (profile.getProfileType() == Profile.ProfileType.REGISTRAR) {
          res.redirect("/register");
          return;
        }
      }
      staticHandler.consume(req.raw(), res.raw());
    });

    init();
  }

  private static Object loginRoute(Request req, Response res) {
    try {
      if (SecurityApi.isLoggedIn(req)) {
        res.redirect("/");
        return "";
      }
      return Hub.class.getResourceAsStream("/login.html");
    }
    catch (Exception e) {
      e.printStackTrace();
      throw e;
    }
  }

  private static Object registerRoute(Request req, Response res) {
    try {
      Profile profile = SecurityApi.getProfile(req);
      if (profile == null || profile.getProfileType() != Profile.ProfileType.REGISTRAR) {
        res.redirect("/");
        return "";
      }
      return Hub.class.getResourceAsStream("/register.html");
    }
    catch (Exception e) {
      e.printStackTrace();
      throw e;
    }
  }

}
