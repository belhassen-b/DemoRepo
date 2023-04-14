package org.example.designPattern.bridge.adapter;

public class TemporaryEmployee {

    private String name;
    private double dailyRate;
    private String position;


    public TemporaryEmployee(String name, double dailyRate, String position) {
        this.name = name;
        this.dailyRate = dailyRate;
        this.position = position;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getDailyRate() {
        return dailyRate;
    }

    public void setDailyRate(double dailyRate) {
        this.dailyRate = dailyRate;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
