//  Les Tableaux

//Déclaration d'un tableau
let monTableau = [];
// let monTableau = new Array(); // Equivalent 

//Affectation de valeur à un tableau
monTableau[0] = "Pomme"; // Affectation d'une valeur à l'index 0 du tableau
monTableau[1] = "Poire"; // Affectation d'une valeur à l'index 1 du tableau

// Affichage dans la console
console.log(monTableau);
console.table(monTableau);


// Afficher la valeur à un index donné
console.log(monTableau[1]);

// Déclaration et affectation de valeur en même temps
let legumes = ["Carottes","Choux","Haricots"];
// let legumes = new Array("Carottes","Choux","Haricots"); // Equivalent 

//Réaffectation de valeur
console.log(legumes[2]);
legumes[2] = "Epinards";
console.log(legumes[2]);

// Affichage du nombres d'élements de mon tableau
let nbLegumes = legumes.length;
console.log("Mon tableau contient "+nbLegumes+ " légumes.");

//Insertion avec récupération automatique du dernier index
legumes[legumes.length]="Cerises";
legumes[legumes.length]="Cerises";
legumes[legumes.length]="Cerises";
legumes[legumes.length]="Cerises";
console.table(legumes);

// Retirer le dernier élement d'un tableau
legumes.pop();
legumes.pop();
legumes.pop();
console.table(legumes);

// Retirer le premier élement d'un tableau
legumes.shift();
console.table(legumes);

//Insertion avec récupération automatique du dernier index
legumes[legumes.length]="Test";
legumes[legumes.length]="Test";
legumes[legumes.length]="Test";
legumes[legumes.length]="Test";

console.table(legumes);

// Retirer un ou plusieurs élements à un index donné => splice(indexDepart,nbElementRetirer)
legumes.splice(6,4);
console.table(legumes);

// Ajouter un élements à un index donné => splice(indexDepart,nbElementRetirer,valueAjouter)
legumes.splice(7,0,"Concombre","test");
console.table(legumes);

// Obtenir l'index d'une valeur dans mon tableau
console.log(legumes.indexOf("Test"));

// Vérifier que mon tableau contient une valeur
console.log(legumes.includes("tata"));

