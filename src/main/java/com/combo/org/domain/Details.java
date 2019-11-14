package com.combo.org.domain;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;
@Document(collection = "Userdb")
public class Details {
    private int id;
    private String name;
    private int age;
    private String emailId;
    private String address;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Details)) return false;
        Details details = (Details) o;
        return getId() == details.getId() &&
            getAge() == details.getAge() &&
            Objects.equals(getName(), details.getName()) &&
            Objects.equals(getEmailId(), details.getEmailId()) &&
            Objects.equals(getAddress(), details.getAddress());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getAge(), getEmailId(), getAddress());
    }

    @Override
    public String toString() {
        return "Details{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", age=" + age +
            ", emailId='" + emailId + '\'' +
            ", address='" + address + '\'' +
            '}';
    }
}
