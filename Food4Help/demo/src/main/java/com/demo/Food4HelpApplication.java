package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@ComponentScan("com.demo.SecurityConfig")
public class Food4HelpApplication
{
//	private static final Log log = LogFactory.getLog(com.demo.Food4HelpApplication.class);
	public static void main(String[] args)
	{
		SpringApplication.run(Food4HelpApplication.class, args);
	}

}
