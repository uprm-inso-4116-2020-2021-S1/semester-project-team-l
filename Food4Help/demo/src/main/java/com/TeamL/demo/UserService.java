package com.TeamL.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.text.MessageFormat;
import java.util.Collection;
import java.util.Optional;
@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepositories;

    public UserService(UserRepository userRepositories) {
        this.userRepositories = userRepositories;
    }

    public void signUp(User user) {
        BCryptPasswordEncoder passEncoder = new BCryptPasswordEncoder();
        final String encryptedPass = passEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        final User createdUser = userRepositories.save(user);
    }

    public ResponseEntity<?> getUser(@PathVariable String id) {
        Optional<User> user = userRepositories.findById(id);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public Collection<User> findAll() {
        return userRepositories.findAll();
    }


//    void confirmUser(teaml.ConfirmationToken confirmationToken){
//        final teaml.User user = confirmationToken.getUser();
//        user.setEnabled(true);
//        userRepositories.save(user);
//        confirmationTokenService.deleteConfirmationToken(confirmationToken.getId());
//
//    }

//    void sendConfirmationMail(String userMail, String token) {
//
//        final SimpleMailMessage mailMessage = new SimpleMailMessage();
//        mailMessage.setTo(userMail);
//        mailMessage.setSubject("Mail Confirmation Link!");
//        mailMessage.setFrom("<MAIL>");
//        mailMessage.setText(
//                "Thank you for registering. Please click on the below link to activate your account." + "http://localhost:8080/sign-up/confirm?token="
//                        + token);
//
//        emailService.sendEmail(mailMessage);
//    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final Optional<User> optionalUser = userRepositories.findByEmail(email);

        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            throw new UsernameNotFoundException(MessageFormat.format("teaml.User with entityEmail {0} cannot be found.", email));
        }
    }
}

