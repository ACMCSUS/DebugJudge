alter table judges drop constraint if exists fk_judges_competition_id;
drop index if exists ix_judges_competition_id;

alter table problems drop constraint if exists fk_problems_competition_id;
drop index if exists ix_problems_competition_id;

alter table submissions drop constraint if exists fk_submissions_team_id;
drop index if exists ix_submissions_team_id;

alter table submissions drop constraint if exists fk_submissions_problem_id;
drop index if exists ix_submissions_problem_id;

alter table submissions drop constraint if exists fk_submissions_judge_id;
drop index if exists ix_submissions_judge_id;

alter table teams drop constraint if exists fk_teams_competition_id;
drop index if exists ix_teams_competition_id;

drop table if exists competitions;

drop table if exists judges;

drop table if exists problems;

drop table if exists submissions;

drop table if exists teams;

