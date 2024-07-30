package com.deliveryapp.utils;

import com.deliveryapp.exception.BadRequestException;
import io.micrometer.common.util.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UserUtils {
    public static boolean isValidPass(String password) throws BadRequestException {
        if (StringUtils.isBlank(password)) {
            throw new BadRequestException("Password is mandatory!");
        }
        //At least one upper case, one lower case,one digit,one special character minimum eight characters , max 20
        String regex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$";
        return password.matches(regex) && !password.isBlank();
    }

    public static boolean isValidEmail(String email) throws BadRequestException {
        if (StringUtils.isBlank(email)) {
            throw new BadRequestException("Email is mandatory!");
        }
        String regex = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$";
        return email.matches(regex);
    }

    public static boolean isPasswordMatch(String password, String confirmedPassword) {
        return password.equals(confirmedPassword);
    }

    public static boolean isValidName(String fullName) {
        if (!StringUtils.isNotBlank(fullName)) {
            throw new IllegalArgumentException("Full name cannot be empty");
        }
        String regex = "^[a-zA-Z]+\\s[a-zA-Z]+$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(fullName);

        if (!matcher.matches()) {
            throw new IllegalArgumentException("Full name must contain only letters and a single space between first and last name");
        } else {
            return true;
        }

    }
}
