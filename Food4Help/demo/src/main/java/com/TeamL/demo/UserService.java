package com.TeamL.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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
//        Optional<User> userEmail = userRepositories.findByEmail(user.getEmail());
        final User createdUser = userRepositories.save(user);
    }

    public boolean passEncoder(String password, String encryptedPass){
            BCryptPasswordEncoder passEncoder = new BCryptPasswordEncoder();
            boolean decryptedPass = passEncoder.matches(password, encryptedPass);
            return decryptedPass;
    }

    public ResponseEntity<?> getUser(@PathVariable String id) {
        Optional<User> user = userRepositories.findById(id);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public Collection<User> findAll() {
        return userRepositories.findAll();
    }

    public User loadUserByUsername(String email) throws UsernameNotFoundException {
        final Optional<User> optionalUser = userRepositories.findByEmail(email);

        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            return null;
        }
    }
}

