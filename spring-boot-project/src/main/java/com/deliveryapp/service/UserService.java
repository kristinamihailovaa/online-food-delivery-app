package com.deliveryapp.service;

import com.deliveryapp.entity.User;
import com.deliveryapp.exception.BadRequestException;
import com.deliveryapp.model.dto.user.*;
import com.deliveryapp.repository.UserRepository;
import com.deliveryapp.utils.UserUtils;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;
    private PasswordResetTokenService passwordResetTokenService;
    private EmailService emailService;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, PasswordResetTokenService passwordResetTokenService, EmailService emailService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordResetTokenService = passwordResetTokenService;
        this.emailService = emailService;
    }

    public UserResponseDto login(LoginRequestUserDTO dto) {
        String email = dto.getEmail();
        String password = dto.getPassword();
        Optional<User> userFromDb = userRepository.findByEmail(email);
        if (userFromDb.isEmpty()) {
            throw new EntityNotFoundException("Wrong email!");
        }
        String passwordFromDb = userFromDb.get().getPassword();
        if (!passwordEncoder.matches(password, passwordFromDb)) {
            throw new EntityNotFoundException("Wrong password!");
        }
//        return modelMapper.map(userFromDb, UserWithoutPasswordDTO.class);
        return null;
    }

    public void forgottenPassword(String email) throws BadRequestException {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            String token = UUID.randomUUID().toString();
            passwordResetTokenService.createPasswordResetTokenForUser(user, token);
            try {
                emailService.sendPasswordResetEmail(user.get().getEmail(), token);
            } catch (MessagingException e) {
                throw new BadRequestException("Failed to send email");
            }
        } else {
            throw new EntityNotFoundException("User not found with email: + email)");
        }
//    }
}

    public RegistrationResponseUserDto registerUser(RegistrationRequestDto dto) throws BadRequestException {
        Optional<User> userFromDb = userRepository.findByEmail(dto.getEmail());

        if (userFromDb.isPresent()) {
            throw new IllegalArgumentException(String.format("There is an account with that email address: "
                    + dto.getEmail()));
        }

        if (!UserUtils.isValidEmail(dto.getEmail())) {
            throw new IllegalArgumentException(String.format("Invalid email format!: "
                    + dto.getEmail()));
        }

        if (!dto.getPassword().equals(dto.getConfirmPassword())) {
            throw new BadRequestException("Passwords mismatch!");
        }

//        if (!UserUtils.isValidName(dto.getFullName())) {
//            throw new BadRequestException("Invalid name format!");
//        }
        User user = new User();
        user.setFirstName(dto.getFirstname());
        user.setLastName(dto.getLastname());
        user.setUsername(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setEmail(dto.getEmail());
        user.setAdmin(dto.isAdmin());
        userRepository.save(user);

        return new RegistrationResponseUserDto(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName(), user.isAdmin());

    }

    public ResponseEntity<?> editUserData(EditUserDataRequestDto dto) {
        return null;
    }
}
