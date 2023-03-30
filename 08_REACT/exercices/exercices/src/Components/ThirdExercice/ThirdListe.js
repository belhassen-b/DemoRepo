import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { ThirdClient } from './ThirdClient'

export class ThirdListe extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {
            clients : [
                {
                    nom: "Harry",
                    prenom: "Potter",
                    telephone: "0123456789",
                    statut : true,
                    adresse: {
                        rue: "ma rue",
                        ville: "ma ville",
                        cp: "59200"
                    }
                },{
                    nom: "Hermione",
                    prenom: "Granger",
                    telephone: "0123456789",
                    statut : false,
                    adresse: {
                        rue: "ma rue",
                        ville: "ma ville",
                        cp: "59200"
                    }
                },{
                    nom: "Weasley",
                    prenom: "Ron",
                    telephone: "0123456789",
                    statut : true,
                    adresse: {
                        rue: "ma rue",
                        ville: "ma ville",
                        cp: "59200"
                    }
                }]
            
        }
    }

    changeStatutClientByName = (name) => {
       // console.log("ici je dois modifier le statut d'un client par rapport a son name")
       // console.log("j'ai recu en parametre :"+name)
        const tmpClients = [...this.state.clients]
        tmpClients.forEach(c => {
            if(c.nom == name){
                c.statut = !c.statut
            }
        })
       // console.log(tmpClients)
        this.setState({ clients : [...tmpClients]})

    }

    render() {

        return (
            <>
             <table>
                    <thead>
                        <tr>
                            <th colSpan="8">Mes Clients</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.clients.map((client,i) => (<ThirdClient client={client} key={i} changeStatutClientByName={this.changeStatutClientByName}></ThirdClient>))}         
                    </tbody>
                    </table>
             
            </>
        )
    }
}