package com.deliveryapp.model.dto.user;

import com.deliveryapp.entity.Address;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class UserResponseDto {
    private long id;
    private String userName;
    private String email;
    private String firstName;
    private String lastName;
    private String mobilePhone;
    private boolean isAdmin;
    private List<Address> addresses;
}
