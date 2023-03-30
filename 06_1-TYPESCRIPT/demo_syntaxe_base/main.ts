import { Person } from "./classes/Person";
import {Client, ClientRegulier} from "./interfaces/Client";

console.log("Hello World!")

// Pour créer une fonction en TS, la différence est l'ajout du typage pour les paramètres
// De la sorte, on sécurise les utilisations futures de notre fonction en vérrouillant des types incorrects
function addition(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b
}

function logSmth(message: string): void {
  console.log(message);
}

let result = addition(1, 2)
console.log(result);

// resultB = addition("A", "B") ne marchera pas

// Pour spécifier le type d'une variable, la syntaxe est la suivante
let maVariable: string;
maVariable = "Blabla"

// maVariable = 25 ne marchera pas, car elle est vérouillée à être un 'string'

// Via le Typescript, on a une auto-complétion et une Intellisense plus poussée
console.log(maVariable.length);

// Pour définir un tableau de 'number', il faut utiliser le type suivi des crochets 
let myNumbers: number[] = []
myNumbers.push(4)

let myStatus = "CADRE"
let myStatusB = 1

// Le typescript permet la création d'énum, des types permettant de 
// relier des valeurs numériques avec des valeurs en toutes lettres plus utiles pour nous développeur
// Au niveau de la RAM, cela restera seulement des nombres cela dit, donc on gagne en performances

enum STATUS {
  CADRE,
  SALARIE,
  COMMERCIAL,
  BLABLA
}

let myStatusC = STATUS.COMMERCIAL
let myStatusD: STATUS = 2

// On peut aussi, via le Typescript, créer des Tuples, des Array de taille fixe
// On devra du coup avoir le bon nombre d'éléments dans la variable et le bon typage dans le bon ordre !

let myPerson: [string, string, number];
myPerson = ["Albert", "DUPONT", 45]

// Il est possible de créer nos propres types. Pour une utilisation future à plusieurs endroits de notre code 
// d'une variable pouvant être soit le type A, soit le type B, il est courrant de regrouper cette notion derrière un nouveau type
// Pour déclarer un nouveau type, la syntaxe est 

// type <nom du type> = <types à regrouper derrière lui>

// Via l'utilisation de l'opérateur '|', on peut spécifier que le type sera soit le type a gauche de l'opérateur, 
// soit le type à droite de l'opérateur

type monType = string | number
type monTuple = [string, number]

let myTableA: monType[] = ["10", "a", 25, 20, "true"]
let myTableB: monTuple = ["true", 10]

// Via la création de type, on peut rendre nos fonctions plus précises, en spécifiant qu'elles peuvent retourner plusieurs 
// chose en fonction d'une condition par exemple
function divide(a: number, b: number): monType {
  try {
    let result = a / b
    return result
  } catch (error) {
    return "Impossible de diviser par zéro"
  }
}


// Via la création d'un tuple, on peut retourner plusieurs valeurs dans une fonction de façon optimale pour la mémoire, 
// et ce sans avoir à stocker un tableau / un objet
function substractWText (a: number, b: number): [number, string] {
  let result = a - b
  return [result, `Le résultat de ${a} - ${b} est ${result}`]
}

// Le tuple peut être traité tel qu'elle à la réception et au stockage dans une variable
let resultatSubstract = substractWText(10, 5)
console.log(resultatSubstract[1]);

// ou directement 'unpacké' pour obtenir X variables directement à partir des éléments du tuple
let [resultatSub, resultatSubText] = substractWText(10, 5)
console.log(resultatSubText);

// Via l'utilisation de l'opérateur REST '...' il est possible de créer des fonction pouvant traiter X paramètres, dont leur 
// nombre sera inconnu. Pour ce faire, il va falloir, au coeur de notre fonction traiter un tableau d'éléments. 

// Durant l'appel, les éléments pourront être envoyés séparéments, mais le temps de l'execution de la fonction, il seront sous forme de tableau
// Une fois le scope de la fonction terminé, le tableau sera supprimé par le garbage collector, ce qui optimise notre fonction et notre mémoire
function additionMany(...numbers: number[]) {
  let sum = 0
  numbers.forEach(n => {
    sum += n
  });

  return sum
}

console.log(additionMany(1, 2, 3))

// Via l'utilisation de l'opérateur REST, il est aussi possible de séparer ou de fusionner des tableaux très facilement : 
let monTableauNbA = [1, 2, 3, 4, 5]
let monTableauNbB = [6, 7, 8, 9, 10]
let monNouveauTabl = [...monTableauNbA, ...monTableauNbB]
let [monPremierNb, ...leReste] = monNouveauTabl

// Lorsque l'on créé des objets en Typescript, il peut être utile de les forcer à avoir une structure particulière
// Pour ce faire, on va avoir la plupart du temps recours aux interfaces, qui offrent plus de flexibilité que les classes 
// dans le cas où l'on ne veut pas rendre commun des choses pour chaque objet, mais simplement que leur structure soit identique

let monObjA: Client = {
  firstname: "Albert",
  lastname: "DUPONT"
}

let monObjB: Client = {
  firstname: "Albert",
  lastname: "DUPONT",
  numeroIdNat: 6424851,
  acheter() {
    if (this.firstname === "blabla") {
      return 10;
    } else {
      return 25;
    }
  }
}

let monObjC: ClientRegulier = {
  firstname: "Thierry",
  lastname: "SMITH",
  pointFid: 15
}

/* 
  Manipuler le DOm en Typescript est un peu plus délicat que de le faire en Javascript. En effet, le JS
  intègre comme principe le Duck Typing, qui permet d'écrire du code sans réellement le contrôler mais de pouvoir vérifier
  sa véracité à l'execution. 

  En Typescript, cela n'est pas permis, et il nous faut, lors de la création de fonction manipulant le DOM, spécifier que notre 
  paramètre sera un évènement HTML, que l'élément que l'on récupère dans le DOM est un input, etc...

  Pour ce faire, nous avons recours au casting, qui peut se faire de deux façon

  La première passe par l'utilisation de chevrons, par exemple : 

  const message = <string> monObjet

  La seconde passe par l'utilisation d'un mot-clé :

  const message = monObjet as string

  Si l'on a besoin de manipuler des propriétés ou des méthodes de notre élément casté, alors la syntaxe 
  s'accompagnera de parenthèses : 

  const longueur = (<string> monObjet).length
  const longueur = (monObjet as string).length
*/ 

function onFormSubmit (event: SubmitEvent) {
  event.preventDefault()
}

let monTexte = "";

function onInputChanged (event: InputEvent) {
  monTexte = (<HTMLInputElement> event.target).value
  monTexte = (event.target as HTMLInputElement).value

  const imageEl = document.querySelector("blabla") as HTMLImageElement;
}