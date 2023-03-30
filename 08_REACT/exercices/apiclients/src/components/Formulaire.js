import { Component } from "react";

export class Formulaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            client: {
                firstName: "",
                lastName: "",
                phone: "",
                status: true,
                address: {
                    street: "",
                    postCode: "",
                    city: ""
                }
            }

        }
    }

    submitForm = (e) => {
        //envoyer un objet qui posséde un prenom et un nom
        e.preventDefault();
        //  console.log("coucou")
        const monClientValid = { ...this.state.client }
        //  console.log(monClientValid);
        this.props.addClient(monClientValid)
        // this.setState({ client : {nom : "", prenom :""}})
        //  e.target.reset();
    }

    fieldsOnChangeClient = (e) => {
        //   console.log("e.target.name : ", e.target.name)
        //  console.log("e.target.getAttribute('name') : ", e.target.getAttribute("name"))
        const tmpClient = { ...this.state.client }
        tmpClient[e.target.getAttribute("name")] = e.target.value
        // console.log(tmpClient)
        this.setState({ client: { ...tmpClient } })
    }

    fieldsOnChangeClientAdresse = (e) => {
        //  console.log("e.target.name : ", e.target.name)
        //  console.log("e.target.getAttribute('name') : ", e.target.getAttribute("name"))
        const tmpClient = { ...this.state.client }
        tmpClient.address[e.target.getAttribute("name")] = e.target.value
        // console.log(tmpClient)
        this.setState({ client: { ...tmpClient } })
    }




    render() {

        return (
            <>
                <h1>Mon formulaire Client</h1>
                <form onSubmit={this.submitForm}>
                    <div>
                        <input type="text" name="firstName" onChange={this.fieldsOnChangeClient} placeholder="nom du client" />
                    </div>
                    <div><input type="text" name="lastName" onChange={this.fieldsOnChangeClient} placeholder="prenom du client" /></div>
                    <div> <input type="text" name="phone" onChange={this.fieldsOnChangeClient} placeholder="numero de telephone du client" /></div>
                    <div><textarea name="street" onChange={this.fieldsOnChangeClientAdresse} placeholder="rue" ></textarea></div>
                    <div><input type="text" name="city" onChange={this.fieldsOnChangeClientAdresse} placeholder="ville" /></div>
                    <div><input type="text" name="postCode" onChange={this.fieldsOnChangeClientAdresse} placeholder="Code Postal" /></div>
                    <button>Envoyer</button>
                </form>
            </>
        )
    }



}