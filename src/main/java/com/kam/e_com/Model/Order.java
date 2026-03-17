package com.kam.e_com.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Product product;

    @Column(name="productName",nullable = false)
    private String productName;

    @Column(nullable=false, name="ClientInfo")
    private String clientCred;

    @Column(nullable=false, name="PostCode")
    private String postCode;

    @Column(nullable=false, name="destinationCity")
    private String city;

    @Column(nullable=false, name="adress")
    private String adress;

    @Column(nullable = false, name="quantity")
    private int quantity;

    @Column(nullable = false, name="status")
    private String status;

    @Column(nullable=false, name="totalPrice")
    private BigDecimal price;

    private long buyerId;


    public Long getId() {
        return id;
    }

    public Product getProduct(){
        return product;
    }
    public void setProduct(Product newProduct){
        this.product = newProduct;
    }
    public String getClientCred(){
        return clientCred;
    }
    public void setClientCred(String newClientCred){
        this.clientCred = newClientCred;
    }
    public String getProductName(){
        return productName;
    }
    public void setProductName(String newProductName){
        this.productName = newProductName;
    }
    public String getPostCode(){
        return postCode;
    }
    public void setPostCode(String newPostCode){
        this.postCode = newPostCode;
    }
    public String getCity(){
        return city;
    }
    public void setCity(String newCity){
        this.city = newCity;
    }
    public String getAdress(){
        return adress;
    }
    public void setAdress(String newAdress){
        this.adress = newAdress;
    }
    public int getQuantity(){
        return quantity;
    }
    public void setQuantity(int newQuantity){
        this.quantity = newQuantity;
    }
    public String getStatus(){
        return status;
    }
    public void setStatus(String newStatus){
        this.status = newStatus;
    }
    public BigDecimal getPrice(){
        return price;
    }
    public void setPrice(BigDecimal newPrice){
        this.price = newPrice;
    }
    public long getBuyer_id(){
        return buyerId;
    }
    public void setBuyer_id(int newBuyer_id){
        this.buyerId = newBuyer_id;
    }
}
