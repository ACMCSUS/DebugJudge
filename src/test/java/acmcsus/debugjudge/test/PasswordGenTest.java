package acmcsus.debugjudge.test;

import acmcsus.debugjudge.PasswordGenerator;
import org.junit.Test;

/**
 * Created by merrillm on 4/4/17.
 */
public class PasswordGenTest {
    
    @Test
    public void test() {
        for (int i = 0; i < 20; i++) {
            System.out.println(PasswordGenerator.randomPassword());
        }
    }

}
