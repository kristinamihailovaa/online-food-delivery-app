package com.deliveryapp.model.dto.item;

import com.deliveryapp.entity.Category;
import lombok.Data;

@Data
public class ResponseItemDto {
    private long id;
    private String name;
    private Category category;
    private double price;
    private String description;
    private int quantity;

}
