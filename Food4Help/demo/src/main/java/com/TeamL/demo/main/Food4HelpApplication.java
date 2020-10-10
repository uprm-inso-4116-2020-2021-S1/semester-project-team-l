package com.TeamL.demo.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@RestController
public class Food4HelpApplication
{
//	private static final Log log = LogFactory.getLog(Food4HelpApplication.class);

	public static void main(String[] args)
	{
		SpringApplication.run(Food4HelpApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "Team L") String name)
	{
		return String.format("Hello %s!", name);
	}
}
