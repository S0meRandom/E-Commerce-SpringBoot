package com.kam.e_com.Controller;

import com.kam.e_com.Config.UserDetailsService;
import com.kam.e_com.Model.AppUser;
import com.kam.e_com.Repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository,PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody AppUser user){
        if(userRepository.findByUsername(user.getUsername()).isPresent()){
            return ResponseEntity.badRequest().body("Użytkownik już istnieje");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);
        return ResponseEntity.ok("Zarejestrowano pomyślnie");

    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(Principal principal){
        if(principal==null){
            return ResponseEntity.badRequest().build();
        }
        AppUser user = userRepository.findByUsername(principal.getName()).orElse(null);
        return ResponseEntity.ok(user);

    }

}
