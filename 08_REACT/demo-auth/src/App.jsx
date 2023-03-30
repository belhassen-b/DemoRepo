import { useRef, useState } from "react";
import ModalComponent from "./components/shared/ModalComponent";
import { createPortal } from "react-dom";
import { API_KEY } from "./apiKey";

const App = () => {
  // Pour gérer la visibilité de notre modal, il nous faut utiliser une variable de state afin que le rendu de notre appli soit synchronisé avec cette variable
  const [modalVisible, setModalVisible] = useState(false)

  const BASE_DB_URL = "https://m2i-demo-auth-default-rtdb.europe-west1.firebasedatabase.app/"

  // Si l'on veut, on peut utiliser une variable pour savoir si l'utilisateur est en train de se connecter ou de s'enregistrer
  const [isLogging, setIsLogging] = useState(false)

  // De même, il nous faut une variable pour savoir si l'utilisateur est connecté ou non
  const [isLogged, setIsLogged] = useState(false)
  
  // Pour travailler avec un formulaire et obtenir les valeurs des champs seulement au moment où l'on va envoyer le formulaire, le plus simple est l'utilisation de useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  
  // Notre fonction d'envoie de formulaire ayant besoin d'un requêtage API, il nous faut utiliser une version asynchrone (async et await)
  const submitFormHandler = async (event) => {
    event.preventDefault()

    let BASE_URL = ""

    // En fonction de si l'utilisateur se logue ou s'enregistre, l'endpoint API est différent
    if (isLogging) {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

    } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }

    try {

      /* 
        La requête est cependant la même, que l'on cible l'endpoint de connexion ou d'enregistrement
        Via l'utilisation de fetch, on peut envoyer une requête API.

        Pour utiliser fetch(), il faut passer deux paramètres : 
          - L'endpoint à requêter (une addresse URL idéalement en HTTPS)
          - La configuration de la requête qui se présente sous la forme d'un objet en plusieurs parties :
            - La méthode (par défaut GET)
            - Les headers (pour par exemple ajouter le type de document que l'on envoie)
            - Le corps (les données à envoyer à l'API pour qu'elle puisse les traiter et offrir une réponse appropriée)

      */
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true
        })
      })
  
      // Si la réponse n'a pas comme code de retour un OK (200), alors on va envoyer une erreur
      if(!response.ok) {
        throw new Error("Il y a eu une erreur !")
      } 

      // Si la réponse est concluante, il va nous falloir extraire les données de la réponse (le body). Pour ce faire, on utilise la méthode asynchrone .json()
      const data = await response.json()
      
      // Dans la réponse se trouve un token qui nous servira par la suite pour faire notre requêtes de gestion de la base de données Firestore. Pour le moment, l'endroit le plus utile où le stocker est le stockage local de notre navigateur
      localStorage.setItem('token', data.idToken)

      emailRef.current.value = ""
      passwordRef.current.value = ""

      setIsLogged(true)
      setModalVisible(false)
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      {/* 
        Pour provoquer le placement d'un composant ou d'HTML à un autre endroit que là où l'on le déclare, il faut utiliser la fonction createPortal() importée de React DOM

        Cette fonction prend deux paramètres :
          - L'élément JSX à rendre (un parent et X enfants)
          - L'emplacement dans le DOM de notre page (le fichier index.html) où sera envoyé l'élément JSX
       */}
      {modalVisible && createPortal(<ModalComponent closeModal={() => setModalVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
        <h3>{isLogging ? 'Sign In' : 'Sign Up'}</h3>
        <button onClick={() => setModalVisible(false)} className="btn btn-outline-dark rounded-circle"><i className="bi bi-x"></i></button>
        </div>
        <hr />
        <form onSubmit={submitFormHandler}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="text" required ref={emailRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password : </label>
            <input type="password" required ref={passwordRef} className="form-control" />
          </div>
          <div className="text-end">
            <button type="button" className="btn btn-outline-info me-2" onClick={() => setIsLogging(!isLogging)}>Switch to {isLogging ? 'Sign Up' : 'Sign In'}</button>
            <button className="btn btn-primary">{isLogging ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </form>
      </ModalComponent>, document.getElementById("modal-root"))}
    <div className="container">
      <div className="row">
        <div className="my-3 col-10 offset-2 bg-dark text-light rounded p-3">
          <h1>App</h1>
          <hr />
          <button className="btn btn-primary" onClick={() => setModalVisible(true)}>Show Modal</button>
          {isLogged && <p>Tu es connecté !</p>}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
