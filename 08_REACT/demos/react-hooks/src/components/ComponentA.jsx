import { useEffect, useState } from "react"
import heartSVG from '../assets/heart-icon.svg'

const ComponentA = () => {
  /*
    Pour faire s'effectuer des lignes de code dans notre composant stateless seulement au moment où ce composant est rendu, il est possible de nous servir d'un autre hook : useEffect()

    Ce hook prend en paramètre une fonction fléchée, ainsi qu'un tableau des dépendances. 

    La fonction fléchée est une fonction qui va servir à réaliser X lignes de code au rendu ainsi qu'à chaque changement d'une des dépendance de notre useEffect(). Les dépendances seront généralement les variables modifiables dans notre composant (celles branchées sur un useState() du coup).

    Le useEffect() peut également retourner une fonction, qui aura des instructions exécutées lors d'un re-rendu de notre composant.

    On peut ainsi, si l'on le veut, réaliser une analogie entre le useEffect et le corps de la fonction anonyme passée en paramètre avec un componentDidMount()) et la fonction de retour de ce useEffect avec un componentDidUpdate() / componentWillUnmount() 

  */

  const [monTexte, setMonTexte] = useState("")
  const [monNombre, setMonNombre] = useState(0)

  useEffect(() => {
   console.log("ComponentA est rendu!")
    console.log(monTexte)
   return () => {
    console.log("ComponentA s'en va!");
   }
 }, [monTexte])
 
  useEffect(() => {
    console.log("Second useEffect");
  }, [monNombre])

  return (
  <>
    <h1>ComponentA</h1>
    <hr />
    <div>
      <img src={heartSVG} alt="Heart" height={100} width={100} />
      <input type="text" value={monTexte} onInput={(e) => setMonTexte(e.target.value)} />
      <span>Mon texte vaut : <b>{monTexte}</b></span>
    </div>
    <div>
      <input type="number" value={monNombre} onInput={(e) => setMonNombre(+e.target.value)} />
      <span>Mon nombre vaut : <b>{monNombre}</b></span>
    </div>
  </>
  )
}

export default ComponentA