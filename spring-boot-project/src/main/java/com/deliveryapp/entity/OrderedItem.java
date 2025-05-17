package com.deliveryapp.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders_have_items")
public class OrderedItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @MapsId("orderId")
    @JsonManagedReference
    @JoinColumn(name = "order_id")
    Order order;

    @ManyToOne
    @MapsId("itemId")
    @JsonManagedReference
    @JoinColumn(name = "item_id")
    Item item;

    private Integer quantity;

}
