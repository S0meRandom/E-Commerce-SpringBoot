package com.kam.e_com.Repository;

import com.kam.e_com.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {
    List<Order> findByid(Long id );
}
