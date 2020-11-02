package com.TeamL.demo;

import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Component;

@Component
public class Entity implements EntityInt {
    @Id
    public String id;
    public String entityEmail;
    public EntityRole entityRole;
    public String entityName;
    public Address address;

    public Entity(String id, String entityEmail, EntityRole entityRole, String entityName, Address address) {
        this.id = id;
        this.entityEmail = entityEmail;
        this.entityRole = entityRole;
        this.entityName = entityName;
        this.address = address;
    }

    public String getEntityEmail() {
        return entityEmail;
    }

    public void setEntityEmail(String entityEmail) {
        this.entityEmail = entityEmail;
    }

    public EntityRole getEntityRole() {
        return entityRole;
    }

    public void setEntityRole(EntityRole entityRole) {
        this.entityRole = entityRole;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEntityName() {
        return entityName;
    }

    public void setEntityName(String entityName) {
        this.entityName = entityName;
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
