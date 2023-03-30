import { useState } from "react";
import ComponentA from "./ComponentA";
import FormComponent from "./FormComponent";

const MainComponent = (props) => {
  
  /*
    Pour manipuler des valeurs et obtenir un auto-refresh de nos éléments HTML, dans le cadre d'un composant de type stateless, il va nous falloir utiliser un hook : useState()

    Ce hook fonctionne en prennant en valeur d'initialisation la valeur de base qu'aura la variable utilisable dans le reste de notre code. Cette variable proviendra du résultat de cette fonction, qui est un tableau à deux élément : 
    - La variable de state
    - Une fonction permettant le changement de ce state et le re-rendu de notre composant
  */
  const [maValeur, setMaValeur] = useState(+props.maValeur)
  const [monTexte, setMonTexte] = useState("")
  const [compAVisible, setCompAVisible] = useState(false)
  
  /* 
  Pour obtenir une version 'number' d'une chaine de caractère, 
  il suffit d'utiliser la syntaxe ci-dessous en précédant 
  la variable d'un '+' 
  */ 
 // console.log(typeof maValeur);


 const onInputHandler = (event) => {
  setMaValeur(+event.target.value)
 }

 const onMonTexteInputHandler = (event) => {
  // setMonTexte(previousState => previousState + " " + event.target.value)
  setMonTexte((previousState) => {
    console.log("Je modifie monTexte")
    console.log("Le previousState de monTexte vallait : " + previousState)
    return event.target.value
  })
 }
 
  return (
    <>
    <div>
      <input type="number" value={maValeur} onInput={onInputHandler}/>
      <span>Ma valeur vaut : <b>{maValeur}</b></span>
    </div>
    <div>
      <input type="text" value={monTexte} onInput={onMonTexteInputHandler} />
      <span>Mon texte vaut <b>{monTexte}</b></span>
    </div>
    <div>
      <button onClick={() => setCompAVisible(!compAVisible)} >Toggle ComponentA</button>
      <hr />
      {compAVisible && <ComponentA />}
      <hr />
      <FormComponent onAddUser={(user) => console.log(user)}/>
    </div>
    </>
  )
}

export default MainComponent