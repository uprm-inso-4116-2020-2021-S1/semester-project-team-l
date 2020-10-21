package com.TeamL.demo.login;

import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {

    @GetMapping("/sign-in")
    String signIn() {
        return "login";
    }
}
