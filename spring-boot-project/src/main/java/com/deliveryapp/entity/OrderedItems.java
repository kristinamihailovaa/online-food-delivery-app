package com.deliveryapp.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders_have_items")
public class OrderedItems {
    @Embeddable
    @Data
    public static class OrderedItemsKey implements Serializable {
        long orderId;
        long itemId;
    }

    @EmbeddedId
    private OrderedItemsKey primaryKey;

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

    private int quantity;

}
