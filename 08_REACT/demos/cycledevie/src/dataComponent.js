import { Component } from "react"
import { getData, getInfoPokeApi } from "./services/data.service"

export class DataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        // getData().then(data => {
        //     this.setState({ data : data})
        // })
        getInfoPokeApi().then(res => {
            console.log(res.data)
        })
    }


    render(){
        return(
            <div>
                {
                    this.state.data.length == 0 ? <div>En cours de chargement ....</div>
                    :
                    (<div>
                        {this.state.data.map((e,i) => (<div key={i}>{e}</div>))}
                    </div>)
                }
            </div>
        )
    }
}

