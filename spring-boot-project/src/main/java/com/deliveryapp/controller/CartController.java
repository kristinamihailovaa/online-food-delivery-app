package com.deliveryapp.controller;

import com.deliveryapp.service.CartService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;

@RestController
public class CartController {

    @Autowired
    SessionManager sessionManager;

    @Autowired
    CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<String> addItemToCart(@RequestParam Long itemId,
                                                @RequestParam int quantity, HttpServletRequest request) throws AuthenticationException {
        cartService.addItemToCart(sessionManager.getLoggedUser(request),itemId, quantity);
        return ResponseEntity.ok("Item added to cart.");
    }

    @DeleteMapping("/cart/{itemId}")
    public ResponseEntity<String> deleteCartItem(@PathVariable Long itemId,HttpServletRequest request) throws AuthenticationException {
        cartService.removeItemFromCart(sessionManager.getLoggedUser(request),itemId);
        return ResponseEntity.ok("Item removed from cart.");
    }

    @GetMapping("/cart")
    public ResponseEntity<?> getCartItems(HttpServletRequest request) throws AuthenticationException {
        return ResponseEntity.ok(cartService.getAllProductsFromCart(sessionManager.getLoggedUser(request)));
    }
}
