package com.deliveryapp.controller;

import com.deliveryapp.entity.User;
import com.deliveryapp.exception.BadRequestException;
import com.deliveryapp.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.naming.AuthenticationException;

@Component
public class SessionManager {
    private static final String LOGGED_USER_ID = "logged_user_id";
    private static final String LOGGED_USER_REMOTE_ADDRESS = "logged_user_remote_address";

    @Autowired
    private UserRepository userRepository;

    public void loginUser(HttpServletRequest request, long id) {
        HttpSession session = request.getSession();
        session.setAttribute(LOGGED_USER_REMOTE_ADDRESS, request.getRemoteAddr());
        session.setAttribute(LOGGED_USER_ID , id);
    }

    public void logoutUser(HttpSession session) throws BadRequestException {
        if (session.getAttribute(LOGGED_USER_ID) == null){
            throw new BadRequestException("You have to be logged in to logout!");
        }
        session.invalidate();
    }

    public boolean userHasPrivileges(HttpServletRequest request, long id) throws AuthenticationException {
        User user = getLoggedUser(request);
        if (user.isAdmin()){
            return true;
        }
        return id == user.getId();
    }

    public boolean userHasPrivileges(HttpServletRequest request) throws AuthenticationException {
        User user = getLoggedUser(request);
        return user.isAdmin();
    }

    public User getLoggedUser(HttpServletRequest request) throws AuthenticationException {
        HttpSession session = request.getSession();
        validateSession(request);
        long userId = (long) session.getAttribute(LOGGED_USER_ID);
        return userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("The user does not exist!"));
    }

    public void validateSession (HttpServletRequest request) throws AuthenticationException {
        String remoteAddress = request.getRemoteAddr();
        HttpSession session = request.getSession();
        if (session.getAttribute(LOGGED_USER_ID) == null) {
            throw new AuthenticationException("You have to be logged in!");
        }
        if (!remoteAddress.equals(session.getAttribute(LOGGED_USER_REMOTE_ADDRESS))) {
            session.invalidate();
            throw new AuthenticationException("IP mismatch!");
        }
    }
}
