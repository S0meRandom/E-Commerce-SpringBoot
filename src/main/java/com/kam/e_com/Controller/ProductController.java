package com.kam.e_com.Controller;

import com.kam.e_com.Config.ProductService;
import com.kam.e_com.Model.AppUser;
import com.kam.e_com.Model.Product;
import com.kam.e_com.Repository.ProductRepository;
import com.kam.e_com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }


    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id ){

        return productRepository.findById(id).orElse(null);
    }

    @GetMapping("/seller/{user_id}")
    public List<Product> getProductsBySeller(@PathVariable int user_id){
        List<Product> sellerProducts = productRepository.findBySeller_Id(user_id);

        if(sellerProducts.isEmpty()){
            return null;
        }
        return sellerProducts;
    }


    @PostMapping
    public Product addProduct(Principal principal,
                              @RequestParam("name") String name,
                              @RequestParam("price") Double price,
                              @RequestParam("description") String description,
                              @RequestParam("stock_quantity") int stock_quantity,
                              @RequestParam(value="file",required=false) MultipartFile file){
        String username = principal.getName();
        AppUser currentUser = userRepository.findByUsername(username).orElseThrow(()->
                new RuntimeException("Nie znaleziono użytkownika"));
        Product newProduct = new Product();
        newProduct.setSeller(currentUser);
        newProduct.setPrice(BigDecimal.valueOf(price));
        newProduct.setName(name);
        newProduct.setDescription(description);
        newProduct.setStock_quantity(stock_quantity);

        if(file != null && !file.isEmpty()){
            try{
                String uploadDir = "imagesFolder/";
                Path uploadPath = Paths.get(uploadDir);

                if(!Files.exists(uploadPath)){
                    Files.createDirectories(uploadPath);
                }
                String originalFilename = file.getOriginalFilename();
                String fileExtension = "";

                if(originalFilename != null && originalFilename.contains(".")){
                    fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
                }
                String uniqueFilename = UUID.randomUUID().toString() + fileExtension;
                Path filePath = uploadPath.resolve(uniqueFilename);
                Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                newProduct.setImageUrl("imagesFolder/" + uniqueFilename);

            }catch(IOException io){
                throw new RuntimeException("Nie udało się zapisać pliku" + io.getMessage());
            }

        }


        return productRepository.save(newProduct);
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

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String query){
        return productRepository.searchProducts(query);

    }


}
