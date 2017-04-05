package acmcsus.debugjudge.test;

import io.ebean.Ebean;
import io.ebean.EbeanServer;
import io.ebeaninternal.server.core.DefaultServer;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class ModelTest {
    
    @Test
    public void mockSetup() {
        EbeanServer defaultServer = Ebean.getServer(null);
        assertTrue("is a real EbeanServer", defaultServer instanceof DefaultServer);
    }
    
    @Test
    public void teamCreate() {
        assertEquals(1, 1);
    }
    
}
