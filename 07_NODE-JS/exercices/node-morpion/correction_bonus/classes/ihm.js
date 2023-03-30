import { Jeu } from "./jeu.js"
import { Log } from "./log.js"
import { poserUneQuestion } from "./tools.js"

export class Ihm {
    constructor() {
        this.fin = false
        this.first = true
        this.log = new Log()
        this.jeu = new Jeu(this.log)

    }

    async getPositions() {
        const joueur = this.first ? 'X' : 'O'
        console.log("Joueur : " + joueur)
        this.log.addTextLine("Joueur : " + joueur)
        const x = await poserUneQuestion("Merci de saisir x : ")
        this.log.addTextLine("Merci de saisir x : " + x)
        const y = await poserUneQuestion("Merci de saisir y : ")
        this.log.addTextLine("Merci de saisir y : " + y)
        return { joueur: joueur, x: x, y: y }
    }

    async demarrer() {
        console.log("#  .##.....##..#######..########..########..####..#######..##....##")
        this.log.addTextLine("#  .##.....##..#######..########..########..####..#######..##....##")
        console.log("#  .###...###.##.....##.##.....##.##.....##..##..##.....##.###...##")
        this.log.addTextLine("#  .###...###.##.....##.##.....##.##.....##..##..##.....##.###...##")
        console.log("#  .####.####.##.....##.##.....##.##.....##..##..##.....##.####..##")
        this.log.addTextLine("#  .####.####.##.....##.##.....##.##.....##..##..##.....##.####..##")
        console.log("#  .##.###.##.##.....##.########..########...##..##.....##.##.##.##")
        this.log.addTextLine("#  .##.###.##.##.....##.########..########...##..##.....##.##.##.##")
        console.log("#  .##.....##.##.....##.##...##...##.........##..##.....##.##..####")
        this.log.addTextLine("#  .##.....##.##.....##.##...##...##.........##..##.....##.##..####")
        console.log("#  .##.....##.##.....##.##....##..##.........##..##.....##.##...###")
        this.log.addTextLine("#  .##.....##.##.....##.##....##..##.........##..##.....##.##...###")
        console.log("#  .##.....##..#######..##.....##.##........####..#######..##....##")
        this.log.addTextLine("#  .##.....##..#######..##.....##.##........####..#######..##....##")
        while (!this.fin) {
            const res = await this.getPositions()
            if (this.jeu.jouer(res.joueur, res.x, res.y)) {
                this.first = !this.first
                this.jeu.afficher()
                //  console.log("joueur :",res.joueur)
                //  console.log("resultat :",this.jeu.testwin(res.joueur))
                if (this.jeu.testwin(res.joueur)) {
                    console.log("bravo " + res.joueur)
                    this.log.addTextLine("bravo " + res.joueur)
                    this.log.createLog()
                    this.fin = true
                } else {
                    this.fin = this.jeu.testFin()
                }

            }
        }
    }
}