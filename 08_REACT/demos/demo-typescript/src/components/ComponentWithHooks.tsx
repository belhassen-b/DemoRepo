import { useEffect, useState } from "react"
import Customer from "../interfaces/Customer"

interface Props {

} 

const ComponentWithHooks = (props: Props) => {

  /*
    Lorsque l'on travaille avec le Typescript dans les hooks, il nous faut, pour le hook 'useState()' ajouter un peu plus de détail sur quel type de données seront stockées dans ce state en particulier. De la sorte, on peut avoir plus de contrôle et une meilleure vérification avant le Runtime. Cela dans le but de nous éviter des erreurs plus tard dans le développement. 

    Le typage peut être inféré lorsqu'il s'agit d'un type primitif, comme un booléen, un nombre, etc... mais devient obligatoirement manuel lorsque le type est un type primitif multiple (une variable pouvant contenir, au choix, une chaine de caractère ou un nombre par exemple) ou un type référence comme un Array ou un object (classes / interfaces principalement).
  */

  const [monTexte, setMonTexte] = useState("")
  const [monTableau, setMonTableau] = useState<number[]>([])
  const [monObjet, setMonObjet] = useState<Customer>({firstname: "", lastname: "", age: 25})

  
  const changeMyValues = () => {
    setMonTexte("Blabla")
    setMonTableau([2, 4, 6])
    setMonObjet({
      firstname: "Alain",
      lastname: "DUPONT"
    })
  }
  
  useEffect(() => {
    /*
      Dans le useEffect, on a deux parties principales: 

      - Une section de code qui va concerner tout ce qui sera exécuté lorsque le composant est rendu par React (après sa création et l'affichage en gros)
    */

    console.log("useEffect:", monTexte)
    
    return () => {
      /*
        - Une section de code qui va concerner tout ce qui sera exécuté lorsque le composant va être modifié, donc avant que l'affichage n'ait changé. Par exemple, à la modification du state, le composant est amené à changer, cette section de code aura donc lieu. 
      */
      console.log("return de useEffect:", monTexte)
    }
  }, [monTexte])

  return (
    <>
    <h1>ComponentWithHooks</h1>
    <hr />
      <div>
        <div>
          <input type="text" value={monTexte} onInput={(e) => setMonTexte((e.target as HTMLInputElement).value)} />
        </div>
        <p>La valeur de monTexte est : <b>{monTexte}</b></p>
        <p>La valeur de monTableau est : <b>[{monTableau.join(", ")}]</b></p>
        <p>La valeur de monObjet est : <b>{JSON.stringify(monObjet)}</b></p>
      </div>
      <button onClick={changeMyValues}>Change Values</button>
    </>
  )
}

export default ComponentWithHooks