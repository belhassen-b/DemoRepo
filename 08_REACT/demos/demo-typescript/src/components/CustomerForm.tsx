import { FormEvent, MutableRefObject, useRef } from "react"
import Customer from "../interfaces/Customer"

interface Props {
  onAddCustomer: (customer: Customer) => void
}

const CustomerForm = (props: Props) => {

  /*
    Pour l'utilisation de useRef() en Typescript, il va nous falloir définir de quel type d'élément HTML la référence sera. Pour ce faire, on doit ajouter, avant l'affectation dans la constante, le type de notre retour de la fonction useRef(). La syntaxe requise est l'utilisation du mot-clé 'as' à droite de la fonction useRef(). 
    
    En gros, on va dire que l'on stocke dans une constante une référence dédiée à un type d'élément HTML précis, ce dans le but d'éviter plus tard de placer une référence d'image dans un input. 
  */

  const firstnameRef = useRef() as MutableRefObject<HTMLInputElement>
  const lastnameRef = useRef() as MutableRefObject<HTMLInputElement>
  const ageRef = useRef() as MutableRefObject<HTMLInputElement>

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newCustomer: Customer = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      age: +ageRef.current.value
    }

    props.onAddCustomer(newCustomer)
  }

  return (
    <>
      <h1>CustomerForm</h1>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div>
          <label htmlFor="firstname">Firstname: </label>
          <input type="text" required ref={firstnameRef} />
        </div>
        <div>
          <label htmlFor="lastname">Lastname: </label>
          <input type="text" required ref={lastnameRef} />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="number" required ref={ageRef} min={1} />
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default CustomerForm