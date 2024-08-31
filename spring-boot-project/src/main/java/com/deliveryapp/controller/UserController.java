package com.deliveryapp.controller;

import com.deliveryapp.exception.AuthenticationException;
import com.deliveryapp.entity.User;
import com.deliveryapp.exception.BadRequestException;
import com.deliveryapp.model.dto.user.EditUserDataRequestDto;
import com.deliveryapp.model.dto.user.LoginRequestUserDTO;
import com.deliveryapp.model.dto.user.RegistrationRequestDto;
import com.deliveryapp.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class UserController {

    private UserService userService;
    private SessionManager sessionManager;
    private final ObjectMapper mapper;

    public UserController(ObjectMapper mapper, UserService userService, SessionManager sessionManager) {
        this.mapper = mapper;
        this.userService = userService;
        this.sessionManager = sessionManager;
    }

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

    @PostMapping("/users/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequestUserDTO dto, HttpServletRequest request) {
        try {
            User user = userService.authenticateUser(dto);
            sessionManager.loginUser(request, user.getId());
            return ResponseEntity.ok("Successfully logged in");

        } catch (AuthenticationException exception) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }
    }

    @PostMapping("/user/forgotten-password")
    public ResponseEntity<?> forgottenpassword(HttpServletRequest request,
                                               @RequestParam("email") String email) throws BadRequestException {
        userService.forgottenPassword(email);
        return ResponseEntity.status(HttpStatus.OK)
                .body("Password reset link has been sent to your email.");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(HttpServletRequest request,
                                           @RequestParam("token") String token,
                                           @RequestParam("newPassword") String newPassword) {
        try {
            userService.resetPassword(token, newPassword);
            return ResponseEntity.ok("Password has been reset successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Invalid or expired token.");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while resetting the password.");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegistrationRequestDto dto, HttpSession session) throws IllegalAccessException, BadRequestException {
//        sessionManager.isLoggedVerification(session);
        return ResponseEntity.ok(userService.registerUser(dto));
    }

    @PostMapping("/user/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        try {
            sessionManager.logoutUser(session);
            return ResponseEntity.ok("Successfully logged out");
        } catch (BadRequestException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }
    }

    @PutMapping("/profile/edit")
    public ResponseEntity<?> editProfile(@RequestParam Long id,
                                         @RequestBody @Valid EditUserDataRequestDto dto, HttpServletRequest request) throws AuthenticationException, javax.naming.AuthenticationException {
        try {
            sessionManager.validateSession(request);
            
            userService.editUserData(id, dto);
            return ResponseEntity.ok("Profile updated successfully.");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while updating the profile.");
        }
    }
}
