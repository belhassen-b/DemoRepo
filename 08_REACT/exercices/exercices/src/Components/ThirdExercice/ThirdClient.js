import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { Adresse } from '../FirstExercice/Adresse'
import './thirdclient.css';
export class ThirdClient extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }

    clickStatut = (e) => {
        e.preventDefault()
      //  console.log(e)
       // console.log(this.props.client.nom)
       // console.log("changer le statut de ce client")
      //  console.log("tu as clique sur le client : ",this.props.client.nom)
      //  console.log("tu as clique sur le client : ",e.target.dataset.name)
        this.props.changeStatutClientByName(e.target.dataset.name)
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
                            <td><a href="#" onClick={this.clickStatut} data-name={nom}>Changer Statut</a></td>
                            <Adresse adresse={adresse}></Adresse>
                        </tr>
            </>
        )
    }
}