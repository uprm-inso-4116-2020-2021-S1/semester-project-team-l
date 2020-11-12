package com.demo;

public class Message {
    private String from;
    private String message;

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String text) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "com.demo.Message{" +
                "from='" + from + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}

