package com.kam.e_com.Model;


import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(name="stock_quantity",nullable = false)
    private Integer stock_quantity;

    @Column(name="image_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name="user_id")
    private AppUser seller;

    public String getName() {
        return name;
    }

    public Integer getStock_quantity() {
        return stock_quantity;
    }

    public String getImageUrl() {

        return imageUrl;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setImageUrl(String newImageUrl) {
        this.imageUrl = newImageUrl;
    }

    public void setStock_quantity(Integer stock_quantity) {
        this.stock_quantity = stock_quantity;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setName(String name) {
        this.name = name;
    }
    public AppUser getSeller(){
        return seller;
    }
    public void setSeller(AppUser currentSeller){
        this.seller = currentSeller;
    }

}
