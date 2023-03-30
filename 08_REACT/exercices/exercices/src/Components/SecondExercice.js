import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { Liste } from './SecondExercice/Liste'
import classes from './secondexercice.module.css';
export class SecondExercice extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        //return dans un React Fragment
        return (
            <>
                <h2 className={classes.h2color}>Exercie 2 :</h2>
                <p>Sujet :</p>
                <p>Créez une application ReactJs qui permet d’afficher une liste clients chaque client possède un nom, prénom, téléphone, statut (actif ou non), adresse (rue, ville, code postal).
                    Affichez un marqueur rouge pour les clients non actif.</p>
                <Liste></Liste>
                <p>utilisation du <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="blank">map</a> pour cette exercice</p>
                <p>utilisation du <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" target="blank">ternaire</a> pour cette exercice</p>
            </>
        )
    }
}