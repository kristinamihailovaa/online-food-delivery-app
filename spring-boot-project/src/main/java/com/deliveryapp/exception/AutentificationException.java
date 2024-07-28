package com.deliveryapp.exception;

public class AutentificationException extends Exception {

    public AutentificationException(String message) {
        super(message);
    }

    public AutentificationException(String message, Throwable cause) {
        super(message, cause);
    }
}
