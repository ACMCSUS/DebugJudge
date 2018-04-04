[DebugJudge](https://github.com/ACMCSUS/DebugJudge)
==========

A judging system for the ACM Debugging Competition

### To Contribute:

###### 0. Read [DEVELOPING.md](./DEVELOPING.md)

###### 1. _**Read the code style section below**_
###### 2. Find a project card/issue you wish to work on
###### 3. Turn the project card into an "issue" card/vice versa if not already done so.
###### 4. Assign yourself to the issue
###### 5. Do your work [on a new branch](https://www.digitalocean.com/community/tutorials/how-to-use-git-branches) **_parented to dev_**

  - **Note**: Please base your branch on dev.
  - **Note**: Please name your branch with your username then a short name for the ticket.
    For example, if Matt is working on the ebean model issue, he might call his branch "matthewmerrill_ebeanmodels"
    
###### 6. **Test your work using JUnit!**
```bash
$ ./gradlew test
```
Test a variety of good and bad inputs.
This will be exceedingly important in making sure our code will work during the competition.
Don't test in prod!

###### 7. On GitHub, create a pull request to merge your working branch into dev.

   - **Note**: If you didn't base your branch on dev this will be very difficult.

###### 8. Unless it's urgent and you're 1,000% confident, don't merge your own branch!
Somebody else will give you a code review and perform the merge.

### Code style:

 - Java 8 ( ͡° ͜ʖ ͡°)
 - Use the established websocket api thing I made for all new stuffs. REST is deprecated tbh
 - Spaces > Tabs. Use two spaces per level.
 - Java/Oracle naming conventions
 - To declare a route/filter:
    - First and foremost, think about whether this is the correct thing to do.
        - You probably should use the established practice of WS + proto.
    - Declare a static method with the correct signature in a Controller class (acmcsus.ctrl.SomeNameForController)
        - ```public static Object myRouteMethod(Request req, Response res)```
        - It's okay to have it return String instead.
    - Add in DebugJudgeMain using a method reference
        - ```get("/myRoute", MyController::myRouteMethod);```
 - Lambdas and Streams are great, but they are a tool with a purpose.
