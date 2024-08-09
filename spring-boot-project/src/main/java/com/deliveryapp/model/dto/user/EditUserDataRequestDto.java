package com.deliveryapp.model.dto.user;

import lombok.Data;

import java.util.List;
@Data
public class EditUserDataRequestDto {
    private String email;
    private String firstname;
    private String lastname;
    private String mobileNumber;
    private boolean isAdmin;
    private List<AddressDto> addresses;
}
