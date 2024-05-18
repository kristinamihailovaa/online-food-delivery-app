package com.deliveryapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
public class SpringBootProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootProjectApplication.class, args);
	}

}
