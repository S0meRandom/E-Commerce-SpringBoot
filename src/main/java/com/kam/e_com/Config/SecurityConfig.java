package com.kam.e_com.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Wyłączamy ochronę CSRF (ważne przy testowaniu POST)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Pozwól na absolutnie wszystko (tymczasowo!)
                );
        return http.build();
    }
}
