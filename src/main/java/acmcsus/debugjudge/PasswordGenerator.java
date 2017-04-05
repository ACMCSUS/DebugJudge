package acmcsus.debugjudge;

import java.security.SecureRandom;

/**
 * Created by merrillm on 4/4/17.
 */
public class PasswordGenerator {
    private PasswordGenerator(){ /* Static */ }
    
    private static SecureRandom random = new SecureRandom();
    
    private static String[] adjectives = new String[]{
            "ace", "amazing", "amber", "artificial", "awful",
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
    
    private static String[] nouns = new String[] {
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
    
    public static String randomPassword() {
        return adjectives[random.nextInt(adjectives.length)] +
                nouns[random.nextInt(nouns.length)];
    }
    
}
