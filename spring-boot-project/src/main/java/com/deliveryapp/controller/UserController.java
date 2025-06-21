package com.deliveryapp.controller;

import com.deliveryapp.exception.AuthenticationException;
import com.deliveryapp.entity.User;
import com.deliveryapp.exception.BadRequestException;
import com.deliveryapp.model.dto.user.EditUserDataRequestDto;
import com.deliveryapp.model.dto.user.LoginRequestUserDTO;
import com.deliveryapp.model.dto.user.RegistrationRequestDto;
import com.deliveryapp.model.dto.user.UserWithoutPasswordDto;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestUserDTO dto, HttpServletRequest request) {
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

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(HttpServletRequest request) {
        Long userId = (Long) request.getSession().getAttribute("userId");

        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("You need to be logged in to view the profile.");
        }
        try {
            UserWithoutPasswordDto userprofileDto = userService.getProfile(userId);
            return ResponseEntity.ok(userprofileDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while retrieving the profile.");
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistrationRequestDto dto, HttpSession session) {
        try {
            userService.registerUser(dto);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration.");
        }
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
        Long loggedUserId = (Long) request.getSession().getAttribute("logged_user_id");
        try {
            if (loggedUserId == null || !loggedUserId.equals(id)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body("You are not authorized to edit this profile.");
            }
            userService.editUserData(id, dto);
            return ResponseEntity.ok("Profile updated successfully.");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while updating the profile.");
        }
    }
}
