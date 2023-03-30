// import React, { Component } from 'react' // necessaire pour mon composant dans une classe
// export class Adresse extends Component { // utilisation d'une classe 

//     constructor(props) {
//         super(props)
//         this.state = {}
//     }

//     render() {
//         console.log(this.props);
//         // Utilisation du destructuring
//         const { rue,ville,cp} = this.props.adresse
//         //return dans un React Fragment
//         return (
//             <>
//                 <td>{rue}</td>
//                 <td>{ville}</td>
//                 <td>{cp}</td>
//             </>
//         )
//     }
// }


export function Adresse(props) {
    // Utilisation du destructuring
    const { rue,ville,cp} = props.adresse
    return (
        <>
            <td>{rue}</td>
            <td>{ville}</td>
            <td>{cp}</td>
        </>
    )
}