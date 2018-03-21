package acmcsus.debugjudge;

/**
 * Created by merrillm on 3/10/17.
 */
public class Views {

  public class PublicView {}

  public class LoggedInView extends PublicView {}

  public class TeamView extends LoggedInView {}

  public class JudgeView extends LoggedInView {}

}
