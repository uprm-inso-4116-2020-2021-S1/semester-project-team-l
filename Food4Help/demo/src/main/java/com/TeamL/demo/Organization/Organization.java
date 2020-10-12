package com.TeamL.demo.Organization;

import com.TeamL.demo.Company.Address;
import com.TeamL.demo.Company.EntityInt;
import com.TeamL.demo.Food.Food;

public class Organization implements EntityInt {
    public Long id;
    public String userName;
    public String password;
    public String orgName;
    public Address address;

    public Organization(Long id, String userName, String password, String orgName, Address address) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.orgName = orgName;
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

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName;
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
