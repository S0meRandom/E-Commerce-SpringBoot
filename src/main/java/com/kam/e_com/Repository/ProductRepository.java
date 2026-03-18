package com.kam.e_com.Repository;

import com.kam.e_com.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findByName(Long categoryId);
    List<Product> findBySeller_Id(int userId);

    @Query(value = "SELECT * FROM products " +
            "WHERE to_tsvector('english', name || ' ' || description) @@ websearch_to_tsquery('english', :query)",
            nativeQuery = true)
    List<Product> searchProducts(@Param("query")String query);


}
