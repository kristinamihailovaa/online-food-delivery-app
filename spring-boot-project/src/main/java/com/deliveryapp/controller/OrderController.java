package com.deliveryapp.controller;

import com.deliveryapp.entity.User;
import com.deliveryapp.model.dto.order.CreateOrderDto;
import com.deliveryapp.model.dto.order.OrderDto;
import com.deliveryapp.service.OrderService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.AuthenticationException;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    SessionManager sessionManager;

    @Autowired
    OrderService orderService;

    @PostMapping("/orders")
    OrderDto createOrder(CreateOrderDto dto, HttpServletRequest request) throws AuthenticationException {
        User loggedUser = sessionManager.getLoggedUser(request);
        return orderService.createOrder(dto, loggedUser);

    }

    @GetMapping("/orders")
    List<OrderDto> getAllOrders(HttpServletRequest request) throws AuthenticationException {
        return orderService.getAllOrders(sessionManager.getLoggedUser(request));
    }
}
