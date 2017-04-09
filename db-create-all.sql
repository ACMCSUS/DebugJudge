create table competitions (
  id                            bigint auto_increment not null,
  ref_id                        varchar(255) not null,
  name                          varchar(255) not null,
  date                          datetime,
  constraint uq_competitions_ref_id unique (ref_id),
  constraint pk_competitions primary key (id)
);

create table judges (
  id                            bigint auto_increment not null,
  name                          varchar(255),
  login_secret                  varchar(255) not null,
  competition_id                bigint not null,
  constraint pk_judges primary key (id)
);

create table problems (
  id                            bigint auto_increment not null,
  ref_id                        varchar(255) not null,
  order_index                   bigint not null,
  title                         varchar(50) not null,
  description                   longblob not null,
  language                      longblob not null,
  precode                       longblob,
  code                          longblob not null,
  postcode                      longblob,
  answer                        longblob not null,
  competition_id                bigint not null,
  constraint uq_problems_ref_id_competition_id unique (ref_id,competition_id),
  constraint uq_problems_order_index_competition_id unique (order_index,competition_id),
  constraint pk_problems primary key (id)
);

create table submissions (
  id                            bigint auto_increment not null,
  team_id                       bigint not null,
  problem_id                    bigint not null,
  code                          varchar(20000) not null,
  submitted_at                  datetime not null,
  judged_at                     datetime,
  judge_id                      bigint,
  accepted                      tinyint(1) default 0,
  constraint uq_submissions_team_id_problem_id_submitted_at unique (team_id,problem_id,submitted_at),
  constraint pk_submissions primary key (id)
);

create table teams (
  id                            bigint auto_increment not null,
  team_name                     varchar(255) not null,
  member_names                  varchar(255) not null,
  login_secret                  varchar(255) not null,
  competition_id                bigint not null,
  constraint uq_teams_team_name_competition_id unique (team_name,competition_id),
  constraint pk_teams primary key (id)
);

alter table judges add constraint fk_judges_competition_id foreign key (competition_id) references competitions (id) on delete restrict on update restrict;
create index ix_judges_competition_id on judges (competition_id);

alter table problems add constraint fk_problems_competition_id foreign key (competition_id) references competitions (id) on delete restrict on update restrict;
create index ix_problems_competition_id on problems (competition_id);

alter table submissions add constraint fk_submissions_team_id foreign key (team_id) references teams (id) on delete restrict on update restrict;
create index ix_submissions_team_id on submissions (team_id);

alter table submissions add constraint fk_submissions_problem_id foreign key (problem_id) references problems (id) on delete restrict on update restrict;
create index ix_submissions_problem_id on submissions (problem_id);

alter table submissions add constraint fk_submissions_judge_id foreign key (judge_id) references judges (id) on delete restrict on update restrict;
create index ix_submissions_judge_id on submissions (judge_id);

alter table teams add constraint fk_teams_competition_id foreign key (competition_id) references competitions (id) on delete restrict on update restrict;
create index ix_teams_competition_id on teams (competition_id);

