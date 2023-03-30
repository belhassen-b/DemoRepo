//  Les Boucles Itératives


/**
 * Boucle Pour... (For...)
 * 
 * for(initialisation variable itération ; condition de rebouclage ; Pas incrémentation)
 * {
 *     // Instructions executée à chaque itération
 * }
 */
//let i ;
// for (let i = 1 ;i <= 10 ; i++) {
//     console.log(`La boucle for s'est executée ${i} fois`)
// }



/**
 * La Boucle Tant que... (While)
 */
// let j =11;
// while(j <= 10) {
//     console.log(`La boucle while s'est executée ${j} fois`);
//     j++;
// }



/**
 * La Boucle Faire Tant que... (Do...While...)
 */
// let k = 11;

// do {
//     console.log(`La boucle do while s'est executée ${k} fois`);
//     k++;
// }while(k <= 10)


// let jourSem = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

// // Itération du tableau par la boucle for

// for(let i = 0; i< jourSem.length; i++){
//     console.log(jourSem[i]);
//   // if(jourSem[i] == "Lundi"){
// //     if(i == 0){
// //     console.log("Bon début de semaine");
// //    }
//     if(i >= 1 && i <5){
//         console.log("Bon début de semaine");
//     }
// }

/**
 * Instructions Break... Continue...
 */



console.log("Instructions Break... Continue");

var jourSem = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

// Itération du tableau numerique par la boucle for

for (var j = 0; j < jourSem.length; j++) {
    //if (j === 0) {
    if (j >= 1 && j < 4) {
        console.log("Début de la semaine");
        continue;
    }
    console.log(jourSem[j]);
    if (j === 4)
        break;
}




//Exercice 
/*
A partir du tableau suivant :
let names =["Adam","Etienne","Sebastien","Clement","Virginie"]

1/ Grâce à une boucle for, afficher la liste des prenoms du tableau
2/ Grâce à une boucle while, afficher la liste des prenoms du tableau

*/
//  let names =["Adam","Etienne","Sebastien","Clement","Virginie"];

// console.log("Parcour du tableau avec boucle for")
// for(let i = 0; i< names.length; i++){
//     console.log(names[i]);
// }

// console.log("Parcour du tableau avec boucle while")

// let j =0;
// while(j < names.length) {
//     console.log(names[j]);
//     j++;
// }

// La boucle Pour... dans.....(For... In...)

//Parfait pour les tableaux Associatifs
//  let contact = {
//     nom : "Richard",
//     prenom : "Piere",
//     specialite : "Boucle infinie"
//  };// 

// // Exemple de boucle For .. in...
// for(let key in contact){
//     console.log(key); //  Affiche la clé du tableau
//     console.log(contact[key])//Affiche la valeurs
//     console.log(key + " : "+contact[key]); // Affcihe les pairs de clé + valeurs
// }

// La boucle For...Of...

// for(const value of names){
//      console.log(`La boucle for...of, names contient ${value}`);
// }

// Boucles Imbriquées

for(let i = 1 ; i<10; i+=2){
    console.log("i ="+i);
    // for(let j = 1; j < 5;j++){
    //     console.log("Deuxieme boucle j = "+j);
    // }
   // i++;
}