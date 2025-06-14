package com.deliveryapp.controller;

import com.deliveryapp.entity.Item;
import com.deliveryapp.exception.AuthorizationException;
import com.deliveryapp.model.dto.item.RequestItemDto;
import com.deliveryapp.model.dto.item.ResponseItemDto;
import com.deliveryapp.service.ItemService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;

import java.util.List;

import static com.deliveryapp.utils.Const.*;

@RestController
public class ItemController {
    private final ItemService itemService;
    private final SessionManager sessionManager;
    private final ObjectMapper mapper;

    public ItemController(ItemService itemService, SessionManager sessionManager, ObjectMapper mapper) {
        this.itemService = itemService;
        this.sessionManager = sessionManager;
        this.mapper = mapper;
    }

    @PostMapping("/items/add")
    public ResponseEntity<?> addItem(@RequestBody RequestItemDto requestItemDto, HttpServletRequest request) throws AuthenticationException {
        if (sessionManager.userHasPrivileges(request)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to perform this action!");
        }
        try {
            Item item = itemService.createItem(requestItemDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(item);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the item.");
        }
    }

    @PutMapping("/item/{id}")
    public ResponseEntity<?> editProduct(@PathVariable long id, @RequestBody RequestItemDto itemDto, HttpServletRequest request) throws AuthenticationException, JsonProcessingException {
        if (sessionManager.userHasPrivileges(request)) {
            throw new AuthorizationException("You are not authorized to perform this action!");
        }
        ResponseItemDto responseItemDto = itemService.editItem(itemDto, id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(mapper.writer().withRootName(ROOT_ELEMENT_ITEM).writeValueAsString(responseItemDto));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable Long id, HttpServletRequest request) throws AuthenticationException {
        if (sessionManager.userHasPrivileges(request)) {
            throw new AuthorizationException("You are not authorized to perform this action!");
        }
        try {
            itemService.deleteItem(id);
            return ResponseEntity.ok("Item deleted successfully.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the item.");
        }
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<?> getItemById(@PathVariable Long id) {
        try {
            ResponseItemDto item = itemService.getItemById(id);
            return ResponseEntity.ok(item);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found.");
        }
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<?> getItemsByCategory(@PathVariable Long categoryId) throws JsonProcessingException {
        List<ResponseItemDto> items = itemService.getItemsByCategory(categoryId);
        return ResponseEntity.status(HttpStatus.OK)
                .body(mapper.writer().withRootName(ROOT_ELEMENT_PRODUCTS).writeValueAsString(items));
    }

    @GetMapping("/search")
    public List<ResponseItemDto> searchItems(@RequestParam String query) {
        return itemService.searchItems(query);
    }
}
