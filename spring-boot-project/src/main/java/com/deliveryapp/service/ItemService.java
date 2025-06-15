package com.deliveryapp.service;

import com.deliveryapp.entity.Category;
import com.deliveryapp.entity.Item;
import com.deliveryapp.model.dto.item.RequestItemDto;
import com.deliveryapp.model.dto.item.ResponseItemDto;
import com.deliveryapp.repository.CategoryRepository;
import com.deliveryapp.repository.ItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemService {

    private final CategoryRepository categoryRepository;

    private final ItemRepository itemRepository;
    private final ModelMapper modelMapper = new ModelMapper();

    public ItemService(CategoryRepository categoryRepository, ItemRepository itemRepository) {
        this.categoryRepository = categoryRepository;
        this.itemRepository = itemRepository;
    }

    public Item createItem(RequestItemDto itemDto) {
        Category category = categoryRepository.findById(itemDto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        Item item = new Item();
        item.setName(itemDto.getName());
        item.setDescription(itemDto.getDescription());
        item.setPrice(itemDto.getPrice());
        item.setCategory(category);

        return itemRepository.save(item);
    }

    public ResponseItemDto editItem(RequestItemDto itemDto, long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Item not found"));
        item.setName(itemDto.getName());
        item.setDescription(itemDto.getDescription());
        item.setPrice(itemDto.getPrice());

        return modelMapper.map(itemRepository.save(item), ResponseItemDto.class);

    }

    public void deleteItem(long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Item doest not exist"));
        itemRepository.delete(item);
    }

    public ResponseItemDto getItemById(long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Item does not exist"));
        return modelMapper.map(item, ResponseItemDto.class);
    }

    public List<ResponseItemDto> getItemsByCategory(Long categoryId) {
        List<Item> items = itemRepository.findByCategoryId(categoryId);
       return items.stream().map(item -> new ResponseItemDto(item.getId(), item.getName(), item.getCategory(), item.getPrice(), item.getDescription()))
                .collect(Collectors.toList());


    }

    public List<ResponseItemDto> searchItems(String query) {
        List<Item> items = itemRepository.findByNameContainingIgnoreCase(query);
        return items.stream()
                .map(this::mapToResponse)
                .toList();
    }

    private ResponseItemDto mapToResponse(Item item) {
        return new ResponseItemDto(
                item.getId(),
                item.getName(),
                item.getCategory(),
                item.getPrice(),
                item.getDescription()
        );
    }
}
