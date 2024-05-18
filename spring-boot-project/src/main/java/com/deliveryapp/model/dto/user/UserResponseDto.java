package com.deliveryapp.model.dto.user;

import com.deliveryapp.entity.Address;

import java.util.List;

public class UserResponseDto {
    private long id;
    private String nickname;
    private String email;
    private String firstName;
    private String lastName;
    private String mobilePhone;
    private boolean isAdmin;
    private List<Address> addresses;
}
