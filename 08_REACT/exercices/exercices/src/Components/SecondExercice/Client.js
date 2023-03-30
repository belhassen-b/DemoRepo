import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { Adresse } from '../FirstExercice/Adresse'
import './client.css';
export class Client extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {nom,prenom,telephone,statut,adresse} = this.props.client
        //return dans un React Fragment
        return (
            <>
            <tr>
                            <td>{nom}</td>
                            <td>{prenom}</td>
                            <td>{telephone}</td>
                            <td className={statut? "green": "red"}>{statut? "actif": "non actif"}</td>
                            <Adresse adresse={adresse}></Adresse>
                        </tr>
            </>
        )
    }
}