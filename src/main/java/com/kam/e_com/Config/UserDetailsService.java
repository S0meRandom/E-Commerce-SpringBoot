package com.kam.e_com.Config;

import com.kam.e_com.Model.AppUser;
import com.kam.e_com.Repository.UserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    private final UserRepository userRepository;
    public UserDetailsService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username){
        AppUser user = userRepository.findByUsername(username).orElseThrow(()->
                new UsernameNotFoundException("Użytkownik nie istnieje"));

        return User.withUsername(user.getUsername()).password(user.getPassword()).roles("USER").build();
    }
}
