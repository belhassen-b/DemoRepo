import { writeFileSync , readFileSync } from "fs"


let tab = [{ nom : "toto", prenom : "tata"},{ nom : "titi", prenom : "tutu"}]

writeFileSync("data.json", JSON.stringify(tab))

let tabrecup = []
console.log("mon tab avant injection : ", tabrecup)
const contenu = readFileSync("data.json").toString()
tabrecup = JSON.parse(contenu)
console.log("mon tab apres injection : ", tabrecup)
console.log(tabrecup[0].nom)


