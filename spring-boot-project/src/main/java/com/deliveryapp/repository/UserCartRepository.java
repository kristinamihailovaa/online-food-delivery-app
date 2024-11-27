package com.deliveryapp.repository;

import com.deliveryapp.entity.UserCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserCartRepository extends JpaRepository<UserCart, Long> {
    UserCart findByUserIdAndItemId(Long userId, Long itemId);

    Optional<List<UserCart>> findByUserId (Long userId);
}
