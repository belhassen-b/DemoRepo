package org.example.collections.linkedListDemo;

import org.example.collections.entity.RandomPerson;

import java.util.LinkedList;

public class LinkedListDemo {
    public static LinkedList<RandomPerson> linkedList = new LinkedList<>();

    public static void main() {
    System.out.println("lINKED lIST DEMO");
    RandomPerson.addData(5, linkedList);
    RandomPerson.affichePerson(linkedList);

    RandomPerson randomPerson = new RandomPerson();
    randomPerson.firstName = "Jean";

    linkedList.addFirst(randomPerson);
    RandomPerson.affichePerson(linkedList);

    RandomPerson randomPerson2 = new RandomPerson();
    randomPerson2 = randomPerson;

    linkedList.addFirst(randomPerson2);
RandomPerson.affichePerson(linkedList);

linkedList.removeFirstOccurrence(randomPerson2);



        System.out.println("Le premier élément de la liste est: " + linkedList.getFirst());
        System.out.println("Le dernier élément de la liste est: " + linkedList.getLast());


    }
}
