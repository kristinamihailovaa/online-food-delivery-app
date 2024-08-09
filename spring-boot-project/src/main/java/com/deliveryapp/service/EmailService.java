package com.deliveryapp.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class EmailService {
    private JavaMailSender mailSender;

    //    private SimpleMailMessage constructResetTokenEmail(
//            String contextPath, Locale locale, String token, User user) {
//        String url = contextPath + "/user/changePassword?token=" + token;
//        String message = messages.getMessage("message.resetPassword",
//                null, locale);
//        return constructEmail("Reset Password", message + " \r\n" + url, user);
//    }
    public void sendPasswordResetEmail(String to, String token) throws MessagingException {
        String subject = "Password Reset Request";
        String url = "http://localhost:8080/auth/reset-password?token=" + token;
        String message = "To reset your password, click the link below:\n" + url;

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        //на 27 ред ми е грешката
        
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(message, true);

        mailSender.send(mimeMessage);
    }
}
