package com.deliveryapp.model.dto.order;

import com.deliveryapp.entity.Order;
import com.deliveryapp.entity.OrderedItem;
import com.deliveryapp.entity.Status;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
public class OrderDto {

    List<OrderedItem> orderedProducts;
    private Timestamp createdAt;
    private Status status;
    private BigDecimal totalAmount;

    public OrderDto(Order order) {
        this.orderedProducts = order.getOrderedProducts();
        this.createdAt = order.getCreatedAt();
        this.status = order.getStatus();
        this.totalAmount = order.getTotalAmount();
    }
}
