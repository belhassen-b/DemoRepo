

export class Jeu {
    constructor() {
        this.board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
    }

    afficher(){
        for(let i=0; i<this.board.length; i++){
            let ligne = ''
            for(let j=0; j <this.board[i].length; j++){
                ligne += '|'+this.board[i][j]+'|'
            }
            console.log(ligne)
            console.log('---------')
        }
    }

    jouer(joueur,x,y) {
        if(this.board[x-1][y-1] == ' '){
            this.board[x-1][y-1] = joueur
            return true
        }
        return false
    }

    testFin() {
        let test = true
        for(let i = 0; i < this.board.length; i++){
            for(let j=0; j < this.board.length; j++){
                if(this.board[i][j] == ' '){
                    test = false
                    break
                }
            }
        }
        return test
    }

    testwin(joueur){
        // renvoie un bool pour teste possible victoire d'un joueur
        return (this.testHor(joueur) || this.testVertical(joueur)) || this.testDiagonale(joueur)
      // return true
    }

    testHor(joueur){
        // renvoie true si meme valeur sur une ligne
        let test
        for(let i = 0; i < this.board.length; i++){
            test = true
            for(let j=0; j < this.board.length; j++){
                if(this.board[i][j] != joueur){
                  test = false
                  break
                }
            }
            if(test){
                break
            }
        }  
        return test
    }

    testVertical(joueur){
        // renvoie true si meme valeur sur une colonne
        let test
        for(let i = 0; i < this.board.length; i++){
            test = true
            for(let j=0; j < this.board.length; j++){
                if(this.board[j][i] != joueur){
                  test = false
                  break
                }
            }
            if(test){
                break
            }
        }  
        return test
    }

    testDiagonale(joueur){
        // renvoie true si meme valeur sur une diagonale
        let test = false
        if(this.board[1][1] == joueur){
            if((this.board[0][0] == joueur) && (this.board[2][2] == joueur)){
                test = true
            }else if((this.board[0][2] == joueur) && (this.board[2][0] == joueur)){
                test = true
            }
        }
        return test
    }
}