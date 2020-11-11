import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketChatController{


    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    //handle incoming message and send them to the users
    @MessageMapping("/chat/{to}") //maps the url from whcih u receive incoming message
    public void sedMessage(@DestinationVariable String to, Message message){
        //send message from one user to another

        System.out.println("handling send message " + message +" to: "+ to);
        //check is user exists in the user storage ~min 17:00
        simpMessagingTemplate.convertAndSend("/topic/messages/"+to, message);
    }

}