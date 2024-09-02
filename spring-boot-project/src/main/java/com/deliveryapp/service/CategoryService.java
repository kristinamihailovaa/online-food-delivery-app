package com.deliveryapp.service;

import com.deliveryapp.entity.Category;
import com.deliveryapp.model.dto.category.CategoryDto;
import com.deliveryapp.repository.CategoryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Създаване на нова категория
    @Transactional
    public Category createCategory(CategoryDto categoryDTO) {
        Category category = new Category();
        category.setCategoryName(categoryDTO.getName());
        // Ако имаш нужда от други полета, ги попълни тук
        return categoryRepository.save(category);
    }

    // Вземане на всички категории
    public List<CategoryDto> getAllCategories() {
        return categoryRepository.findAll().stream()
                .map(this::convertToDTO)
                .toList();
    }

    public CategoryDto getCategoryById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        return convertToDTO(category);
    }

    @Transactional
    public Category updateCategory(Long id, CategoryDto categoryDto) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        category.setCategoryName(categoryDto.getName());
        return categoryRepository.save(category);
    }

    @Transactional
    public void deleteCategory(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        categoryRepository.delete(category);
    }

    private CategoryDto convertToDTO(Category category) {
        CategoryDto dto = new CategoryDto();
        dto.setId(category.getCategoryId());
        dto.setName(category.getCategoryName());
        return dto;
    }
}