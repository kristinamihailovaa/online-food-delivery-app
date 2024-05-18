package com.deliveryapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Component
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users_has_products_in_cart")
public class UserCart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cartId;

    @ManyToOne
    @JsonIgnore
//    @JsonManagedReference
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @JsonManagedReference
    @MapsId("itemId")
    @JoinColumn(name = "item_id")
    Item item;

    private int quantity;

}
