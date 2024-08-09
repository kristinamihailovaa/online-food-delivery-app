package com.deliveryapp.controller;

import com.deliveryapp.exception.BadRequestException;
import com.deliveryapp.model.dto.user.EditUserDataRequestDto;
import com.deliveryapp.model.dto.user.LoginRequestUserDTO;
import com.deliveryapp.model.dto.user.RegistrationRequestDto;
import com.deliveryapp.model.dto.user.UserResponseDto;
import com.deliveryapp.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import javax.validation.Valid;
import java.util.UUID;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private SessionManager sessionManager;

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @PostMapping("/users/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequestUserDTO dto, HttpServletRequest request) {
        UserResponseDto user = userService.login(dto);
        sessionManager.loginUser(request, user.getId());
        return ResponseEntity.ok(user);
    }
    @PostMapping("/user/forgotten-password")
    public ResponseEntity forgottenpassword(HttpServletRequest request,
                                         @RequestParam("email") String email) throws BadRequestException {
        userService.forgottenPassword(email);
        return ResponseEntity.ok("Password reset link has been sent to your email.");
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegistrationRequestDto dto, HttpSession session) throws IllegalAccessException, BadRequestException {
//        sessionManager.isLoggedVerification(session);
        return ResponseEntity.ok(userService.registerUser(dto));
    }
    @PutMapping("/profile/edit")
    public ResponseEntity<?> editUserData(@RequestBody @Valid EditUserDataRequestDto dto, HttpServletRequest request) throws AuthenticationException {
        if (!sessionManager.userHasPrivileges(request)) {
            throw new IllegalArgumentException("No privileges!");
        }
        return userService.editUserData(dto);
    }

}
