// Les Tableaux Associatifs (On accède aux éléments par sa clé => key )


// déclaration d'un tableau associatif ( Objet literals )

// let personne = {
//     nom : "Dupont",
//     prenom : "Jean",
//     Age:25
// };

// // Affichage d'un objet
// console.log(personne); 
// console.table(personne); 
// console.log(typeof personne);


// // Affichage de la valeur à une clé
// console.log(personne.prenom); // afficher le prenom
// console.log(personne['nom']) // afficher le nom

// Operateur rest et spread

// Destucturing

// const tabNum = [1,2,3];
// console.table(tabNum);

// // En ES5
// const a = tabNum[0];
// const b = tabNum[1];

// // En ES6 avec le destructuring nous pouvons l'ecrire :
// const [c,e, ...d] = tabNum;
// console.log(c); // 1
// console.log(e);
// console.log(d); // 


// let legumes = ["Carottes","Choux","Haricots"];
// let fruits = ["Raisin","Bananes","Abricots"];

// let aliments = [...legumes,"Patate",...fruits,"Cerises"];

// console.table(aliments);

// Même principe avec les objets

const personne = {
    nom : "Richard",
    prenom  : "Pierre",
    specialite : "Boucle infinie"
}

// const {specialite, ...person} = personne;
// // person va assigner le "rest" des key non utilisé
// console.log(specialite);
// console.log(person);

// const {nom, prenom} = personne;
// console.log(nom);
// console.log(prenom);

const personneAvecAge = {...personne, age : 25}

console.table(personneAvecAge);