import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { Adresse } from './Adresse'
export class Contact extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {
            // key: value
            nom: "nom contact 3",
            prenom: "prenom contact 3",
            telephone: "0123456789",
            adresse: {
                rue: "ma rue",
                ville: "ma ville",
                cp: "59200"
            }
        }
    }

    render() {
        // Utilisation du destructuring
        const { nom, prenom, telephone,adresse } = this.state
        //return dans un React Fragment
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="6">Mon Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{nom}</td>
                            <td>{prenom}</td>
                            <td>{telephone}</td>
                            <Adresse adresse={adresse}></Adresse>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}