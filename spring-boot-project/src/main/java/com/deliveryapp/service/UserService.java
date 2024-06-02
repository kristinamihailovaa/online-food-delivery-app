package com.deliveryapp.service;

import com.deliveryapp.entity.User;
import com.deliveryapp.model.dto.user.LoginRequestUserDTO;
import com.deliveryapp.model.dto.user.UserResponseDto;
import com.deliveryapp.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public UserResponseDto login(LoginRequestUserDTO dto) {
        String email = dto.getEmail();
        String password = dto.getPassword();
        Optional<User> userFromDb = userRepository.findByEmail(email);
        if (userFromDb.isEmpty()) {
            throw new EntityNotFoundException("Wrong email!");
        }
//        String passwordFromDb = userFromDb.getPassword();
//        if (!passwordEncoder.matches(password, passwordFromDb)) {
//            throw new NotFoundException("Wrong password!");
//        }
//        return modelMapper.map(userFromDb, UserWithoutPasswordDTO.class);
        return null;
    }
//    }
}
