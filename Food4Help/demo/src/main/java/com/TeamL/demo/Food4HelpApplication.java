package com.TeamL.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@ComponentScan({"com.TeamL.demo"})
public class Food4HelpApplication implements CommandLineRunner
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

	@Override
	public void run(String... args) throws Exception {
	}
}
