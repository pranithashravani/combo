package com.combo.org.service;

public class UserAlreadyExists  extends Exception {
    private String message;

    public UserAlreadyExists() {

    }

    public UserAlreadyExists(String message) {
        super(message);
        this.message = message;
    }
}

