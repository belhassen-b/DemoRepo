import {Contact} from './contact.js';


export class Data {
    constructor() {
    this.contacts = [];
    this.compteur = 0;
    }
    addContact(id,nom, prenom, telephone, email){
const contact = new Contact(++this.compteur, nom, prenom, telephone, email);
this.contacts.push(contact);
    }
    getContacts(){
        return this.contacts.find(c => c.id == id);
    }

    updateContact(id, nom, prenom, telephone, email){
        const contact = this.getContacts(id);
        if(contact){
            contact.nom = nom;
            contact.prenom = prenom;
            contact.telephone = telephone;
            contact.email = email;
            return true;
        }
        return false;
    }
deleteContact(id){
   const contact = this.getContacts(id);
    if(contact != undefined){this.contacts = this.contacts.filter(c=> c.id == id)
        return true
    }
        return false }
}


