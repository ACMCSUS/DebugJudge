package acmcsus.debugjudge;

import acmcsus.debugjudge.proto.*;
import com.google.protobuf.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.stream.*;

import static acmcsus.debugjudge.ctrl.MessageStores.PROBLEM_STORE;

public class ProblemValidator {

  public static void main(String[] args) throws IOException {
    Scanner scn = new Scanner(System.in);

    System.out.print("Path to problem directory to validate: ");
    Path path = Paths.get(scn.nextLine());

    Stream<Path> paths = Files.find(path, 1,
        (p, bfa) ->
            bfa.isRegularFile() && p.getFileName().toString().endsWith(".textproto"));

    List<Competition.Problem> problems = PROBLEM_STORE.readAll(paths);

    System.out.printf("Successfully read %d problems.\n", problems.size());

    {
      HashMap<Integer, String> ids = new HashMap<>();
      HashMap<Integer, String> orderIndices = new HashMap<>();
      for (Competition.Problem p : problems) {
        if (ids.containsKey(p.getId())) {
          System.err.printf("Problems with titles '%s' and '%s' have the same id!\n",
              ids.get(p.getId()), p.getTitle());
        }
        else {
          ids.put(p.getId(), p.getTitle());
        }
        if (orderIndices.containsKey(p.getOrderIndex())) {
          System.err.printf("Problems with titles '%s' and '%s' have the same order_index!\n",
              orderIndices.get(p.getOrderIndex()), p.getTitle());
        }
        else {
          orderIndices.put(p.getOrderIndex(), p.getTitle());
        }
      }
    }

    System.out.print("Should I print them? [yN]");

    if (scn.hasNextLine() && scn.nextLine().equalsIgnoreCase("y")) {
      for (Competition.Problem problem : problems) {
        System.out.println(TextFormat.printToString(problem));
      }
    }
  }
}
