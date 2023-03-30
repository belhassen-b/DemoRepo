// Commentaire sur une ligne

/*
    Commentaire multlignes
*/

/**
 * Interragir avec la console et variables
 */


// Affichage dans la console
console.log("Hello World depuis mon main js")

// maVariable = "ma premiere variable modifiée"  // Hoisting (remontée de la déclaration de la variable)


// Déclarer une variable (en ES5)
// var maVariable;


// Déclarer une variable (en ES6)
// let maSecondeVariable = "ceci est ma seconde variable";

// const maTroisiemeVariable = "ceci est ma troisieme variable";

// // maTroisiemeVariable = "ma troisieme variable modifiée"

// Affichage d'une valeur dans la console
// console.log(maVariable);

// console.log(maSecondeVariable);

// console.log(maTroisiemeVariable);





let nb = 42;

let bool = true;

let monTexte = "texte";

let pasDefini;

let typeNull = null;


// Affichage du type
console.log("variable nb de type :", typeof nb);
console.log("variable bool de type :", typeof bool);
console.log("variable monTexte de type :", typeof monTexte);
console.log("variable pasDefini de type :", typeof pasDefini);
console.log("variable typeNull de type :", typeof typeNull);

//alert(typeof nb);


// le prompt
// console.log("Veuillez saisir votre prenom : ");
prenom = prompt("Veuillez saisir votre prenom : ");
age = Number(prompt("Veuillez saisir votre age : "));
console.log(typeof(prenom));
console.log(typeof(age));



// let  myValue = 100;
// console.log(myValue); 
// myValue++;
// console.log(myValue); 
// myValue--;
// console.log(myValue); 

// let nbA = 10, 
//      nbB = 25;

//     console.log(nbA != nbB);
//     console.log(nbA == nbB);
//     console.log(nbA >= nbB);
//     console.log(nbA < nbB);

// let nbC = 22;
// let nbD = "22";
// console.log(typeof nbC)
// console.log(typeof nbD)
// console.log(nbC == nbD);
// console.log(nbC === nbD);

// let nbE = 15;
// let nbF = 15;

// let addition = nbE+nbF;
// let multiplication = nbE*nbF;

// Concaténation du résultat dans une chaine
// console.log("L'addition de "+nbE+" et "+nbF+" est égale à : "+addition);
// console.log("La multiplication de "+nbE+" et "+nbF+" est égale à : "+multiplication);
// console.log(`La multiplication de ${nbE} et ${nbF} est égale à : ${multiplication}`);

// let message = `La multiplication de ${nbE} et ${nbF} est égale à : ${multiplication}`;

// alert(message);

// let maRecup = prompt("Saisir votre mot : ");

// console.log(typeof maRecup);

/*
  Les Opérateurs Arithmétiques
 */

  console.log("Les Opérateurs Arithmétiques");

  // Déclaration de variables à la volée
  var nb1 = 10, nb2 = 65, resultat;
  
  // L'addition
  resultat = nb1 + nb2;
  console.log(nb1 + " + " + nb2 + " = " + resultat);
  console.log(`${nb1} + ${nb2} = ${resultat}`);
  
  // La soustraction
  resultat = nb2 - nb1;
  console.log(nb2 + " - " + nb1 + " = " + resultat);
  console.log(`${nb2} - ${nb1} = ${resultat}`);
  
  // La multiplication
  resultat = nb2 * nb1;
  console.log(nb2 + " * " + nb1 + " = " + resultat);
  console.log(`${nb2} * ${nb1} = ${resultat}`);
  
  // La division
  resultat = nb2 / nb1;
  console.log(nb2 + " / " + nb1 + " = " + resultat);
  console.log(`${nb2} / ${nb1} = ${resultat}`);
  
  // Modulo (reste de la division)
  resultat = nb2 % nb1;
  console.log(nb2 + " % " + nb1 + " = " + resultat);
  console.log(`${nb2} % ${nb1} = ${resultat}`);

  // Puissance 
  resultat = nb2 ** nb1;
  console.log(nb2 + " pusissance " + nb1 + " = " + resultat);
  console.log(`${nb2} puissance ${nb1} = ${resultat}`);


  console.log("Les Opérateurs d'Incrémentation et Combinés");

// Incrementation
nb1 = nb1 + 1; // Incrémentation de 1 classique
console.log("Nb1 vaut : " + nb1);
// Peut se simplifier avec l'opérateur combiné +=
nb1 += 1;
console.log("Nb1 vaut : " + nb1);
// Ou avec l'opérateur d'incrémentation
nb1++;
console.log("Nb1 vaut : " + nb1);

// Décrémentation
nb1 = nb1 - 1; // Décrémentation de 1 classique
console.log("Nb1 vaut : " + nb1);
// Peut se simplifier avec l'opérateur combiné +=
nb1 = 1;
console.log("Nb1 vaut : " + nb1);
// Ou avec l'opérateur d'incrémentation
nb1--;
console.log("Nb1 vaut : " + nb1);

// Précision pour les Opérateurs ++ et --
console.log(nb1);
// Incrémentation puis lecture la valeur
console.log(++nb1);
// Décrémentation puis lecture la valeur
console.log(--nb1);
// lecture la valeur puis => Incrémentation
console.log(nb1++);
console.log(nb1);
// lecture la valeur puis => Décrémentation 
console.log(nb1--);
console.log(nb1);



nb1= 10;
console.log(nb1);

// Multiplication combinée
console.log(nb2 *= nb1 );
// Division combinée
console.log(nb2 /= nb1 );
