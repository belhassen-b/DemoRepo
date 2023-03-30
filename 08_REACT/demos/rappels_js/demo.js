 //########################### Les Variables ###########################
 let message = "coucou"

 message = "salut"

 //console.log(message)

 const message_const = "bonjour"

  //message_const = "aurevoir" // erreur car variable constante

 // console.log(message_const)

 const o = { c : 42}
 // o = { c : 54} // assignement impossible
 o.c = 54 // l'objet o pointe toujours ver le meme emplacement memoire 

 //console.log(o)

 // console.log(window)
// var est stockée dans l'objet global windows contrairement à let

 //################################ Les fonctions Fléchées  ###########################

 const sayHello = () => {
   console.log("ceci est ma fonction Hello")
 }

 // sayHello(); // appelle de la fonction

 const sayGoodbye = (param) => console.log(param)

 // sayGoodbye("ceci est ma fonction goodbye")

 const sayGoodbye_simple = param => console.log(param)

//  sayGoodbye("ceci est ma fonction goodbye avec un seul parametre")

 const retourne_objet = () => ({ cle: "valeur" }) // rajout de parenthése pour ne pas confondre les accolades 

 //console.log(retourne_objet())

 // valeur par défaut ###########################

 const sayGoodbye_default = (param = "christophe") => console.log("Aurevoir "+param)

 // sayGoodbye_default()
//  sayGoodbye_default("adrien")

 //################################ this  ###########################

 const car = {
   model: 'Fiesta',
   manufacturer: 'Ford',
   fullName: function () {
     return `${this.manufacturer} ${this.model}`  // this fonctionne
   }
   /* // fonction flechee parsing error
   fullName_fleche: () => {
     return `${this.manufacturer} ${this.model}`  // this ne fonctionnera pas
   }
   */
 }

 //console.log(car.fullName())

 //################################ Rest et Spread  ###########################

 // Spread : ...
 const a = [1, 2, 3]
 const b = [...a, 4, 5, 6] //nouveau tableau
 const c = [...a] //copie de tableau
 const d = [4, 5, 6, ...a]
 const e = a
 console.log("tab a",a)
 console.log("tab e avant modif tab a",e)
 console.log("tab c avant modif tab a",c)
 a.push(5)
 console.log("tab e",e)
 console.log("tab c",c)

/*
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
*/
 const mots = ["Bonjour", "Christophe"]

 const bonjourChristophe = (param1, param2) => console.log(param1 + " " + param2)

//  bonjourChristophe(...mots)

function add(...args){

  //console.log(args);

  let result = 0;

  for(const arg of args){
      result += arg;
  }

  return result;
  
}
//console.log(add(2,2,20,50,900,100));

 //################################ Destructuring  ###########################

 const pays = {
  nom: "Italie",
  pop: 60
}

const {nom, pop} = pays;

const data = ({nom}) => nom;
const data2 = ({pop}) => pop*10;

//console.log(data(pays)); // prend l'objet et renvoie la valeur de la cle defini
//console.log(data2(pays));
//console.log(data(555));

const tab = [1,2,3];

const [x,y,z] = tab;

//console.log(a,b,c);


 //################################ Template literals  ###########################

 const string = `Salut
 tout
 le
 monde!`
 const string1 = `First
 Second`

// console.log(string)
// console.log(string1)

 const string3 =
   `
First
Second`.trim()

// console.log(string3)

 // Interpolation ###########################
 
 const myVariable = 'bleu'
 const string4 = `Chat ${myVariable}`
// console.log(string4)
const bonjourChristophe_interpolation = (param1, param2) => console.log(`${param1} ${param2}`)
// bonjourChristophe_interpolation(...mots)
 const pair = (number) => {
   if (number%2 === 0){
     return true
   }
   return false
 }
 
 let random = Math.floor(Math.random() * 10)
 // console.log(`mon chiffre random est ${random} et ce nombre est ${pair(random) ? 'pair' : 'impair'}`)

//################################ Map et filter ###########################

const list = ['Apple', 'Orange', 'Egg']

// console.log(
//  list.map(item => item)
//  ) 

//  list.map((item) => (console.log(item))) //'tous mes item'


// console.log(
//  list.map(item => item).filter(item => item[0] ==='A')
//  ) //'item qui commence par A'

const arr = [1,2,3,4,5,6];

const mapedArr = arr.map(x => x + 10);
//console.log(mapedArr);


const filteredArr = arr.filter(num => num > 2)
//console.log(filteredArr);


arr.forEach(val => {
  //  console.log(val - 90);
})