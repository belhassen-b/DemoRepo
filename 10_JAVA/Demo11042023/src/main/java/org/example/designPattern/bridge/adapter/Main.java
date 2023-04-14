package org.example.designPattern.bridge.adapter;

public class Main {
    public static void main(String[] args) {
        Employee PermanentEmployee = new PermanentEmployee("John", 10000, "Manager");
        System.out.println("l'employé : " + PermanentEmployee.getName() + " a un salaire de : " + PermanentEmployee.getSalary() + " et un poste de :" + PermanentEmployee.getPosition() );;


        Employee TemporaryEmployeeAdapter = new TemporaryEmployeeAdapter(new TemporaryEmployee("Jane", 6000, "CEO"));
        System.out.println("l'employé : " + TemporaryEmployeeAdapter.getName() + " a un salaire de : " + TemporaryEmployeeAdapter.getSalary() + " et un poste de :" + TemporaryEmployeeAdapter.getPosition() );;

    }
}
