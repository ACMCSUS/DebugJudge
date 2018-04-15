package acmcsus.debugjudge;

import java.io.File;
import java.io.IOException;
import java.math.*;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Map;
import java.util.Scanner;

/**
 * Created by merrillm on 4/4/17.
 */
public class PasswordGenerator {

  private PasswordGenerator() { /* Static */ }

  private static SecureRandom random = new SecureRandom();

  private static String[] adjectives = new String[]{
    "ace", "amazing", "amber", "artificial", "awesome", "awful",
    "basic", "bendy", "bent", "blue", "burnt", "bright",
    "clear", "clueless", "computerized", "copper",
    "daring", "deadly", "delightful", "dynamic",
    "magical", "majestic", "mechanical",
    "odd", "official", "one",
    "partial", "pink", "powerful", "purple",
    "useful", "useless",
    "vacant", "vain", "violet",
    "wacky", "wavy", "white",
  };

  private static String[] nouns = new String[]{
    "Aardvark", "Academy", "Animal", "Arcade", "Assembler",
    "Barber", "Barbell", "Bell", "Bicycle", "Bingo", "Blockade",
    "Candle", "Chip", "Circle", "Coach", "Competition", "Compiler",
    "Dart", "Delight", "Dingo", "Doorbell", "Dragon", "Drum", "Dynasty",
    "Eagle", "Ear", "Echo", "Eel", "Eggshell", "Elbow",
    "Fable", "Fabric", "Fig", "Fox",
    "Genie", "Goose", "Gorilla",
    "Headache", "Honey", "Hotel",
    "Icebox", "Idea", "Intelligence", "Ivy",
    "Java", "Jewel", "Jukebox",
    "Ladybug", "Language", "Leader",
    "Machine", "Marathon", "Mouse",
    "Shell", "Software",
  };

  static {
    Map<String, String> env = System.getenv();

    if (env.containsKey("PASSWORD_ADJECTIVES")) {
      try {
        adjectives = read(env.get("PASSWORD_ADJECTIVES"));
      } catch (Exception e) {
        System.err
          .println("Could not read password adjectives at " + env.get("PASSWORD_ADJECTIVES"));
      }
    }

    if (env.containsKey("PASSWORD_NOUNS")) {
      try {
        adjectives = read(env.get("PASSWORD_NOUNS"));
      } catch (Exception e) {
        System.err.println("Could not read password nouns at " + env.get("PASSWORD_NOUNS"));
      }
    }
  }

  private static String[] read(String path) throws IOException {
    Scanner scn = new Scanner(new File(path));
    ArrayList<String> tokens = new ArrayList<>();

    while (scn.hasNext()) { tokens.add(scn.next()); }

    return (String[]) tokens.toArray();
  }

  public static String randomPassword() {
//    byte[] tailBytes = new byte[2];
//    random.nextBytes(tailBytes);
    // -1 signum means we get a dash in the password before the hex bit.
//    String tailHex = new BigInteger(-1, tailBytes).toString(26);

    return adjectives[random.nextInt(adjectives.length)] +
      nouns[random.nextInt(nouns.length)];// + tailHex;
  }

}
