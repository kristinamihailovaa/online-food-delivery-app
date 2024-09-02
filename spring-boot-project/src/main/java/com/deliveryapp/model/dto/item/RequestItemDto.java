package com.deliveryapp.model.dto.item;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestItemDto {
    @NotBlank(message = "Item name is mandatory!")
    @Size(min = 2, max = 45,message = "Name should be between 2 and 45 symbols")
    private String name;
    @NotNull(message = "Item category is mandatory!")
    private Long categoryId;

    @NotNull(message = "Item price is mandatory!")
    @Min(value = 1, message = "Item price must be positive number!")
    private double price;

    @NotNull(message = "Item quantity is mandatory!")
    @Min(value = 1, message = "Item quantity must be positive number!")
    private int quantity;

    private String description;
}
