import React, { Component } from 'react' // utlise uniquement pour le troisieme composant
import './component.css';


export function FirstComponent() { // Premiere lettre Uppercase (convention PascalCase ou aussi appele UpperCamelCase ) et composant dans une fonction
    return(
        <header>
            <h1>Mon premier component React !!!</h1>
        </header>
    )
}

export const SecondComponent = () => {  // utilisation d'une constante
    return(
        <header>
            <h1>Mon second component React !!!</h1>
        </header>
    )
}




class ThirdComponent extends Component { // utilisation d'une classe 

    constructor(props) {
        super(props)
        this.state = { message : props.message }
    }

    render() {
        return (
            <div>
                <h1>Mon troisiéme component React !!!</h1>
                <h2>Message : {this.state.message}</h2>
            </div>
        )
    }


}

export default ThirdComponent;



export function FourComponent(props) { // Premiere lettre Uppercase et composant dans une fonction
    return(
        <header>
            <h1>{props.message}</h1>
        </header>
    )
}


export function FiveComponent({message}) { // Premiere lettre Uppercase et composant dans une fonction
    return(
        <header>
            <h1>{message}</h1>
        </header>
    )
}



export function SixComponent(props) { // Premiere lettre Uppercase et composant dans une fonction
    return(
        <header>
          <h1>{props.children}</h1> 
           {/* il s'agit d'une expression = valeur et non d'une declaration */}
        </header>
    )
}


export class SevenComponent extends Component { 

    constructor(props) {
        super(props)
        this.state = { messages : ["message1","message2","message3"] }
    }

    render() {
        return (
            <div>
                <h1>Mon Septiéme component React !!!</h1>
                {this.state.messages.map((m,i) => (<EighthComponent key={i} message={m}></EighthComponent>))}
            </div>
        )
    }


}

function EighthComponent(props) {
  //  return (<h2 style={{backgroundColor : "red"}}>{props.message}</h2>)   
  //  return (<h2 className='component'>{props.message}</h2>)  
    const styleH2 = {backgroundColor : "red"}
    return (<h2 style={styleH2}>{props.message}</h2>)  
}
