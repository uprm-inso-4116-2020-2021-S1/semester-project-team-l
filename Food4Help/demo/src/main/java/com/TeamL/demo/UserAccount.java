package com.TeamL.demo;

public class UserAccount
{
    public static final String GENDER_MALE = "M";
    public static final String GENDER_FEMALE = "F";

    private String id;
    private String userName;
    private String password;
    private String gender;
    private int age;

    public UserAccount(String userName,String password, String gender, int age)
    {
        this.userName = userName;
        this.password = password;
        this.gender = gender;
        this.age = age;
    }

    public String getId() {
        return id;
    }
    public String getUserName() {
        return userName;
    }
    public void setUsername(String userName) {
        this.userName = userName;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString()
    {
        return userName;
    }
}
