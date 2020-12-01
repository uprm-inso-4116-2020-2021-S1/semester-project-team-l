package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.websocket.server.ServerEndpoint;

@Controller
@ServerEndpoint("/ws")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class WebSocketChatController{

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    private final SimpUserRegistry simpUserRegistry;


    public WebSocketChatController(SimpUserRegistry simpUserRegistry) {
        this.simpUserRegistry = simpUserRegistry;

    }

    @MessageMapping("chat/")
    @SendTo("/queue/")
    public Message sendMessage(@Payload Message message){

       SimpMessageHeaderAccessor headerAccessor = SimpMessageHeaderAccessor.create(SimpMessageType.MESSAGE);
        headerAccessor.setSessionId(message.getReceiver());
        headerAccessor.setLeaveMutable(true);
        simpMessagingTemplate.convertAndSendToUser(message.getUsername(),"/queue/",
                message.getText(),headerAccessor.getMessageHeaders());


        return message;

    }
    

}