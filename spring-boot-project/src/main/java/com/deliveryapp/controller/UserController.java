package com.deliveryapp.controller;

import com.deliveryapp.model.dto.user.LoginRequestUserDTO;
import com.deliveryapp.model.dto.user.UserResponseDto;
import com.deliveryapp.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

//    @Autowired
//    private SessionManager sessionManager;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @PostMapping("/users/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequestUserDTO dto, HttpServletRequest request) {
        UserResponseDto user = userService.login(dto);
//        sessionManager.loginUser(request, user.getId());
        return ResponseEntity.ok(user);
    }
}
