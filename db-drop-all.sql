alter table judges drop foreign key fk_judges_competition_id;
drop index ix_judges_competition_id on judges;

alter table problems drop foreign key fk_problems_competition_id;
drop index ix_problems_competition_id on problems;

alter table submissions drop foreign key fk_submissions_team_id;
drop index ix_submissions_team_id on submissions;

alter table submissions drop foreign key fk_submissions_problem_id;
drop index ix_submissions_problem_id on submissions;

alter table submissions drop foreign key fk_submissions_judge_id;
drop index ix_submissions_judge_id on submissions;

alter table teams drop foreign key fk_teams_competition_id;
drop index ix_teams_competition_id on teams;

drop table if exists competitions;

drop table if exists judges;

drop table if exists problems;

drop table if exists submissions;

drop table if exists teams;

