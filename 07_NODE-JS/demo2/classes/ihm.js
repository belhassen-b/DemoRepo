

export class Ihm {
    constructor(){
      //  this.jeu=new Jeu()
        this.first = true
        this.fin = false
    }

    getPositions(){
        const joueur = this.first ? 'X' : 'O'
        console.log("Joueur : "+ joueur)
        console.log("le joueur choisie sa case")
    }

    demarrer(){
        let cpt = 0;
        while(!this.fin) {
            const res = this.getPositions()
            this.first = !this.first
            if(cpt> 5){
                this.fin = true;
            }
            cpt++;
        }
    }

}