package acmcsus.debugjudge.resolver;

import acmcsus.debugjudge.proto.Algorithmic.Resolution;
import acmcsus.debugjudge.proto.Competition.Scoreboard;
import acmcsus.debugjudge.proto.Competition.Submission;

import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

public class ResolutionStepper implements Iterator<Resolution> {

  private final Scoreboard scoreboard;
  private final List<Submission> subs;
  private Resolution next = null;

  public ResolutionStepper(Scoreboard scoreboard, List<Submission> subs) {
    this.scoreboard = scoreboard;
    this.subs = subs;
  }

  /**
   * Populate this.next with the next Resolution to apply, if it exists.
   */
  private void getNext() {

  }

  public Resolution next() {
    if (this.hasNext()) {
      return this.next;
    }
    throw new NoSuchElementException();
  }

  public boolean hasNext() {
    if (this.next == null) {
      this.getNext();
    }
    return this.next != null;
  }

}
