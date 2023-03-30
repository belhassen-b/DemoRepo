import { Contact } from "./classes/contact.js";


// console.warn("Démo THIS");

// const car = {
//     model: "Fiesta",
//     manufacturer: "Ford",
//     fullName: function () {
//         return `${this.manufacturer} ${this.model}`
//     }
// }

// // console.warn("This dans une fonction (fonction ())");
// // console.log(car.fullName());


// // const carArrow = {
// //     model: "Fiesta",
// //     manufacturer: "Ford",
// //     fullName: () => {
// //         return `${this.manufacturer} ${this.model}`
// //     }
// // }

// // console.warn("This dans une fonction Arrow (() => )");
// // console.log(carArrow.fullName());

// console.warn("THIS avec les élements du DOM");

// const link = document.querySelector("#link");
// link.addEventListener('click', () => {
//     // this === window
//     console.warn("This dans une fonction Arrow (() => )");
//     console.log(this);

// })

// link.addEventListener('click', function () {
//     // this === link
//     console.warn("This dans une fonction (fonction ())");
//     console.log(this);
// })

// console.warn("Déstructuration d'objets");
// const person = {
//     firstName: 'Tom',
//     lastName: 'Cruise',
//     actor: true,
//     age: 54
// }

// const { firstName, age } = person //name: Tom, age: 54
// console.log(firstName);

// //const { firstName: names, age } = person //name: Tom, age: 54

// //console.log(names);
// console.log(age);

// console.warn("Ma premiére Class");

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     hello() {
//         return "Salut je m'appelle " + this.name + '.'

//     }

// }

// const pierre = new Person("Pierre");
// const cassandre = new Person("Cassandre");

// console.log(pierre.hello());
// console.log(cassandre.hello());


// let monContact = new Contact();
// monContact.nom = "Alexandre";

// monContact.afficher();


// console.warn("Héritage");

// class Programmer extends Person {
//     hello() {
//         return super.hello() + ' Je suis un joueur.'
//     }
// }

// const toto = new Programmer("Toto");
// console.log(toto.hello());

console.warn("getters et setters");

let monContactGetSet = new Contact();

console.log(monContactGetSet.name)

monContactGetSet.name = "Tata"

console.log(monContactGetSet.name)




