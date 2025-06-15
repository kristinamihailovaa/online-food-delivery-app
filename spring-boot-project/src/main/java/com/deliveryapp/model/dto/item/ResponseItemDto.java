package com.deliveryapp.model.dto.item;

import com.deliveryapp.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseItemDto {
    private long id;
    private String name;
    private Category category;
    private double price;
    private String description;

}
