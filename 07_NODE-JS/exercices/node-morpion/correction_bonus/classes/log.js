import fs from 'fs'

export class Log {
    constructor(){
        this.log = "";
    }

    addTextLine(text){
        this.log = this.log+"\r\n"+text;
    }

    createLog(){
        let time = new Date().valueOf()
        fs.writeFile('./morpion'+time+'.txt', this.log,function (err) {
            if (err) return console.error(err);
            console.log('Partie enregisté => morpion'+time+'.txt ');
        })
    }
}