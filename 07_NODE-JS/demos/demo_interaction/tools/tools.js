import readline from "readline"
import {stdin, stdout } from "process"

// création d'une fonction pour recupere la saisie dans la console
export const poserUneQuestion = async (question) => {
    console.log(question)
    const readlineInterface = readline.createInterface({
        input : stdin,
        output : stdout
    })
    const result = await (await readlineInterface[Symbol.asyncIterator]().next()).value

    readlineInterface.close()
    return result
}

// let test = await poserUneQuestion("Merci de saisir du texte :")
// console.log("Vous avez saisi : "+test)

/*
Ce code permet de lire de maniére asynchrone une ligne d'entrée utilisateur à partir de la console
et de stocker la valeur dans la variable result que l'on retourne

*/