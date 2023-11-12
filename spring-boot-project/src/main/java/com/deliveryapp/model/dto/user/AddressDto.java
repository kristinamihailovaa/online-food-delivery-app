package com.deliveryapp.model.dto.user;

import lombok.Data;
import javax.validation.constraints.NotNull;

@Data
public class AddressDto {
    @NotNull(message = "Address is mandatory!")
    private String address;
    private String description;

}
