package com.TeamL.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.util.UUID;
@Component
public class ConfirmationToken {
    @Transient
    public static final String SEQUENCE_NAME = "CT_sequence";

    @Id
    private Long id;

    private String confirmationToken;

    private LocalDate localDate;

    private User user;



    public ConfirmationToken(User user) {
        this.user = user;
        this.localDate = LocalDate.now();
        this.confirmationToken = UUID.randomUUID().toString();
    }
    public ConfirmationToken(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
