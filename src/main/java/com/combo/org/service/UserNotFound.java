package com.combo.org.service;

public class UserNotFound extends Exception {
    private String message;
    public UserNotFound()
    {

    }
    public UserNotFound(String message)
    {
        super(message);
        this.message=message;
    }
}
