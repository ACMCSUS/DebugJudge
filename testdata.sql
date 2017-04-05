insert into competitions (id, ref_id, name) values (1, 'test', 'Testing Competition');

insert into teams (id, team_name, member_names, competition_id) values (1, 'PaddysPub', 'Dennis, Mac, Charlie, Frank, Dee', 1);
insert into teams (id, team_name, member_names, competition_id) values (2, 'DelrayMisfits', 'Brad, Lenny, Jason', 1);

insert into problems (id, ref_id, title, description, code, answer, competition_id)
  values (1, '2017helloworld', 'Hello World!', 'Print "Hello World" to the screen.', '"Hello World"', 'println("Hello World");', 1);

insert into problems (id, ref_id, title, description, code, answer, competition_id)
  values (2, '2017iseven', 'Is Even', 'Return 1 if even, 0 if odd.', 'n % 2', '(n-1)%2', 1);

INSERT INTO problems (ref_id, title, description, precode, code, postcode, answer, competition_id)
VALUES ('shahdude', 'Shah Dude', 'shah, dude!', 'shah', 'adjective', 'dude', 'freaking', 1);