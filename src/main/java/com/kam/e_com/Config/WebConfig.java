package com.kam.e_com.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        Path uploadDir = Paths.get("imagesFolder");
        String uploadPath = uploadDir.toFile().getAbsolutePath();

        String resourcePath = uploadDir.toAbsolutePath().toUri().toString();

        registry.addResourceHandler("/imagesFolder/**")
                .addResourceLocations(resourcePath);
    }
}
