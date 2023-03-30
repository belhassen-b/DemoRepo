
// Fonctions Natives

/*
alert("coucou");

let prenom = prompt("Quel est votre prénom ?");

*/


// fonctions non-natives (user)

// Fonction sans parametres et sans retour
function hello(){
    console.log("Hello World");
}

//Appel de la fonction
hello();

// Fonction avec parametres et sans retour
function helloParams(firstname = "Théo"){
    console.log(`Hello ${firstname}`);
}

//Appel de la fonction
helloParams("Pierre");
helloParams();


var coucou = "Bonjour var";
let coucou2 = "Bonjour let"

// Fonction avec parametres et avec retour
function helloReturn(firstname = "Jean"){
    let chaine = `${coucou2} ${firstname}`;
    // retourne la variable
    return chaine;
}

//Appel de la fonction
let message = helloReturn();
console.log(message);
console.log(helloReturn());
//console.log(chaine); //erreur

// Autre facon de declarer une fonction

const testmajority = function (birthYear) {
    let age = (2023 - birthYear);
    if (age >= 18) {
        console.log("La personne est majeur !");
    }else {
        console.log("La personne n'est pas majeur !");
    }
    return age;
}

const firstPersonAge = testmajority(1987);
console.log(firstPersonAge); // 36
const secondPersonAge = testmajority(2009);
console.log(secondPersonAge); // 14

// Arrow Function

// Sans paramétres
let test = function() {
    return "Toto";
}

test = () => {  // utilisation du fat arrow =>
    return "Toto";
}

// Simplification seulement si la fonction ne fait qu'un return
test = () => "Toto";
console.log(test());

// Avec un objet
let legume = {
    code :3,
    name : "poivron rouge",
    price : 4.99
}

// Crée une fonction a qui on passe en parametres un objet et qui nous renvoie son name :
let test2 = function(vegetable) {
    return vegetable.name;
}

test2 = (vegetable) => {
    return vegetable.name;
}

// Simplification seulement si la fonction ne fait qu'un return
test2 = (vegetable) => vegetable.name;


console.log(test2(legume));

//Fonction avec plusieurs parametres

let test3 = (nom,prenom) => {
    return `Bonjour ${nom} ${prenom}`;
}

console.log(test3("Théo","Dupont"));

let tabPerson = ["Pierre","Hasard"];

console.log(test3(tabPerson[0],tabPerson[1]));

console.log(...tabPerson);

console.log(test3(...tabPerson));

let personne = {
    nom : "Théo",
    prenom : "Dupont2"
}

console.log(test3(personne.nom,personne.prenom));



 // Valeurs par défaut pour les paramètres d'une fonction

function Carre(nb = 10) {
    return nb * nb;
}

console.log(Carre(5)); // 25
console.log("Default params : " + Carre()); // 100

