package com.deliveryapp.model.dto.order;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CreateOrderDto {


    private List<ItemQuantity> items;
    private String deliveryAddress;
    private String email;
    private String phone;

    @Getter
    @Setter
    public static class ItemQuantity {
        private Long itemId;
        private int quantity;
    }

}
