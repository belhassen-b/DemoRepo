console.log("Mon main 2 js");

const nbMax = 128;
console.log("nbMax vaut : "+nbMax / 2);
//nbMax = 129; // Provoque une erreur => Assignement constant variable

const fruits = ["pomme"];
//fruits = ["Abricots","poire"]; // Provoque une erreur => Assignement constant variable

fruits.push("Abricots","Poire"); // Ici const garantit la structure de l'objet (ici un tableau)
console.table(fruits);


/*
Les nouvelles méthodes apportées par l'ES6

.forEach
.map()
.find()
.filter()

*/

console.log("-----------------Les nouvelles méthodes apportées par l'ES6----------------- ");

const vegetable = [
    {
        code : 1,
        name : "Carotte",
        price : 1.99
    },
    {
        code : 2,
        name : "Poivron Vert",
        price : 4.99
    },
    {
        code : 3,
        name : "Poivron Rouge",
        price : 4.99
    },
    {
        code : 4,
        name : "Haricot vert",
        price : 3.99
    },
    {
        code : 5,
        name : "Courgette",
        price : 2.5
    },
    {
        code : 6,
        name : "Poivron Jaune",
        price : 4.99
    }
]

console.table(vegetable);

//.Foreach
console.log("-----------------Parcours du tableau Vegetables avec .foreach(vegetable)----------------- ");
// Proche du for...of
vegetable.forEach(function (vegetable) {
    console.log(vegetable);
    console.log(vegetable.name);
})

console.log("-----------------Parcours du tableau Vegetables avec .foreach(vegetable,index)----------------- ");
vegetable.forEach(function (vegetable, index) {
    console.log((index+1)+ " : "+vegetable.name);
    
})

//.map()
console.log("-----------------Parcours du tableau Vegetables avec .map(function(){})----------------- ");

const listVegetables = vegetable.map(function(vegetable){
    return vegetable.name;
});
console.table(listVegetables); // Map retourne un nouveau tableau (indexé....)

//.find() => Retourne le premier élément
console.log("-----------------Parcours du tableau Vegetables avec .find('Poivron')----------------- ");

const poivron = vegetable.find(function(vegetable){
    return vegetable.name.includes("Poivron");
})

console.log(poivron);

// .filter() => retourne un tableaux contenant les n occurences
const poivrons = vegetable.filter(function (vegetable) {
    return (!vegetable.name.includes("Poivron"));
})

console.table(poivrons);

// Destructuring

console.log("-----------------Destructuring----------------- ");

const tabNum = [1,2,3];
console.table(tabNum);

// //En ES5
// var a = tabNum[0];
// var b = tabNum[1];



// En ES6 avec le destructuring
const [a,b] =tabNum;
console.log(a);
console.log(b);

console.table(tabNum);

//Autre exemple avec un tableau associatif

const user = {
    firstname : "Jean",
    lastname : "Dupond",
    age : 35,
    active : false
} 

// En ES5
// var firstname = user.firstname;
// var lastname = user.lastname;

// En ES6 
const {firstname, lastname, ...userRest} = user;

console.log(firstname);
console.log(lastname);
console.log(userRest);

// Avec des fonctions
// function getFullName(user){
//     return `${user.firstname} ${user.lastname}`
// }

 function getFullName({firstname,lastname}){
     return `${firstname} ${lastname}`
 }

console.log(getFullName(user));


console.log("-----------------rest Operator----------------- ");

//let haricot = vegetable[3]; // crée une réference au tableau n'est pas une vrai copie

let haricot = {...vegetable[3]}; // une vraie copie car on vient de recréer le tableau associatif (objet) et donc dans ce cas pas de référence

console.log(haricot);
console.log(vegetable[3]);
console.table(vegetable);

haricot.price = 2.99;

console.log(haricot);
console.log(vegetable[3]); // haricot a modifié le tableau (dans mon premier exemple) car c'est une réference au tableau
console.table(vegetable);



const tabNum2 = [1,2,3];

const [d,...e] = tabNum2;

console.log(d);
console.log(e);


