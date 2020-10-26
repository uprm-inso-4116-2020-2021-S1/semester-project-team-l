package com.TeamL.demo;

import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {

    @GetMapping("/sign-in")
    String signIn() {
        return "login";
    }
}
