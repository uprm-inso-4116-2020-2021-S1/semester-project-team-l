package com.TeamL.demo.Company;

import com.TeamL.demo.Food.Food;

import java.util.List;

public class Company implements CompanyInt {

    public Long id;
    public String userName;
    public String password;
    public String companyName;
    public Address address;

    public Company(Long id, String userName, String password, String companyName, Address address) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.companyName = companyName;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }


    @Override
    public void message() {

    }

    @Override
    public void addFood(Food food) {

    }

    @Override
    public void removeFood(Food food) {

    }
}
