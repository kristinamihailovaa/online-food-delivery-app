package com.deliveryapp.service;

import com.deliveryapp.entity.Item;
import com.deliveryapp.entity.User;
import com.deliveryapp.entity.UserCart;
import com.deliveryapp.repository.ItemRepository;
import com.deliveryapp.repository.UserCartRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private UserCartRepository userCartRepository;

    @Autowired
    private ItemRepository itemRepository;

    public void addItemToCart(User user, Long itemId, int quantity) {
        // Проверка дали потребителят съществува
        // TODO: Добавете логика за проверка на потребител (ако е необходимо)

        // Проверка дали артикулът съществува
        Optional<Item> itemOptional = itemRepository.findById(itemId);
        if (itemOptional.isEmpty()) {
            throw new EntityNotFoundException("Item with id " + itemId + " not found.");
        }
        Item item = itemOptional.get();

        UserCart existingCartItem = userCartRepository.findByUserIdAndItemId(user.getId(), itemId);
        if (existingCartItem != null) {
            // Ако артикулът вече съществува, просто актуализирайте количеството
            existingCartItem.setQuantity(existingCartItem.getQuantity() + quantity);
            userCartRepository.save(existingCartItem);
        } else {
            // В противен случай създайте нов запис
            UserCart userCart = new UserCart();
            userCart.setUserId(user.getId());
            userCart.setItemId(itemId);
            userCart.setQuantity(quantity);
            userCartRepository.save(userCart);
        }
    }

    public void removeItemFromCart(User user, Long itemId) {
        // Проверка дали артикулът съществува в кошницата на потребителя
        UserCart cartItem = userCartRepository.findByUserIdAndItemId(user.getId(), itemId);
        if (cartItem != null) {
            userCartRepository.delete(cartItem);
        } else {
            throw new EntityNotFoundException("Item with id " + itemId + " not found in cart.");
        }
    }

    public List<UserCart> getAllProductsFromCart(User user) {
        return userCartRepository.findByUserId(user.getId()).orElseThrow(() -> new EntityNotFoundException("User card not found!"));
    }
}
