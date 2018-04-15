package acmcsus.debugjudge;

/**
 * Created by merrillm on 3/10/17.
 */
@Deprecated
public class Views {

  @Deprecated
  public class PublicView {}

  @Deprecated
  public class LoggedInView extends PublicView {}

  @Deprecated
  public class TeamView extends LoggedInView {}

  @Deprecated
  public class JudgeView extends LoggedInView {}

}
