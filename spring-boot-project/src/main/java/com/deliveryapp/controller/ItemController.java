package com.deliveryapp.controller;

import com.deliveryapp.entity.Item;
import com.deliveryapp.exception.AuthorizationException;
import com.deliveryapp.exception.BadRequestException;
import com.deliveryapp.service.ItemService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.AuthenticationException;
import javax.validation.Valid;
import java.util.Objects;

@RestController
public class ItemController {
    private final ItemService itemService;
    private final SessionManager sessionManager;

    public ItemController(ItemService itemService, SessionManager sessionManager) {
        this.itemService = itemService;
        this.sessionManager = sessionManager;
    }
    @PostMapping("/items/add")
    public ResponseEntity<?> addItem(@RequestBody ItemDto itemDTO, @RequestParam Long categoryId, HttpServletRequest request) throws AuthenticationException {
        if (!sessionManager.userHasPrivileges(request)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to perform this action.");
        }
        try {
            Item item = itemService.createItem(itemDTO, categoryId);
            return ResponseEntity.status(HttpStatus.CREATED).body(item);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the item.");
        }
    }
}
