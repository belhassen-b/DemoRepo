package org.example.collections.iteratorDemo;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class IteratorDemo{

    public static void main(String[] args) {
        List<Integer> liste = new ArrayList<>();

        liste.add(2);
        liste.add(3);
        liste.add(5);
        liste.add(29);
        liste.add(214);

        System.out.println("------Iterator------");
        Iterator iter = liste.iterator();
        while (iter.hasNext()) {
            System.out.println(iter.next());
        }

        System.out.println("-------ListIterator------");
        ListIterator iter2 = liste.listIterator();

        while (iter2.hasNext()) {
            System.out.println(iter2.next());
        }
        while (iter2.hasPrevious()) {
            System.out.println(iter2.previous());
        }
    }
}
