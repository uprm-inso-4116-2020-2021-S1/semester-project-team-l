package com.TeamL.demo;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController
{

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    //The @GetMapping annotation ensures that HTTP GET requests to /greeting are mapped to the greeting() method.
    @GetMapping("/greeting")
    //@RequestParam binds the value of the query string parameter 'name' into the name parameter of the greeting() method.
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name)
    {
        //The implementation of the method body creates and returns a new Greeting object with id and content attributes
        //based on the next value from the counter and formats the given name by using the greeting template.
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
}
