package com.TeamL.demo;

import org.springframework.data.annotation.Id;

public class Food
{
    private String name;
    private String type;
    private int amount;
    private int SKU;
    private String company;
    private String picUrl;
    @Id
    private String _ID;



    public Food()
    {
        _ID = "";
        name = "";
        type = "";
        amount = 0;
        SKU = 0;
        company = "";
        picUrl = "";
    }
    public Food(String id, String FoodName, String FoodType, int FoodAmount, int FoodSKU , String comp, String pic)
    {
        this._ID = id;
        this.name = FoodName;
        this.type = FoodType;
        this.amount = FoodAmount;
        this.SKU = FoodSKU;
        this.company = comp;
        this.picUrl = pic;
    }

    public String get_ID() {
        return _ID;
    }

    public void set_ID(String _ID) {
        this._ID = _ID;
    }

    public String getPicUrl() { return picUrl; }

    public void setPicUrl(String picUrl) { this.picUrl = picUrl; }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public void setCompany(String Comp)
    {
        this.company = Comp;
    }

    public String getCompany()
    {
        return company;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }

    public int getAmount()
    {
        return amount;
    }

    public void setAmount(int amount)
    {
        this.amount = amount;
    }

    public int getSKU()
    {
        return SKU;
    }

    public void setSKU(int SKU)
    {
        this.SKU = SKU;
    }
}