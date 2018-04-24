package acmcsus.debugjudge.ctrl;

import acmcsus.debugjudge.proto.Competition;
import acmcsus.debugjudge.proto.Competition.Problem;
import acmcsus.debugjudge.proto.Competition.Profile;
import acmcsus.debugjudge.proto.Competition.Scoreboard;
import acmcsus.debugjudge.proto.Competition.Submission;
import acmcsus.debugjudge.proto.Competition.SubmissionJudgement;
import acmcsus.debugjudge.state.StateService;
import acmcsus.debugjudge.store.ProfileStore;
import acmcsus.debugjudge.store.SubmissionStore;
import acmcsus.debugjudge.ws.BaseSocketService;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.reactivex.Observable;
import io.reactivex.subjects.BehaviorSubject;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static io.reactivex.Observable.combineLatest;
import static io.reactivex.Observable.interval;
import static io.reactivex.Observable.wrap;
import static java.util.Collections.emptyList;
import static java.util.Collections.reverseOrder;
import static java.util.Comparator.comparing;
import static java.util.concurrent.TimeUnit.SECONDS;
import static java.util.stream.Collectors.toList;

// I'm sorry for the horrible code within. If I have nothing better to do I might clean. ~merrillm
@Singleton
public class ScoreboardBroadcaster {

  private static class TeamBarebones {

    public String name;
    public Integer id;
    public Score score;
    public int place;
    public List<Long> solveTimes;

    TeamBarebones(Competition.Profile prof, Score score, List<Long> solveTimes) {
      this.name = prof.getName();
      this.id = prof.getId();
      this.score = score;
      this.solveTimes = solveTimes;
    }
  }

  private static List<Problem> problems = null;

  private final BehaviorSubject<Scoreboard> scoreboardSubject;
  public final Observable<Scoreboard> scoreboard;

  private ProfileStore profileStore;
  private SubmissionStore submissionStore;

  @Inject
  ScoreboardBroadcaster(StateService stateService, ProfileStore profileStore,
                        SubmissionStore submissionStore,
                        CompetitionController competitionController) {
    this.profileStore = profileStore;
    this.submissionStore = submissionStore;

    this.scoreboardSubject = BehaviorSubject.create();
    this.scoreboard = wrap(scoreboardSubject);

    stateService.publicProblemList.subscribe(
        (problems) -> ScoreboardBroadcaster.problems = problems);
    combineLatest(interval(30, SECONDS), competitionController.competitionState, (a, b) -> b)
        .filter((state) -> state != Competition.CompetitionState.WAITING)
        .subscribe((l) -> pushScoreboard());
  }

  private static class Score {
    public int correct = 0;
    public int penalty = 0;
  }

