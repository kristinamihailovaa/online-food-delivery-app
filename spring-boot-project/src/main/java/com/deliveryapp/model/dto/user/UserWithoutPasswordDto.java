package com.deliveryapp.model.dto.user;

import com.deliveryapp.entity.Address;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class UserWithoutPasswordDto {
    private long id;
    private String email;
    private String fullName;
    private String username;
    private String mobilePhone;
    private boolean isAdmin;
    private List<Address> addresses;
}
