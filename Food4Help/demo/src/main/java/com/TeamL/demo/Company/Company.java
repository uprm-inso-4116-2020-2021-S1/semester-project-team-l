package com.TeamL.demo.Company;

import java.util.List;

public class Company implements CompanyInt {

    public Long id;
    public String userName;
    public String password;
    public String companyName;
    public List<Address> address;

    public Company(Long id, String userName, String password, String companyName, List<Address> address) {
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

    public List<Address> getAddress() {
        return address;
    }

    public void setAddress(List<Address> address) {
        this.address = address;
    }

    @Override
    public void setCompanyName() {

    }

    @Override
    public void addFood(String food) {

    }

    @Override
    public void removeFood(String food) {

    }
}
