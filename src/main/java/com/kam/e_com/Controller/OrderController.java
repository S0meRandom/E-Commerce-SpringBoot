package com.kam.e_com.Controller;

import com.kam.e_com.Model.AppUser;
import com.kam.e_com.Model.CartItem;
import com.kam.e_com.Model.Order;
import com.kam.e_com.Repository.CartRepository;
import com.kam.e_com.Repository.OrderRepository;
import com.kam.e_com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping
    public List<Order> createOrders(@RequestBody Order order,Principal principal){
        AppUser currentUser = userRepository.findByUsername(principal.getName()).orElseThrow();
        List<CartItem> cartItems = cartRepository.findByuser(currentUser);
        List<Order> createdOrders = new ArrayList<>();

        for(CartItem item : cartItems){
            Order newOrder = new Order();
            BigDecimal totalForThisOrder;

            newOrder.setAdress(order.getAdress());
            newOrder.setCity(order.getCity());
            newOrder.setClientCred(order.getClientCred());
            newOrder.setPostCode(order.getPostCode());
            newOrder.setStatus("PENDING");
            newOrder.setBuyer_id(currentUser.getId());

            newOrder.setQuantity(item.getQuantity());
            newOrder.setProduct(item.getProduct());
            newOrder.setProductName(item.getProduct().getName());

            totalForThisOrder = item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity()));
            newOrder.setPrice(totalForThisOrder);

            orderRepository.save(newOrder);
            createdOrders.add(newOrder);
        }
        cartRepository.deleteAll(cartItems);
        return createdOrders;




    }

}
