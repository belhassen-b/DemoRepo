import React, { Component } from 'react'
export class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            year: 1964,
            color: "red"
        }
    }

    changeColor = () => {
        console.log("Je veux changer la couleur")
        // faire une copie de mon state
        const tmpState = {...this.state}
        console.log("tmpSate avant modif",tmpState)
        tmpState.color ="vert"
        console.log("tmpSate aprés modif",tmpState)
        console.log("state aprés modif",this.state)
        // this.setState({brand: "Ford",
        // model: "Mustang",
        // year: 1964,
        // color: "bleu"})
        this.setState({...tmpState})
        // console.log("tmpSate aprés modif",tmpState)
        // console.log("state aprés modif",this.state)
      
    }

    // changeTest = () => {
    //     console.log("ceci est un essai")
    // }

    render() {

        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>It is a</p>
                <p>{this.state.model}</p>
                <p>from</p>
                <p>{this.state.year}</p>
                <p>{this.state.color}</p>

                <button type="button" onClick={this.changeColor}>Change Color</button>
                {/* <button type="button" onClick={this.changeTest}>test</button> */}
            </div>
        )
    }

}