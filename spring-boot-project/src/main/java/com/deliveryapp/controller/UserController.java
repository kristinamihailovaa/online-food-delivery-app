package com.deliveryapp.controller;

import com.deliveryapp.model.dto.user.LoginRequestUserDTO;
import com.deliveryapp.model.dto.user.RegisterUserRequestDto;
import com.deliveryapp.model.dto.user.UserResponseDto;
import com.deliveryapp.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
                                         @RequestParam("email") String email) {
//        String token = UUID.randomUUID().toString();
//        userService.createPasswordResetTokenForUser(user, token);
//        mailSender.send(constructResetTokenEmail(getAppUrl(request),
//                request.getLocale(), token, user));
//        return new GenericResponse(
//                messages.getMessage("message.resetPasswordEmail", null,
//                        request.getLocale()));
//        sessionManager.isLoggedVerification(request.getSession());
        userService.forgottenPassword(email);
        return ResponseEntity.ok().build();
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterUserRequestDto dto, HttpSession session) throws IllegalAccessException {
//        sessionManager.isLoggedVerification(session);
        return ResponseEntity.ok(userService.registerUser(dto));
    }

}
