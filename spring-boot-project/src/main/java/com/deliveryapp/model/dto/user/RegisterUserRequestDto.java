package com.deliveryapp.model.dto.user;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
@Data
public class RegisterUserRequestDto {
    @NotBlank(message = "Email is mandatory!")
    @Email(message = "Invalid email format.")
    private String email;
    @NotBlank(message = "Name is mandatory!")
    private String fullName;
    @NotBlank(message = "Password is mandatory!")
    private String password;
    @NotBlank(message = "Password confirmation is mandatory!")
    private String confirmPassword;
    private boolean isAdmin;
}
