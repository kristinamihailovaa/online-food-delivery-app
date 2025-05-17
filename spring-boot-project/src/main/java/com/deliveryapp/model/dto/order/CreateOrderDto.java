package com.deliveryapp.model.dto.order;


import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class CreateOrderDto {

    private List<ItemQuantity> itemIds;
    @Getter
    @Setter
    public static class ItemQuantity {

        private Long itemId;
        private Integer quantity;

}
}
