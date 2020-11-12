package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
public class UserController {
    @Autowired
    private final UserService userService;
    //private final teaml.ConfirmationTokenService confirmationTokenService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> userID(@PathVariable String id){
        return userService.getUser(id);
    }

    @GetMapping("/users")
    public Collection<User> getUsers(){
        return userService.findAll();
    }

    @RequestMapping(path= "/register")
    @ResponseStatus(code = HttpStatus.CREATED)
    public User signUpUser(@RequestBody User user) {

        userService.signUp(user);

        return user;
    }

    @GetMapping("/sign-in")
    public String signIn() {

        return "sign-in";
    }

    @GetMapping("/sign-up")
    public String signUpUser() {

        return "sign-up";
    }
//      Method to be implemented
//    @GetMapping("/sign-up/confirm")
//    String confirmMail(@RequestParam("token") String token) {
//
//        Optional<teaml.ConfirmationToken> optionalConfirmationToken = confirmationTokenService.findConfirmationToken(token);
//
//        optionalConfirmationToken.ifPresent(userService::confirmUser);
//
//        return "sign-in";
//    }
}