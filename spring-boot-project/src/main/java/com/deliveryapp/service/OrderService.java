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
        // Създаване на поръчка
        Order order = new Order();
        order.setBuyer(loggedUser); // user_id
        order.setCreatedAt(Timestamp.valueOf(LocalDateTime.now()));
        order.setStatus(OrderStatus.CREATED); // или каквото е по твоя enum/таблица
        order.setTotalAmount(BigDecimal.ZERO); // ще се сметне после

        // Запазваме поръчката, за да имаме ID
        order = orderRepository.save(order);

        BigDecimal totalAmount = BigDecimal.ZERO;

        for (CreateOrderDto.ItemQuantity itemDto : dto.getItems()) {
            Item item = itemRepository.findById(itemDto.getItemId())
                    .orElseThrow(() -> new EntityNotFoundException("Артикул с ID " + itemDto.getItemId() + " не съществува."));

            int quantity = itemDto.getQuantity();
            BigDecimal subtotal = BigDecimal.valueOf(item.getPrice()).multiply(BigDecimal.valueOf(quantity));
            totalAmount = totalAmount.add(subtotal);

            OrderedItem orderedItem = new OrderedItem();
            orderedItem.setOrder(order);
            orderedItem.setItem(item);
            orderedItem.setQuantity(quantity);
            orderedItemRepository.save(orderedItem);
        }

        order.setTotalAmount(totalAmount);
        orderRepository.save(order);

        return new OrderDto(order); // предполагаме, че DTO съдържа нужната информация
    }
}
