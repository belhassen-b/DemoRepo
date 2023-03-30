import { Component } from 'react';
import { Contact } from './Contact';
import { Client } from './Client';

export class Liste extends Component {
    constructor(props){
        super(props)
        this.state = { clients : [{ 
            nom: "nom contact", 
            prenom: "prenom contact", 
            telephone: "0123456789", 
            statut : true,
            adresse: { rue: "ma rue", ville: "ma ville", cp: "59200" }
        },{ 
            nom: "nom0 contact", 
            prenom: "pierre", 
            telephone: "9123456789", 
            statut : false,
            adresse: { rue: "ma2 rue", ville: "ma ville1", cp: "59201" }
        },{ 
            nom: "nom1 contact", 
            prenom: "théo", 
            telephone: "8123456789", 
            statut : true,
            adresse: { rue: "ma1 rue", ville: "ma ville1", cp: "59202" }
        }] }
    }

    render() {
        return (
            <>
            <h2>Exercice 1</h2>
            <Contact></Contact>
            <h2>Exercice 2</h2>
            <div>
                {this.state.clients.map((client,i) => <Client key={i} monclient={client}></Client>)}
            </div>
            </>
        )
    }

}