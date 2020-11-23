package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@CrossOrigin(origins = "http//localhost:3000")
public class UserController {
    @Autowired
    private final UserService userService;
    private String currentUser;
    private boolean loggedIn = false;

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

    @PostMapping(value = "/sign-up")
    public String signUpUser(@RequestBody User user) {
        if(userService.loadUserByUsername(user.getEmail()) == null){
            userService.signUp(user);
            return "User registered";
        }
        else{
           return "User email is already in use";
        }
    }

    @GetMapping("/getUser")
    public String getCurrentUser(){
        if(loggedIn)
            return currentUser;
        else{
            return "Logged off";
        }
    }
    @GetMapping("/getStatus")
    public boolean getStatus(){
        return loggedIn;
    }

    @PutMapping("/updateStatus")
    public boolean updateStatus(@RequestParam boolean status){
        return loggedIn = status;
    }

    @GetMapping("/sign-in")
    public boolean signIn(@RequestParam String email, @RequestParam String password){
        User user = userService.loadUserByUsername(email);
        if (user == null)
        {
            return (loggedIn = false);
        }
        else if(user.getUsername().equals(email) && userService.passEncoder(password, user.getPassword())){
            currentUser = user.getId();
            return (loggedIn = true);
        }
        else{
            return (loggedIn = false);
        }
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