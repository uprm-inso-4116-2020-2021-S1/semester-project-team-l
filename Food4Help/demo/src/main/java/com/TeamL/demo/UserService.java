package com.TeamL.demo;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.util.Optional;
@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepositories;

    public UserService(UserRepository userRepositories) {
        this.userRepositories = userRepositories;
    }

    public void signUp(User user){
        BCryptPasswordEncoder passEncoder = new BCryptPasswordEncoder();
        final String encryptedPass = passEncoder.encode(user.getPassword());
        user.setPassword(encryptedPass);
        final User createdUser = userRepositories.save(user);
    }

//    void confirmUser(ConfirmationToken confirmationToken){
//        final User user = confirmationToken.getUser();
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
        }
        else {
            throw new UsernameNotFoundException(MessageFormat.format("User with email {0} cannot be found.", email));
        }
    }

}

