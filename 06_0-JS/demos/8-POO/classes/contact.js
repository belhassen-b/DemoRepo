export class Contact {
    
    constructor(){
        this.nom = "toto"
        this.prenom =""
        this.email = ""
        this.telephone =""
        this.dateNaissance =""
    }

    afficher(){
        console.log(`Nom : ${this.nom} Prénom : ${this.prenom} Email : ${this.email} telephone : ${this.telephone} date de naissance : ${this.dateNaissance}`)
    }

    get name() {
        return this.nom
    }

    set name(n) {
        
        this.nom = n;
    }
}