package com.deliveryapp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @ManyToOne(cascade = CascadeType.ALL)
    private Category category;

    private String description;
    private double price;
    private int quantity;


    @OneToOne(mappedBy = "item")
    @JsonBackReference
    ItemImage itemImages;
}
