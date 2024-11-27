package com.deliveryapp.repository;

import com.deliveryapp.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ItemRepository extends JpaRepository<Item,Long> {
     Collection<Item> findByCategoryId(Long id);
}
