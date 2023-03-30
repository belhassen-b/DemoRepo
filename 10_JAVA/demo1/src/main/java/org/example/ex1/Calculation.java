package org.example.ex1;

import java.util.Scanner;

public class Calculation {
    public static void getCalcul() {
        int a;
        System.out.println("**************** Calcul Carré ****************");
        System.out.println("Merci de saisir un nombre entier : ");
        Scanner sc = new Scanner(System.in);
        a = sc.nextInt();
        System.out.println("Le nombre saisi est : " + a);
        System.out.println("Le carré de ce nombre est : " + a * a);
    }
}
