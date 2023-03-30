import fs from "fs"
import LineByline from "n-readlines"

const nom = "toto"
const prenom = "tata"

fs.appendFileSync("data.csv",`${nom};${prenom}\n`)
fs.appendFileSync("data.csv",`titi;tutu\n`)


const lineReader = new LineByline("data.csv")
let line
while(line = lineReader.next()){
    console.log(line.toString())
}

const tab = []
console.log("tab avant ajout data csv", tab)
const reader = new LineByline("data.csv")
let myline
while(myline = reader.next()){
    const donnees = myline.toString().split(';')
    console.log(donnees)
    const contact = {nom : donnees[0], prenom : donnees[1]}
    tab.push(contact)
}
console.log("tab apres ajout data csv", tab)
