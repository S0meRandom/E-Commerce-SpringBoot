package com.kam.e_com.Repository;

import com.kam.e_com.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findByName(Long categoryId);
}
