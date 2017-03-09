create table competitions (
  id                            bigint auto_increment not null,
  ref_id                        varchar(255) not null,
  name                          varchar(255) not null,
  date                          datetime,
  constraint uq_competitions_ref_id unique (ref_id),
  constraint pk_competitions primary key (id)
);

create table problems (
  id                            bigint auto_increment not null,
  ref_id                        varchar(255) not null,
  problem_name                  varchar(255) not null,
  competition_id                bigint not null,
  constraint uq_problems_problem_name_competition_id unique (problem_name,competition_id),
  constraint pk_problems primary key (id)
);

create table submissions (
  id                            bigint auto_increment not null,
  team_id                       bigint not null,
  problem_id                    bigint not null,
  submitted_at                  datetime not null,
  approved                      tinyint(1) default 0,
  constraint uq_submissions_team_id_problem_id_submitted_at unique (team_id,problem_id,submitted_at),
  constraint pk_submissions primary key (id)
);

create table teams (
  id                            bigint auto_increment not null,
  team_name                     varchar(255) not null,
  competition_id                bigint not null,
  constraint uq_teams_team_name_competition_id unique (team_name,competition_id),
  constraint pk_teams primary key (id)
);

alter table problems add constraint fk_problems_competition_id foreign key (competition_id) references competitions (id) on delete restrict on update restrict;
create index ix_problems_competition_id on problems (competition_id);

alter table submissions add constraint fk_submissions_team_id foreign key (team_id) references teams (id) on delete restrict on update restrict;
create index ix_submissions_team_id on submissions (team_id);

alter table submissions add constraint fk_submissions_problem_id foreign key (problem_id) references problems (id) on delete restrict on update restrict;
create index ix_submissions_problem_id on submissions (problem_id);

alter table teams add constraint fk_teams_competition_id foreign key (competition_id) references competitions (id) on delete restrict on update restrict;
create index ix_teams_competition_id on teams (competition_id);

