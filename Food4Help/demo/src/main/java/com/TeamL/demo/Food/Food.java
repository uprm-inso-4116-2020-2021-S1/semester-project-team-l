package com.TeamL.demo.Food;


import java.util.Set;
public class Food
{
    private String name;
    private String type;
    private int amount;
    private int SKU;

    public Food()
    {
        name = "";
        type = "";
        amount = 0;
        SKU = 0;
    }
    public Food(String FoodName, String FoodType, int FoodAmount, int FoodSKU)
    {
        this.name = FoodName;
        this.type = FoodType;
        this.amount = FoodAmount;
        this.SKU = FoodSKU;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
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