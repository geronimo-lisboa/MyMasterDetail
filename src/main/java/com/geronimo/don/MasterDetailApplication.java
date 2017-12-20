package com.geronimo.don;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.geronimo.don.rest")
public class MasterDetailApplication {

	public static void main(String[] args) {
		SpringApplication.run(MasterDetailApplication.class, args);
	}
}
