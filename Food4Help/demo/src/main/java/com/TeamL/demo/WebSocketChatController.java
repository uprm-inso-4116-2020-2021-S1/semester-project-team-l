package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.websocket.server.ServerEndpoint;

@Controller
@ServerEndpoint("/ws")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class WebSocketChatController{

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    //handle incoming message and send them to the users
    //@MessageMapping("/chat/{to}") //maps the url from whcih u receive incoming message
    @MessageMapping("/chat")
    @SendTo("/queue/")
    public Message sendMessage(@Payload Message message){
        //send message from one user to another

        //System.out.println("handling send message " + message );
        //check is user exists in the user storage ~min 17:00
           // simpMessagingTemplate.convertAndSendToUser(
                   // message.getUsername().trim(), "/reply", message);
        return message;

    }
    /*

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")

    public Message addUser(@Payload Message message, SimpMessageHeaderAccessor headerAccessor) {
        // Add user in web socket session
        headerAccessor.getSessionAttributes().put("username", message.getSender());
        return message;
    }*/
}