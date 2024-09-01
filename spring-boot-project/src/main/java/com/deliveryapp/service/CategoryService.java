package com.deliveryapp.service;

import com.deliveryapp.entity.Category;
import com.deliveryapp.model.dto.category.CategoryDto;
import com.deliveryapp.repository.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    // Вземане на категория по ID
    public CategoryDto getCategoryById(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        return convertToDTO(category);
    }

    // Актуализиране на категория
    @Transactional
    public Category updateCategory(Long id, CategoryDto categoryDto) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        category.setCategoryName(categoryDto.getName());
        // Ако имаш нужда от актуализиране на други полета, направи го тук
        return categoryRepository.save(category);
    }

    // Изтриване на категория
    @Transactional
    public void deleteCategory(Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        categoryRepository.delete(category);
    }

    // Помощен метод за конвертиране на Category в CategoryDTO
    private CategoryDto convertToDTO(Category category) {
        CategoryDto dto = new CategoryDto();
        dto.setId(category.getCategoryId());
        dto.setName(category.getCategoryName());
        // Ако имаш нужда от други полета, ги добави тук
        return dto;
    }
}