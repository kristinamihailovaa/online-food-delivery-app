package com.deliveryapp.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    private String name;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "PRICE")
    private double price;

    @Column(name = "QUANTITY")
    private int quantity;


    @OneToOne(mappedBy = "item")
    @JsonBackReference
    ItemImage itemImages;

    @OneToMany(mappedBy = "item")
    @JsonBackReference
    private List<OrderedItems> orderedItems;
}
