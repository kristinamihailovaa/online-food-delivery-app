package com.deliveryapp.service;

import com.deliveryapp.model.dto.user.LoginRequestUserDTO;
import com.deliveryapp.model.dto.user.UserResponseDto;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    public UserResponseDto login(LoginRequestUserDTO dto) {
        return new UserResponseDto();
    }
}
