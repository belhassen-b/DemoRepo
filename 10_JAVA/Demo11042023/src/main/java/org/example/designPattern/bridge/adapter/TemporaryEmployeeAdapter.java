package org.example.designPattern.bridge.adapter;

public class TemporaryEmployeeAdapter implements Employee {

    private TemporaryEmployee temporaryEmployee;

    public TemporaryEmployeeAdapter(TemporaryEmployee temporaryEmployee) {
        this.temporaryEmployee = temporaryEmployee;
    }

    @Override
    public String getName() {
        return temporaryEmployee.getName();
    }

    @Override
    public double getSalary() {
        return temporaryEmployee.getDailyRate()*30;
    }

    @Override
    public String getPosition() {
        return temporaryEmployee.getPosition();
    }
}

