import readline from "readline"
import {stdin, stdout } from "process"

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
  terminal: false
})
let gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

console.log("Jeu du Morpion")
console.log("Le joueur 1 est X et le joueur 2 est O")
console.log("Vous pouvez choisir une case en tapant les coordonnées (x, y)")
console.log("C'est parti !")



function displayBoard() {

    console.log(gameBoard.map(row => row.join(" | ")).join("\n---------\n")
    )
}
function playGame() {
    displayBoard()
    rl.question("Choisissez une case (x, y) : ", (answer) => {
        const [x, y] = answer.split(',')
        gameBoard[x][y] = "X"
        if (checkWin()) {
            console.log("Le joueur 1 a gagné !")
            rl.close()
        }
        displayBoard()
        rl.question("Choisissez une case (x, y) : ", (answer) => {
            const [x, y] = answer.split(',')
            gameBoard[x][y] = "O"
            if (checkWin()) {
                console.log("Le joueur 2 a gagné !")
                rl.close()
            }
            playGame()
        })
})
}

playGame()
