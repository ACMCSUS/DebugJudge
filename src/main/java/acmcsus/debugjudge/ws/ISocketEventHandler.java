package acmcsus.debugjudge.ws;

import acmcsus.debugjudge.model.Profile;

@FunctionalInterface
public interface ISocketEventHandler {
    
    void handle(IncomingWebSocketMessage message);
    
    default boolean allowUse(Profile.ProfileType profileType) {
        return true;
    }
    
}
