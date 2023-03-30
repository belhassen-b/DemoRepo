

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

    jouer(x,y){
        this.board[x][y] = 'X'
        console.log(this.board)
    }

    déplacer(x,y){
        this.board[x][y] = 'O'
        console.log(this.board)
    }

}
