package com.TeamL.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

@EnableWebSecurity
@Configuration
@EnableMongoRepositories("com.TeamL.demo")
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserService userService;

    public SecurityConfig(UserService userService) {
        this.userService = userService;
    }
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
            return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/users","/sign-up", "/sign-in", "/", "/js/**")
                    .permitAll()
                .antMatchers("/**")
                    .hasAnyRole("ADMIN", "USER")
                .and()
                    .formLogin()
                    .loginPage("/sign-in")
                    .defaultSuccessUrl("/")
                    .permitAll()
                .and()
                    .logout()
                    .invalidateHttpSession(true)
                    .permitAll()
                .and()
                    .csrf()
                    .disable();
    }
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService)
                .passwordEncoder(bCryptPasswordEncoder());
    }


}
