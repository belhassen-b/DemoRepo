import Person from "./js/Person.js";
import Fleur from './js/Fleur.js'
import Chien from './js/Chien.js'

/* PERSON */



// Création d'un tableau de personnes
let persons = new Array();

let p1 = new Person("John","Martin")
persons.push(p1);
p1.Display();

let p2 =new Person("José","Garcia");
persons.push(p2);

for(let person of persons){
    person.Display();
}

/**
 * Manipulation depuis la classe EtreVivant
 */

let medor = new Chien("Médor", "Berger Allemand");
let cosmos = new Fleur("Cosmos", "Cosmos Sulphuréus");



let etreVivants = [medor, cosmos, p1, p2];

for (let etre of etreVivants) {
    console.log(`------- ${etre.nom} -------`);
    etre.Naissance();
    etre.Respiration();
    etre.Alimentation();
  //  etre.Mort();
    console.log("---------------------------")

}

console.log("Battement de coeur de Médor : " + medor.heartRate);
console.log("Photosynthese de Cosmos : " + cosmos.photosyntese);
// medor.Mort();
medor.Aboyer();