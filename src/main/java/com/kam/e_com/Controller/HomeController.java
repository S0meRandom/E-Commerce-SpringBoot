package com.kam.e_com.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "redirect:/index/index.html";
    }


    @GetMapping("/index.html")
    public String oldIndex() {
        return "redirect:/index/index.html"; 
    }
}
