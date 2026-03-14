package com.kam.e_com.Controller;

import com.kam.e_com.Model.AppUser;
import com.kam.e_com.Model.CartItem;
import com.kam.e_com.Model.Product;
import com.kam.e_com.Repository.CartRepository;
import com.kam.e_com.Repository.ProductRepository;
import com.kam.e_com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;


    @PostMapping("/add")
    public void addProductToCart(@RequestParam("productId") Long Id, Principal principal){
        Product product = productRepository.findById(Id).orElseThrow();
        AppUser user = userRepository.findByUsername(principal.getName()).orElseThrow();

        CartItem newItem = new CartItem();
        newItem.setProduct(product);
        newItem.setUser(user);

        cartRepository.save(newItem);


    }
    @GetMapping()
    public List<CartItem> getCartProduct(Principal principal){
        AppUser user = userRepository.findByUsername(principal.getName()).orElseThrow();
        return cartRepository.findByuser(user);
}}
