package com.kam.e_com.Repository;

import com.kam.e_com.Model.AppUser;
import com.kam.e_com.Model.CartItem;
import com.kam.e_com.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<CartItem,Long> {
    List<CartItem> findByuser(AppUser user);
}
