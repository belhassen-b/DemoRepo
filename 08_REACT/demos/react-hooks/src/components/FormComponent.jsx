import { useRef } from "react";

const FormComponent = (props) => {
  /*
    Dans le cas où nous souhaitons réaliser un formulaire, il est possible de nous servir d'un hook pour récupérer seulement au moment où l'on envoie le formulaire les valeurs de nos champs.

    Pour ce faire, nous allons utiliser useRef(), dont le résultat de son appel sera une référence unique qui sera liée à un élément HTML de notre choix (ici un input donc). Via cette référence, nous pourrons, dans notre logique métier, cibler des éléments HTML au moment opportun pour par la suite récupérer leur valeur, modifier leur style, leurs classes, etc...

    Ici, nous allons donc nous servir des références pour récupérer au moment de l'appui du bouton d'envoi les valeurs de notre client et provoquer l'appel de props.onAddUser() en lui passant en paramètre le nouvel utilisateur, qui sera, dans le parent, logué en console.
  */
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const emailRef = useRef()
  const phoneNumberRef = useRef()

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value
    }

    props.onAddUser(newUser)

  }

  return (
    <>
      <h1>FormComponent</h1>
      <hr />

    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="firstname">Firstname: </label>
        <input type="text" id="firstname" ref={firstnameRef} required />
      </div>
      <div>
        <label htmlFor="lastname">Lastname: </label>
        <input type="text" id="lastname" ref={lastnameRef} required />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" ref={emailRef} required />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone number: </label>
        <input type="text" id="phoneNumber" ref={phoneNumberRef} required />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    </>
  )
}

export default FormComponent