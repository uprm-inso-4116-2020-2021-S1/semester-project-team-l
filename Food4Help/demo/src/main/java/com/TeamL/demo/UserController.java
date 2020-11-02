package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
public class UserController {
    @Autowired
    private final UserService userService;
    //private final ConfirmationTokenService confirmationTokenService;

    public UserController(UserService userService) {
        this.userService = userService;
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
//        Optional<ConfirmationToken> optionalConfirmationToken = confirmationTokenService.findConfirmationToken(token);
//
//        optionalConfirmationToken.ifPresent(userService::confirmUser);
//
//        return "sign-in";
//    }
}
