package com.deliveryapp.repository;

import com.deliveryapp.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item,Long> {
     List<Item> findByCategoryId(Long id);

    List<Item> findByNameContainingIgnoreCase(String query);
}
