//composant dans une fonction et Premiere lettre du nom en Uppercase 
export function ComponentHeader(props) {
    return (
        // JSX en utilisant babel
        <header>
            <h1>Mes Exercices en <a href="https://fr.reactjs.org/" target="blank">React</a></h1>
            <p>Pour creer cette application j'ai utilisée la commande <code>npx create-react-app nomdemonapplication</code></p>
            <p>Ce header est dans mon composant ComponentHeader et il s'agit d'un composant stateless</p>
        </header>
        // composant stateless car il n'ya pas de state ce n'est pas un composant qui utilise une classe
    )
}
/*

// Syntaxe Composant Statefull 
import React, { Component } from 'react' // necessaire pour mon composant dans une classe
export class NomComponent extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        //return dans un React Fragment
        return (
            <>

            </>
        )
    }
}


// Syntaxe d'un composant Stateless avec const
export const NomComponent = (props) => {
    return (
        <>

        </>
    )
}

// Syntaxe d'un composant Stateless avec fonction
export function NomComponent(props) {
    return (
        <>

        </>
    )
}

*/

