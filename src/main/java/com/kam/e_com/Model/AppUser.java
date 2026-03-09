package com.kam.e_com.Model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class AppUser {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(unique=true,nullable=false)
    private String username;

    @Column(nullable=false)
    private String password;

    public int getId(){
        return id;
    }
    public String getUsername(){
        return username;
    }
    public String getPassword(){
        return password;
    }
    public void setUsername(String newUsername){
        this.username = newUsername;

    }
    public void setPassword(String newPassword){
        this.password = newPassword;
    }


}
