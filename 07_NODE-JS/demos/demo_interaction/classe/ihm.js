import { poserUneQuestion } from "../tools/tools.js";


export class Ihm {
    constructor() {
        this.personnes = []
    }

    async menu(){
        let choix;
        do {
            console.log("1-- Ajouter une personne")
            console.log("2-- Afficher les personne")
            console.log("0-- Quitter")
            choix = await poserUneQuestion("Merci de faire un choix : ")
            switch(choix) {
                case "1":
                    const nom = await poserUneQuestion("Merci de saisir le nom : ")
                    const prenom = await poserUneQuestion("Merci de saisir le prénom : ")
                    this.personnes.push({
                        nom: nom, 
                        prenom : prenom
                    })
                    break;
                case "2":
                    this.personnes.forEach(p => {
                        console.log(`Nom : ${p.nom}, Prénom : ${p.prenom}`)
                    })
                    break;
            }

        }while(choix != '0')
    }

}