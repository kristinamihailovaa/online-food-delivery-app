package com.deliveryapp.service;

import com.deliveryapp.entity.PasswordResetToken;
import com.deliveryapp.entity.User;
import com.deliveryapp.repository.PasswordTokenRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class PasswordResetTokenService {

    private final PasswordTokenRepository passwordTokenRepository;

    public PasswordResetTokenService(PasswordTokenRepository passwordTokenRepository) {
        this.passwordTokenRepository = passwordTokenRepository;
    }
    @Transactional
    public void createPasswordResetTokenForUser(Optional<User> userOptional, String token) {
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            PasswordResetToken existingToken = passwordTokenRepository.findByUser(user);

            if (existingToken != null) {
                existingToken.setToken(token);
                existingToken.setExpiryDate(30);
                passwordTokenRepository.save(existingToken);
            } else {
                PasswordResetToken newToken = new PasswordResetToken(token, user);
                newToken.setExpiryDate(30);
                passwordTokenRepository.save(newToken);
            }
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }

    public String validatePasswordResetToken(String token) {
        final PasswordResetToken passToken = passwordTokenRepository.findByToken(token);

        return !isTokenFound(passToken) ? "invalidToken"
                : isTokenExpired(passToken) ? "Link already expired."
                : null;
    }

    private boolean isTokenFound(PasswordResetToken passToken) {
        return passToken != null;
    }

    private boolean isTokenExpired(PasswordResetToken passToken) {
        return LocalDateTime.now().isAfter(passToken.getExpiryDate());
    }

    public Optional<User> findUserByPasswordToken(String passwordToken) {
        return Optional.ofNullable(passwordTokenRepository.findByToken(passwordToken).getUser());
    }

}
