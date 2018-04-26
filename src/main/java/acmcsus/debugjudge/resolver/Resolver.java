package acmcsus.debugjudge.resolver;

import acmcsus.debugjudge.proto.Competition.FreezeState;
import acmcsus.debugjudge.proto.Competition.Resolution;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.io.IOException;

import static acmcsus.debugjudge.proto.Competition.Profile.ProfileType.RESOLVER_VIEWER;
import static com.google.common.collect.Lists.newArrayList;
import static spark.Spark.get;
import static spark.Spark.init;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;

public class Resolver {

  public static void main(String[] args) throws IOException {
//    if (args.length != 1) {
//      System.err.println("provide one argument: path to freezestate.pb");
//      System.exit(1);
//      return;
//    }
//
//    FreezeState freezeState = FreezeState.parseFrom(openInputStream(new File(args[0])));
    FreezeState freezeState = FreezeState.newBuilder().build();

    ResolutionStepper stepper = new ResolutionStepper(
        freezeState.getScoreboard(), freezeState.getSubmissionList());

    Resolution.List resolutions = Resolution.List.newBuilder()
        .addAllResolution(newArrayList(stepper)).build();

    port(4567);
    staticFileLocation("/angular");
    get("/api/profile", (req, res) -> {
      ObjectNode jsonNode = JsonNodeFactory.instance.objectNode();
      jsonNode.put("id", "1");
      jsonNode.put("name", "ResolverViewer");
      jsonNode.put("profileType", RESOLVER_VIEWER.getNumber());

      ObjectMapper mapper = new ObjectMapper();
      return mapper.writeValueAsString(jsonNode);
    });

    init();
  }

}
