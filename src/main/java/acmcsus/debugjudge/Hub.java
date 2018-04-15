package acmcsus.debugjudge;

import acmcsus.debugjudge.ctrl.*;
import acmcsus.debugjudge.ctrl.api.*;
import acmcsus.debugjudge.model.*;
import acmcsus.debugjudge.proto.*;
import acmcsus.debugjudge.proto.Competition.*;
import acmcsus.debugjudge.ws.*;
import com.google.inject.*;
import spark.*;
import spark.staticfiles.*;

import static acmcsus.debugjudge.ctrl.SecurityApi.getProfile;
import static spark.Spark.*;

public class Hub {

  public static void main(String[] args) {
    Injector injector = Guice.createInjector(new HubModule());

    injector.getInstance(AdminSocketService.class);
    injector.getInstance(AutoJudgeSocketService.class);
    injector.getInstance(BalloonRunnerSocketService.class);
    injector.getInstance(JudgeSocketService.class);
    injector.getInstance(TeamSocketService.class);

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
    port(4567);
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

    StateService.instance.loadExisting();
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
