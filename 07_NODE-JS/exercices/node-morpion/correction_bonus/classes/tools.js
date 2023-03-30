import { stdin, stdout } from "process"
import readline from "readline"

export const poserUneQuestion = async (question) => {
    console.log(question)
    const readlineInterface = readline.createInterface({
        input: stdin,
        output: stdout
    })
    //Attendre la saisi par l'utilisateur dans la console
    const result = await (await readlineInterface[Symbol.asyncIterator]().next()).value
    readlineInterface.close()
    return result
}
//module.exports = {maFonction}