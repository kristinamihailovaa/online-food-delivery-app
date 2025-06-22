package com.deliveryapp.service;

import com.deliveryapp.entity.Item;
import com.deliveryapp.entity.Order;
import com.deliveryapp.entity.OrderedItem;
import com.deliveryapp.entity.User;
import com.deliveryapp.model.dto.order.CreateOrderDto;
import com.deliveryapp.model.dto.order.OrderDto;
import com.deliveryapp.repository.ItemRepository;
import com.deliveryapp.repository.OrderRepository;
import com.deliveryapp.repository.OrderedItemRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;

    private final OrderedItemRepository orderedItemRepository;

    public OrderService(OrderRepository orderRepository, ItemRepository itemRepository, OrderedItemRepository orderedItemRepository) {
        this.orderRepository = orderRepository;
        this.itemRepository = itemRepository;
        this.orderedItemRepository = orderedItemRepository;
    }


    public List<OrderDto> getOrdersByUser(User loggedUser) {
        List<Order> orders = orderRepository.findAllByBuyer(loggedUser);
        return orders.stream().map(OrderDto::new).toList();
    }


    @Transactional
    public OrderDto createOrder(CreateOrderDto dto, User loggedUser) {

        Order order = new Order();
        order.setBuyer(loggedUser);
        order.setCreatedAt(Timestamp.valueOf(LocalDateTime.now()));
//        order.setStatus("CREATED");

        BigDecimal totalAmount = BigDecimal.ZERO;
        order = orderRepository.save(order); // трябва ни ID-то на order преди да добавим продукти

        for (CreateOrderDto.ItemQuantity itemDto : dto.getItemIds()) {
            Item item = itemRepository.findById(itemDto.getItemId())
                    .orElseThrow(() -> new EntityNotFoundException("Item not found: " + itemDto.getItemId()));

            int quantity = itemDto.getQuantity();
            BigDecimal subtotal = BigDecimal.valueOf(item.getPrice() * quantity);
            totalAmount = totalAmount.add(subtotal);

            OrderedItem orderedItem = new OrderedItem();
            orderedItem.setOrder(order);
            orderedItem.setItem(item);
            orderedItem.setQuantity(quantity);

            orderedItemRepository.save(orderedItem);
        }

        order.setTotalAmount(totalAmount);
        orderRepository.save(order);
        return new OrderDto(order);
    }
}

