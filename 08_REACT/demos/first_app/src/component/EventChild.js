import React, { Component } from 'react'

class EventComponentChild extends Component {
    constructor(props){
        super(props)
    }

    // méthode lors du clique sur le lien enfant
    clickLink = (e) => {
         e.preventDefault() // annuler comportement par défaut
         console.log("clique sur le lien")
        // appelle de ma méthode parent via mes props
         this.props.clickChild()
         // appelle de ma méthode avec parametre parent via mes props
         this.props.clickChildParam("test");
    }

    render() {
        const {contenu} = this.props.message
        return(
            <div>
                <h2>Composant Enfant : {contenu}</h2>
                <a href="http://www.google.fr" onClick={this.clickLink}>Lien enfant</a>
            </div>
        )
    }

}

export default EventComponentChild;