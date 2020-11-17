package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WebSocketChatController{

    //private final UserService userService;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @MessageMapping("/publish")
    @SendTo("/topic" + "/public")
    public Message broadcastMessage(@Payload Message chatMessage) {
        return chatMessage;
    }

    //handle incoming message and send them to the users
    //@MessageMapping("/chat/{to}") //maps the url from whcih u receive incoming message
    //@MessageMapping("/chat.sendMessage")
    //@SendTo("/topic/public")
   /* public Message sendMessage(@Payload Message message){
        //send message from one user to another

        System.out.println("handling send message " + message );
        //check is user exists in the user storage ~min 17:00
            //simpMessagingTemplate.convertAndSendToUser(
                   // message.getReceiver().trim(), "/reply", message);
        return message;

    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")

    public Message addUser(@Payload Message message, SimpMessageHeaderAccessor headerAccessor) {
        // Add user in web socket session
        headerAccessor.getSessionAttributes().put("username", message.getSender());
        return message;
    }*/
}