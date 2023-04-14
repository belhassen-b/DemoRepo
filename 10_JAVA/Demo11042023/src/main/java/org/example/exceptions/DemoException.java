package org.example.exceptions;

import java.util.InputMismatchException;
import java.util.Scanner;

public class DemoException {

    public static void main() {
        System.out.println("*******Division********");
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.println("Donner le premier nombre");
            Integer a = scanner.nextInt();
            System.out.println("Donner le deuxieme nombre");
            Integer b = scanner.nextInt();
            Double result = (double) (a/b);
            System.out.println("Le resultat est: " + result);

        }
        catch (ArithmeticException e) {
            System.out.println("Exception arithmetique: division par 0");
            DemoException.main();
        }
//        catch (Exception e) {
////            e.printStackTrace();
//            System.out.println("Erreur: " + e.getMessage());
//            DemoException.main();
//        }
//        catch (InputMismatchException e) {
//            System.out.println("Exception input mismatch: " + e.getMessage());
//            DemoException.main();
//        }
        catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
            DemoException.main();
        }



    }
}
