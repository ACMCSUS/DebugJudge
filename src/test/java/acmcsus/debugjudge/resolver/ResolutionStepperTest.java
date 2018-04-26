package acmcsus.debugjudge.resolver;

import acmcsus.debugjudge.proto.Competition.Resolution;
import acmcsus.debugjudge.proto.Competition.Scoreboard;
import acmcsus.debugjudge.proto.Competition.Submission;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_FAILURE;
import static acmcsus.debugjudge.proto.Competition.SubmissionJudgement.JUDGEMENT_SUCCESS;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class ResolutionStepperTest {

  @Test
  public void testSimple() {
    Scoreboard.Builder scoreboardBuilder = Scoreboard.newBuilder()
        .addRow(Scoreboard.ScoreboardRow.newBuilder()
            .setTeamId(1)
            .setPenalty(0));

    List<Submission> submissions = new ArrayList<>();
    submissions.add(Submission.newBuilder()
        .setTeamId(1)
        .setProblemId(1)
        .setSubmissionTimeSeconds(10 * 60)
        .setJudgement(JUDGEMENT_SUCCESS)
        .build());

    ResolutionStepper stepper = new ResolutionStepper(scoreboardBuilder.build(), submissions);
    assertTrue("stepper has first resolution", stepper.hasNext());

    Resolution resolution = stepper.next();
    assertEquals(resolution.getTeamId(), 1);
    assertEquals(resolution.getProblemId(), 1);
    assertEquals(resolution.getPenalty(), 10);
    assertTrue(resolution.getSolved());
  }

  @Test
  public void testPenalty() {
    Scoreboard.Builder scoreboardBuilder = Scoreboard.newBuilder()
        .addRow(Scoreboard.ScoreboardRow.newBuilder()
            .setTeamId(1)
            .setPenalty(0));

    List<Submission> submissions = new ArrayList<>();
    submissions.add(Submission.newBuilder()
        .setTeamId(1)
        .setProblemId(1)
        .setSubmissionTimeSeconds(10 * 60)
        .setJudgement(JUDGEMENT_FAILURE)
        .build());
    submissions.add(Submission.newBuilder()
        .setTeamId(1)
        .setProblemId(1)
        .setSubmissionTimeSeconds(11 * 60)
        .setJudgement(JUDGEMENT_FAILURE)
        .build());
    submissions.add(Submission.newBuilder()
        .setTeamId(1)
        .setProblemId(1)
        .setSubmissionTimeSeconds(12 * 60)
        .setJudgement(JUDGEMENT_SUCCESS)
        .build());

    ResolutionStepper stepper = new ResolutionStepper(scoreboardBuilder.build(), submissions);
    assertTrue("stepper has first resolution", stepper.hasNext());

    Resolution resolution = stepper.next();
    assertEquals(resolution.getTeamId(), 1);
    assertEquals(resolution.getProblemId(), 1);
    assertEquals(resolution.getPenalty(), 52);
    assertTrue(resolution.getSolved());
  }

}
