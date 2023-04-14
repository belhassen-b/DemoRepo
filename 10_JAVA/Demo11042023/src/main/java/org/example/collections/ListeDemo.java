package org.example.collections;


import org.example.collections.emuns.Order;
import org.example.collections.entity.RandomPerson;
import org.example.collections.tools.PersoRandomComparator;


import java.util.*;

import static org.example.collections.entity.RandomPerson.randomPerson;

public class ListeDemo {
   public static List<RandomPerson> listeDemo = new ArrayList<>();
    public static List<RandomPerson> listeDemo2 = new ArrayList<>();
    public static List<RandomPerson> listeDemo3 = new ArrayList<>();
    public static void main(String[] args) {
        List<String> liste  = new ArrayList<>();
        liste.add("Titi");
        liste.add("Toto");
        liste.add("Tata");

        String prenom1 = liste.get(0);
        String prenom2 = liste.get(1);
        Object obj = liste.get(2);

        System.out.println(liste);
        System.out.println(prenom1);
        System.out.println(prenom2);
        System.out.println(obj);

        List<Integer> liste2 = new ArrayList<>(Arrays.asList(2,3,4,5,800,76,899,910,121));
        Integer min = Collections.min(liste2);
        Integer max = Collections.max(liste2);
        System.out.println("Min: " + min);
        System.out.println("Max: " + max);

        for (int i = 0 ; i< liste2.size() ; i++) {
            System.out.println(liste2.get(i));
        }

        for (Integer i : liste2) {
            System.out.println("Le nombre est :" + i);
        }

        List<Integer> liste3 = new ArrayList<>(Arrays.asList(25, 70 ,1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000));
        liste2.addAll(liste3);


        liste2.add(999);
        System.out.println(liste2);



        RandomPerson.addData(10, listeDemo);
        RandomPerson.affichePerson(listeDemo);

        randomPerson = new RandomPerson();
        randomPerson.firstName = "Toto";
        listeDemo.add(2, randomPerson);
        RandomPerson randomPerson1 = new RandomPerson();
        randomPerson1.firstName = "Titi";

        System.out.println("Remplacement de l'élément 2 par Toto");
        listeDemo.add(listeDemo.indexOf(randomPerson), randomPerson1);
        randomPerson.affichePerson(listeDemo);

        System.out.println("Suppression de l'élément 2");
        listeDemo.remove(randomPerson1);
        listeDemo.remove(2);

        System.out.println("Ajoute listeDemo dans listeDemo2");
        RandomPerson.addData(10, listeDemo2);
        RandomPerson.affichePerson(listeDemo2);
        listeDemo.addAll(listeDemo2);

        System.out.println("-------------Contains-------------");
        System.out.println(" Est ce que la liste listeDemo contient listeDemo2 ? " + listeDemo.contains(listeDemo2));

        listeDemo.remove(9);

        System.out.println(" Est ce que la liste listeDemo contient listeDemo2 ? " + listeDemo.contains(listeDemo2));

        System.out.println("-------------SubList-------------");
        System.out.println("Sous liste de listeDemo de l'index 3 à 9 :");
        listeDemo3 = listeDemo.subList(3, 9);
        RandomPerson.affichePerson(listeDemo3);

        triOrderRandomPerson(Order.FIRSTNAME, listeDemo);
        System.out.println("Tri par prénom");
        RandomPerson.affichePerson(listeDemo);
    }
    public static void triOrderRandomPerson(Order order, List<RandomPerson> liste) {
        PersoRandomComparator persoRandomComparator = new PersoRandomComparator();
        persoRandomComparator.setOrder(order);
        Collections.sort(liste, persoRandomComparator);
    }

}
