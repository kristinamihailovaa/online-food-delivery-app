package com.deliveryapp.repository;

import com.deliveryapp.entity.PasswordResetToken;
import com.deliveryapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasswordTokenRepository extends JpaRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);
    void deleteByUser(User user);

    PasswordResetToken findByUser(User user);
}
