import React, { Component } from 'react' // necessaire pour mon composant dans une classe
import { Contact } from './FirstExercice/Contact'
export class FirstExercice extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = { boolean : false}
    }

    changBoolean = () => {
        console.log("je change l'etat de mon state")
        const tmpState = {...this.state}
      
        // Possibilité d'uliser une fonction à la place d'un objet (premier parametre va correspondre au state précedent et/ou second parametre les props)
        // https://fr.reactjs.org/docs/state-and-lifecycle.html
        this.setState((prevState) => ({...prevState, boolean : !prevState.boolean}))
    }



    render() {
        //return dans un React Fragment
        return (
            <>
                <div>{this.state.boolean? "mon state boolean est true" : "mon state boolean est false" }</div>
                <button onClick={this.changBoolean}>Change boolean</button>
                <h2>Exercice 1 :</h2>
                <p>Sujet :</p>
                <p>Créez une application ReactJs qui permet d’afficher deux composants :
                   
                </p>
                <ul>
                        <li>Contact (nom, prénom, téléphone).</li>
                        <li>Adresse (Rue, ville, code postal).</li>
                    </ul>
                <p>Etapes Possible pour cette exercie :</p>
                
                    <ul>
                        <li>Cree un composant statefull qui contiendra dans son state les data de mon contact</li>
                        <li>Cree un composant stateless qui affichera l'adresse de mon contact.</li>
                        <li>Afficher les infos nom prénom et télephone dans le rendu de mon composant contact.</li>
                        <li>Passe les infos de l'adresse de mon composant contact à mon composant adresse via les props.</li>
                        <li>Afficher les infos rue ville et code posatl dans le rendu de mon composant adresse.</li>
                    </ul>
                
                <hr></hr>
                <h3>Solution</h3>
                <Contact></Contact>
                <p>utilisation du <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="blank">destructuring</a> pour cette exercice</p>
            </>
        )
    }
}
