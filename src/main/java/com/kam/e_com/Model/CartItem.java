package com.kam.e_com.Model;

import jakarta.persistence.*;


@Entity
@Table(name = "/cartItems")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long Id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private AppUser user;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int quantity = 1;

    public AppUser getUser(){
        return user;

    }
    public void setUser(AppUser nUser){
        this.user = nUser;
    }
    public Product getProduct(){
        return product;
    }
    public void setProduct(Product nProduct){
        this.product = nProduct;
    }
    public Long getId(){
        return Id;
    }
    public int getQuantity(){
        return quantity;
    }



}
