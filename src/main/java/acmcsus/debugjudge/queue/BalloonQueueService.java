package acmcsus.debugjudge.queue;

import acmcsus.debugjudge.proto.Competition;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.apache.commons.lang.NotImplementedException;
import org.eclipse.jetty.websocket.api.Session;

import java.io.IOException;

@Singleton
public class BalloonQueueService extends SocketSessionToSubmissionMapper {

  @Inject
  public BalloonQueueService() {
  }

  // TODO:
  @Override
  public void assigned(Session session, Competition.Submission submission) throws IOException {
    throw new NotImplementedException("Yikes! Still need to implement BalloonRunner api!");
  }

}
