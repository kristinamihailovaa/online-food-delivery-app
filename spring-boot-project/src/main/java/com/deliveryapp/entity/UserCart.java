package com.deliveryapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Component
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users_has_products_in_cart")
public class UserCart {

    @Embeddable
    @Data
    public static class UserCartKey implements Serializable {
        @Column(name = "user_id")
        private long userId;
        @Column(name = "item_id")
        private long itemId;
    }

    @EmbeddedId
    private UserCartKey primaryKey;

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
    private double grandTotal;

}
