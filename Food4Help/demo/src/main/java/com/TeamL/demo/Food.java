package com.TeamL.demo;

public class Food
{
    private String name;
    private String type;
    private int amount;
    private int SKU;
    private Company company;

    public Food()
    {
        name = "";
        type = "";
        amount = 0;
        SKU = 0;
        company =  new Company();
    }
    public Food(String FoodName, String FoodType, int FoodAmount, int FoodSKU , Company comp)
    {
        this.name = FoodName;
        this.type = FoodType;
        this.amount = FoodAmount;
        this.SKU = FoodSKU;
        this.company = comp;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public void setCompany(Company Comp)
    {
        this.company = Comp;
    }

    public Company getCompany()
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