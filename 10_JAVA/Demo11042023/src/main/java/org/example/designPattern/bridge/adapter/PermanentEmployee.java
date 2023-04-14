package org.example.designPattern.bridge.adapter;

public class PermanentEmployee implements Employee {

    private String name;
    private double salary;
    private String position;

    public PermanentEmployee(String name, double salary, String position) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public double getSalary() {
        return salary;
    }

    @Override
    public String getPosition() {
        return position;
    }
}

