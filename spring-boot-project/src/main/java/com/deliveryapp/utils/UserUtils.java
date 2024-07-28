package com.deliveryapp.utils;

import com.deliveryapp.exception.BadRequestException;
import io.micrometer.common.util.StringUtils;

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
}
