package org.example.collections.entity;

import net.datafaker.Faker;

import java.util.List;

public class RandomPerson {
    public static RandomPerson randomPerson;
    public String firstName;
    public String lastName;
    public String favoriteMusiqueGenre;
    public String favoriteFood;
    public String streetAdress;
    public String city;
    public String country;

    public RandomPerson() {

    }

    @Override
    public String toString() {
        return "RandomPerson{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", favoriteMusiqueGenre='" + favoriteMusiqueGenre + '\'' +
                ", favoriteFood='" + favoriteFood + '\'' +
                ", streetAdress='" + streetAdress + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                '}';
    }


    public static void addData(int taille, List<RandomPerson> listePerson) {

        for (int i = 0; i < taille; i++) {

            Faker randomData = new Faker();

            RandomPerson randomPerson = new RandomPerson();

            randomPerson.firstName = randomData.name().firstName();

            randomPerson.lastName = randomData.name().lastName();

            randomPerson.favoriteMusiqueGenre = randomData.music().genre();

            randomPerson.favoriteFood = randomData.food().dish();

            randomPerson.streetAdress = randomData.address().streetAddress();

            randomPerson.city = randomData.address().city();

            randomPerson.country = randomData.address().country();

            listePerson.add(randomPerson);

        }
        }
    public static void affichePerson(List<RandomPerson>liste){
        for (RandomPerson r : liste){
            System.out.println();
            System.out.println(r);
            System.out.println();
            System.out.println( "  ------ ----- ***** ----- -------");
        }
    }

}
