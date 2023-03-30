import { FormEvent, PureComponent } from "react";

/*
  Lorsque l'on réalise des composants de type Stateful en React Typescript, les deux étapes essentielles pour leur fonctionnement est l'ajout de deux interfaces: une pour les props, et une pour le state. 

  Ces deux interfaces seront à renseigner lors de l'héritage de Component ou de PureComponent. Ce renseignement passer par un héritage de type générique. On spécifié que l'on hérite d'une classe avec un paramétrage particulier. L'utilisation de génériques passe par une notation en chevrons.

  Une fois les deux interfaces reliées, le fonctionnement d'un composant Stateful est le même qu'en Javascript.
*/

interface Props {
  blabla?: string;
}

interface State {
  monTexte: string;
}

class ClassComponent extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      monTexte: "Du texte"
    }
  }

  changeStateAndLog = (event: FormEvent<HTMLInputElement>) => {
    this.setState({monTexte: (event.target as HTMLInputElement).value})
    console.log(`J'ai changé la valeur de l'input de '${this.state.monTexte}' à '${(event.target as HTMLInputElement).value}'`)
  }
  
  render () {
    return (
      <>
      <h1>ClassComponent</h1>
      <hr />
      {this.props.blabla && <p>{this.props.blabla}</p>}
      <input type="text" value={this.state.monTexte} onInput={(e) => this.setState({monTexte: (e.target as HTMLInputElement).value})} />
      <input type="text" value={this.state.monTexte} onInput={this.changeStateAndLog} />
      </>
    )
  }
}

export default ClassComponent