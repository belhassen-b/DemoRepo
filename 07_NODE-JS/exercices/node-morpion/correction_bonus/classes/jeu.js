

export class Jeu {
    constructor(log) {
        this.board = [[' ', ' ', ' '],[' ', ' ', ' '],[' ', ' ', ' ']]
        // for(let i=1; i <= 3; i++) {
        //     this.board = [...this.board, [' ', ' ', ' ']]
        // }
        this.log=(log);
    }

    afficher() {
        for(let i=0; i < this.board.length; i++) {
            let ligne = ''
            for(let j=0; j < this.board[i].length; j++) {
                ligne += '|'+ this.board[i][j] + '|' 
            }
            console.log(ligne)
            this.log.addTextLine(ligne)
            console.log('---------')
            this.log.addTextLine('---------')
        }
    }

    jouer(joueur, x, y) {
        if(this.board[x-1][y-1] == ' ') {
            this.board[x-1][y-1] = joueur
            return true
        }
        return false
    }
    testFin() {
        let test = true
        for(let i=0; i < this.board.length; i++) {
            for(let j =0; j < this.board[i].length; j++) {
                if(this.board[i][j] == ' ') {
                    test = false
                    break
                }
            }
        }
        return test
    }

    testwin(joueur) {
      return  (this.testHor(joueur) || this.testVertical(joueur))  || this.testDiagonale(joueur)
    }

    testHor(joueur) {
      //  console.log("test horizontal")
        let test 
       // console.log("taille du tableau :",this.board.length)
        for(let i=0; i < this.board.length; i++) {
         //   console.log("ligne :",i)
            test = true
            for(let j=0 ; j < this.board.length; j++) {
                if(this.board[i][j] != joueur) {
                    test = false
                    break
                }
            }
            if(test){
                break
            }
        }
      //  console.log("resultat horizontal :",test)
        return test
    }


    testVertical(joueur) {
       // console.log("test verticale")
        let test 
        for(let i=0; i < this.board.length; i++) {
            test = true
            for(let j=0 ; j < this.board.length; j++) {
              //  console.log("case :",this.board[j][i],"joueur :",joueur)
                if(this.board[j][i] != joueur) {
                    test = false
                    break
                }
            }
            if(test){
                break
            }
        }
       // console.log("resultat vertical :",test)
        return test
    }

    testDiagonale(joueur){
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