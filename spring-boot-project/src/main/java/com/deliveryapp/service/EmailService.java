package com.deliveryapp.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendPasswordResetEmail(String to, String token) throws MessagingException {
        String subject = "Password Reset Request";
        String url = "http://localhost:8080/reset-password?token=" + token;
        String message = "To reset your password, click the link below:\n" + url;

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(message, true);

        javaMailSender.send(mimeMessage);
    }
}
