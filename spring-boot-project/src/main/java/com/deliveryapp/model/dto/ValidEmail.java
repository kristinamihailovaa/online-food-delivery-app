package com.deliveryapp.model.dto;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;
@Documented
@Constraint(validatedBy = EmailValidator.class)
@Target({FIELD})
@Retention(RUNTIME)
public @interface ValidEmail {
    String message() default "Invalid email format!";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}