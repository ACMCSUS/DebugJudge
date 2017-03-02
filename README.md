[DebugJudge](https://github.com/ACMCSUS/DebugJudge)
==========

A judging system for the ACM Debugging Competition

### To Run:

###### 1. Clone this project
```bash
$ git clone https://github.com/ACMCSUS/DebugJudge.git
```

###### 2. Install Maven
```bash
$ sudo apt-get install maven
```

###### 3. Run with Maven
```bash
$ mvn compile exec:java -Dexec.mainClass="acmcsus.debugjudge.DebugJudgeMain"
```

###### 4. Changed frontend?
```bash
$ npm run-script build
    OR
$ mvn compile
```

An HTTP server will be hosted on ```localhost:4567```.

### To Contribute:

###### 1. _**Read the code style section below**_
###### 2. Find a project card you wish to work on
###### 3. Turn the project card into an "issue" card.
###### 4. Assign yourself to the issue
###### 5. Do your work [on a new branch](https://www.digitalocean.com/community/tutorials/how-to-use-git-branches)
    - **Note**: Please name your branch with your username then a short name for the ticket.
    For example, if Matt is working on the ebean model issue, he may call his branch "matthewmerrill_ebeanmodels"
###### 6. **Test your work using JUnit!**
```bash
$ mvn test
```
Test a variety of good and bad inputs.
This will be exceedingly important in making sure our code will work during the competition.
Don't test in prod!
###### 7. On GitHub, create a pull request to merge your working branch into master.
###### 8. Unless it's urgent and you're 1,000% confident, don't merge your own branch!
Somebody else will give you a code review and perform the merge.

### Code style:

 - Java 8 ( ͡° ͜ʖ ͡°)
 - Spaces > Tabs. Use four spaces per level.
 - Java/Oracle naming conventions
 - To declare a route/filter:
    - Declare a static method with the correct signature in a Controller class (acmcsus.ctrl.SomeNameForController)
        - ```public static Object myRouteMethod(Request req, Response res)```
    - Add in DebugJudgeMain using a method reference
        - ```get("/myRoute", MyController::myRouteMethod);```
 - Lambdas and Streams are great, but they are a tool with a purpose.
