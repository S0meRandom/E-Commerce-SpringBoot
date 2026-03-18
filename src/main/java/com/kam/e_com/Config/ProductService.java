package com.kam.e_com.Config;

import com.kam.e_com.Model.Product;
import com.kam.e_com.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public List<Product> searchProducts(String query){
        if(query==null || query.trim().isEmpty()){
            return productRepository.findAll();
        }
        return productRepository.searchProducts(query);

    }
}
