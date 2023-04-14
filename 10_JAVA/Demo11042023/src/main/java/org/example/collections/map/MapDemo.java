package org.example.collections.map;

import org.example.collections.entity.User;

import java.util.*;

public class MapDemo {
    public static void main() {


        Map<Integer, String> map = new HashMap<>();

        map.put(2, "Maison");
        map.put(3, "Chalet");
        map.put(5, "Appartement");
        map.put(6, "Caravane");

        System.out.println("get un element de la map: " + map.get(6));

        System.out.println("Iteration dans la map pour le clé:");

        for (Integer key : map.keySet()) {
            System.out.println("key: " + key + " value: " + map.get(key));
        }
        System.out.println("--------------------");
        System.out.println(" autre méthode pour itérer dans la map: ");
        for(Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println("key: " + entry.getKey() + " value: " + entry.getValue());
        }

        Map<User, Product> userProductMap = new HashMap<>();

        User user = new User();
        user.setFirstName("Eddy");
        user.setLastName("Mitchell");

        Product product = new Product();
        userProductMap.put(user, product);
        System.out.println("get product by user: " + userProductMap.get(user));


        User user1 = new User("Michel", "Jonas", "1234", "michel@gmail.com");
        User user2 = new User("Jean-Louis", "Aubert", "1234", "jlaubert@gmail.com");
        User user3 = new User("Alain", "Souchon", "1234", "alsouchon@gmail.com");

        List<User> users = new ArrayList<>();
        users.addAll(Arrays.asList(user1, user2, user3));
        List<Product> products = new ArrayList<>();

        Map<Integer, List<Product>> map2 = new HashMap<>();

        for (int i = 0; i < users.size(); i++) {
            products.add(new Product());
            map2.put(users.get(i).getId(), products);
        }

for (Map.Entry<Integer, List<Product>> entry : map2.entrySet()) {
            System.out.println("key: " + entry.getKey() + " value: " + entry.getValue());
        }



    }
}