package com.deliveryapp.model.dto.user;

import lombok.Data;

@Data
public class RegistrationResponseUserDto {
    private Long id;
    private String email;
    private String firstname;
    private String lastname;
    private boolean isAdmin;

    public RegistrationResponseUserDto(Long id, String email, String firstname, String lastname, boolean isAdmin) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isAdmin = isAdmin;
    }
}
