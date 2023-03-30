import { Component } from "react";

export class Formulaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: {
                nom: "",
                prenom: ""
            }

        }
    }


    submitForm = (e) => {
        //envoyer un objet qui posséde un prenom et un nom
        e.preventDefault();
      //  console.log("coucou")
        const monClientValid = {...this.state.client}
        console.log(monClientValid);
        this.setState({ client : {nom : "", prenom :""}})
        e.target.reset();
    }

    fieldsOnChangeClient = (e) => {
        console.log("e.target.name : ", e.target.name)
        console.log("e.target.getAttribute('name') : ", e.target.getAttribute("name"))
        const tmpClient = {...this.state.client}
        tmpClient[e.target.getAttribute("name")] = e.target.value
       // console.log(tmpClient)
        this.setState({client : {...tmpClient}})
    }




    render() {

        return (
            <>
                <h1>Mon formulaire Client</h1>
                <form onSubmit={this.submitForm}>
                    <p>Votre nom</p>
                    <input type="text" onChange={this.fieldsOnChangeClient} name="nom"></input>
                    <p>Votre prenom</p>
                    <input type="text" onChange={this.fieldsOnChangeClient} name="prenom"></input>
                    <button>Envoyer</button>
                </form>
            </>
        )
    }
}