  // Jinkees this is like 125 lines........ sorry. ~merrillm
  public void pushScoreboard() {
    try {
      Collection<Competition.Profile> teams = profileStore.streamAll()
          .filter(p -> p.getProfileType() == Profile.ProfileType.TEAM)
          .collect(toList());

      Map<Integer, Score> teamScores = new HashMap<>();
      Map<Integer, List<Long>> teamSolveTimeSeconds = new HashMap<>();

      Map<Integer, Map<Integer, List<Submission>>> teamProblemSubmissions = new HashMap<>();
      Map<Integer, Map<Integer, Integer>> teamProblemSubmissionCount = new HashMap<>();
      Map<Integer, Map<Integer, Boolean>> teamProblemAcceptance = new HashMap<>();

      // Initialize maps
      {
        Map<Integer, Integer> defProbSubmissionCount = new HashMap<>();
        Map<Integer, Boolean> defProbAcceptance = new HashMap<>();

        for (Problem prob : problems) {
          defProbSubmissionCount.put(prob.getId(), 0);
          defProbAcceptance.put(prob.getId(), false);
        }
        for (Profile team : teams) {
          teamProblemSubmissions.put(team.getId(), new HashMap<>());
          teamProblemSubmissionCount.put(team.getId(), new HashMap<>(defProbSubmissionCount));
          teamProblemAcceptance.put(team.getId(), new HashMap<>(defProbAcceptance));
          teamScores.put(team.getId(), new Score());
          teamSolveTimeSeconds.put(team.getId(), Collections.emptyList());
        }
      }

      for (Submission submission : submissionStore.readAll()) {
        if (submission.getTeamId() == 0 ||
            !teamProblemSubmissions.containsKey(submission.getTeamId())) {
          continue;
        }

        Map<Integer, List<Submission>> problemSubmissions =
            teamProblemSubmissions.get(submission.getTeamId());

        if (problemSubmissions != null) {
          List<Submission> submissions = problemSubmissions
              .computeIfAbsent(submission.getProblemId(), k -> new ArrayList<>());

          submissions.add(submission);
        }
      }

      for (Profile team : teams) {
        Score score = new Score();
        List<Long> solveTimeSeconds = new ArrayList<>();

        for (Problem problem : problems) {
          long potentialPenalty = 0;
          List<Submission> teamSubmissions =
              teamProblemSubmissions.get(team.getId()).getOrDefault(problem.getId(), emptyList());

          teamSubmissions.sort(comparing(Submission::getSubmissionTimeSeconds));

          Iterator<Submission> itr = teamSubmissions.iterator();

          while (itr.hasNext()) {
            Submission sub = itr.next();
            potentialPenalty += 5 + sub.getSubmissionTimeSeconds()/60;

            if (sub.getJudgement() == SubmissionJudgement.JUDGEMENT_SUCCESS) {
              score.correct += 1;
              score.penalty += potentialPenalty - 5;
              solveTimeSeconds.add(sub.getSubmissionTimeSeconds());
              teamProblemAcceptance.get(team.getId()).put(problem.getId(), true);

              while (itr.hasNext()) {
                itr.next();
                itr.remove();
              }
              break;
            }
          }
          teamProblemSubmissionCount.get(team.getId()).put(problem.getId(), teamSubmissions.size());
        }
        solveTimeSeconds.sort(reverseOrder());

        teamScores.put(team.getId(), score);
        teamSolveTimeSeconds.put(team.getId(), solveTimeSeconds);
      }

      List<TeamBarebones> teamBarebones = teams.stream()
          .map(team -> new TeamBarebones(team,
              teamScores.get(team.getId()),
              teamSolveTimeSeconds.get(team.getId())))
          .sorted(ScoreboardBroadcaster::compareTeams)
          .collect(Collectors.toList());

      int place = 1;
      if (!teamBarebones.isEmpty()) {
        teamBarebones.get(0).place = 1;
        for (int i = 1; i < teamBarebones.size(); i += 1) {
          TeamBarebones prev = teamBarebones.get(i - 1);
          TeamBarebones cur = teamBarebones.get(i);

          if (compareTeams(cur, prev) != 0) {
            place = i + 1;
          }

          cur.place = place;
        }
      }

      Competition.Scoreboard.Builder scoreboardBuilder = Competition.Scoreboard.newBuilder();
      for (TeamBarebones team : teamBarebones) {
        scoreboardBuilder.addRow(Scoreboard.ScoreboardRow.newBuilder()
            .setProfileName(team.name)
            .setPlace(team.place)
            .setScore(team.score.correct)
            .setPenalty(team.score.penalty)
            .putAllProblemCompletions(teamProblemAcceptance.getOrDefault(team.id, new HashMap<>()))
            .putAllProblemAttempts(teamProblemSubmissionCount.get(team.id))
        );
      }
      scoreboardBuilder.setUpdateTimeMillis(Instant.now().toEpochMilli());

      scoreboardSubject.onNext(scoreboardBuilder.build());
    }
    catch (Exception e) {
      e.printStackTrace();
    }
  }

  private static int compareTeams(TeamBarebones a, TeamBarebones b) {
    if (a.score.correct != b.score.correct) {
      return -Integer.compare(a.score.correct, b.score.correct);
    }
    if (a.score.penalty != b.score.penalty) {
      return Integer.compare(a.score.penalty, b.score.penalty);
    }
    else {
      for (int i = 0; i < a.solveTimes.size(); i++) {
        long aSolveTime = a.solveTimes.get(i);
        long bSolveTime = b.solveTimes.get(i);
        if (aSolveTime != bSolveTime) {
          return Long.compare(aSolveTime, bSolveTime);
        }
      }
    }
    return 0;
  }

}
