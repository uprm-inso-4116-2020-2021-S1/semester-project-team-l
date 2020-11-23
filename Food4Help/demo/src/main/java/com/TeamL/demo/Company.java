package com.TeamL.demo;

import org.springframework.data.annotation.Id;

public class Company
{
    @Id
    private String id;
    private String name;
    private String picUrl;
    private int score;
    private Address address;


    public Company()
    {
        name = "";
        picUrl = "";
        score = 0;
        address = new Address();
    }

    public Company(String id, String name, String pic, int score, Address address){
        this.id = id;
        this.name = name;
        this.address = address;
        this.picUrl = pic;
        this.score = score;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
