package com.kam.e_com.Controller;

import com.kam.e_com.Model.Product;
import com.kam.e_com.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id ){
        return productRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id){
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
        }
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable long id, @RequestBody Product productDetails){
        Product product = productRepository.findById(id).orElse(null);
        if (product != null){
            product.setName(productDetails.getName());
            product.setStock_quantity(productDetails.getStock_quantity());
            product.setDescription(productDetails.getDescription());
            product.setPrice(productDetails.getPrice());
            return productRepository.save(product);
        }
        return null;

    }


}
