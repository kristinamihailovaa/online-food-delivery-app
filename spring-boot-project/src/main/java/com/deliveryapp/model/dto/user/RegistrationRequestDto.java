package com.deliveryapp.model.dto.user;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class RegistrationRequestDto {
    @NotBlank(message = "Email is mandatory!")
    @Email(message = "Invalid email format.")
    private String email;
    @NotBlank(message = "Firstname is mandatory!")
    private String firstName;
    @NotBlank(message = "Lastname is mandatory!")
    private String lastName;
    @NotBlank(message = "Password is mandatory!")
    private String password;
    @NotBlank(message = "Password confirmation is mandatory!")
    private String confirmPassword;
    @NotBlank(message = "Phone number is mandatory!")
    private String phoneNumber;
    private boolean isAdmin;
}
