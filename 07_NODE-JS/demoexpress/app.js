import LineByline from 'n-readlines';
import * as fs from "fs";

const nom = "nom";
const prenom = "prenom";

fs.appendFileSync('contacts.csv', `${nom};${prenom}\n`);
fs.appendFileSync('contacts.csv', `${nom};${prenom}\n`);


const linerReader = new LineByline('contacts.csv');
let line;
while (line = linerReader.next()) {
    console.log(line.toString());
}

const tab =  []
console.log("tab avant ajout data : ",  tab);
const reader = new LineByline('contacts.csv');
let myLine;
while (myLine = reader.next()) {
const donnees = myLine.toString().split(';');
const contact = {
    nom: donnees[0],
    prenom: donnees[1]
};
tab.push(contact);
}
console.log("tab apres ajout data : ",  tab);



