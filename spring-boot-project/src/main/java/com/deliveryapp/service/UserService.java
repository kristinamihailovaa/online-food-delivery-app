package com.deliveryapp.service;

import com.deliveryapp.entity.PasswordResetToken;
import com.deliveryapp.entity.User;
import com.deliveryapp.exception.AuthenticationException;
import com.deliveryapp.exception.BadRequestException;
import com.deliveryapp.model.dto.user.*;
import com.deliveryapp.repository.PasswordTokenRepository;
import com.deliveryapp.repository.UserRepository;
import com.deliveryapp.utils.UserUtils;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
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
    private PasswordTokenRepository passwordTokenRepository;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, PasswordResetTokenService passwordResetTokenService, EmailService emailService,
                       PasswordTokenRepository passwordTokenRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordResetTokenService = passwordResetTokenService;
        this.emailService = emailService;
        this.passwordTokenRepository = passwordTokenRepository;
    }

    public User authenticateUser(LoginRequestUserDTO dto) throws AuthenticationException {
        String email = dto.getEmail();
        String password = dto.getPassword();
        Optional<User> userFromDb = userRepository.findByEmail(email);
        if (userFromDb.isEmpty()) {
            throw new AuthenticationException("Wrong email!");
        }
        String passwordFromDb = userFromDb.get().getPassword();
        if (!passwordEncoder.matches(password, passwordFromDb)) {
            throw new AuthenticationException("Wrong password!");
        }
        return userFromDb.get();
    }

    public void forgottenPassword(String email) throws BadRequestException {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            String token = UUID.randomUUID().toString();
            passwordResetTokenService.createPasswordResetTokenForUser(user, token);
            try {
                emailService.sendPasswordResetEmail(user.get().getEmail(), token);
            } catch (MessagingException e) {
                throw new BadRequestException("Failed to send email!");
            }
        } else {
            throw new EntityNotFoundException("User not found with email: + email)");
        }
    }

    public void registerUser(RegistrationRequestDto dto) throws BadRequestException {
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
        User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setUsername(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setEmail(dto.getEmail());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setAdmin(dto.isAdmin());
        userRepository.save(user);

        new RegistrationResponseUserDto(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName(), user.isAdmin());

    }

    public void editUserData(Long userId, EditUserDataRequestDto dto) {
        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isEmpty()) {
            throw new EntityNotFoundException("User not found");
        }

        User user = optionalUser.get();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPhoneNumber(dto.getPhoneNumber());


        userRepository.save(user);
    }

    public void resetPassword(String token, String newPassword) {
        PasswordResetToken resetToken = passwordTokenRepository.findByToken(token);
        if (resetToken == null || resetToken.isExpired()) {
            throw new IllegalArgumentException("Invalid or expired token.");
        }

        User user = resetToken.getUser();
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        passwordTokenRepository.delete(resetToken);
    }

    public UserWithoutPasswordDto getProfile(Long loggedUserId) {
        User user = userRepository.findById(loggedUserId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        UserWithoutPasswordDto userDto = new UserWithoutPasswordDto();
        userDto.setEmail(user.getEmail());
        userDto.setFirstname(user.getFirstName());
        userDto.setLastname(user.getLastName());
        userDto.setMobilePhone(user.getPhoneNumber());
        userDto.setAddresses(user.getAddresses());

        return userDto;

    }
}

