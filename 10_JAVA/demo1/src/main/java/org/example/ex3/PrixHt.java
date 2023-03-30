package org.example.ex3;

import java.util.Scanner;

public class PrixHt {
    public static void prixht() {
        double prixArticle;
        int quantite;
        double tva;
        double prixTtc;
        System.out.println("***********Calcul TVA***********");
        System.out.println("Saisir le prix HT : ");
        Scanner sc = new Scanner(System.in);
        prixArticle = sc.nextDouble();
        System.out.println("Saisir la quantité : ");
        quantite = sc.nextInt();
        System.out.println("Saisir la TVA : ");
        tva = sc.nextDouble();
        prixTtc = (prixArticle * quantite) * (1 + tva / 100);
        System.out.println("Le prix TTC est : " + prixTtc);
    }


}
