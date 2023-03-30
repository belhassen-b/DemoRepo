import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SignForm from "./components/auth/SignForm";
import ContactDisplay from "./components/contacts/ContactDisplay";
import ContactForm from "./components/contacts/ContactForm";
import Modal from "./components/shared/Modal";
import { BASE_DB_URL, SIGN_IN_URL, SIGN_UP_URL } from "./firebaseConfig";

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [signFormMode, setSignFormMode] = useState("")
  const [contactFormMode, setContactFormMode] = useState("")
  const [contacts, setContacts] = useState([])
  const [selectedContact, setSelectedContact] = useState(null)

  const signFormSubmitHandler = async (credentials) => {
    try {
      const URL = signFormMode === "Sign In" ? SIGN_IN_URL : SIGN_UP_URL

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        throw new Error("Il y a eu un problème lors de " + signFormMode === 'Sign In' ? "la connexion" : "l'enregistrement")
      }

      const data = await response.json() // Dans l'objet data, on aura un JSON qui contiendra plusieurs infos. Celle qui nous intéresse est le .idToken, qui est le token à utiliser pour nos requêtes API de Base de Données 

      localStorage.setItem('token', data.idToken) // Pour le conserver, on le met dans le stockage local du navigateur
      setIsLogged(true)
      setSignFormMode("")

    } catch (error) {
      console.error(error.message);
    }
  }

  const logOutHandler = () => {
    localStorage.removeItem('token')    
    setIsLogged(false)
  }

  const refreshContacts = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}contacts.json`)

      if (!response.ok) {
        throw new Error("Il y a eu un problème lors de la récupération des contacts.")
      }

      const data = await response.json()

      const tmpArray = []

      for (const key in data) {
        tmpArray.push({id: key, ...data[key]})
      }

      setContacts(tmpArray)

    } catch (error) {
      console.error(error.message);
    }
  }

  const setSelectedContactAndFormMode = ({contact, mode}) => {
    setSelectedContact(contact)
    setContactFormMode(mode)
  }

  const addContactHandler = async (contact) => {
    if (isLogged) {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const response = await fetch(`${BASE_DB_URL}contacts.json?auth=${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
          })

          if (!response.ok) {
            throw new Error("Il y a eu un soucis lors de l'ajout d'un contact.")
          }

          const data = await response.json()

          setContacts([...contacts, {id: data.name, ...contact}])
          setContactFormMode("")

        } catch (error) {
          console.error(error.message);
        }
      }
    }
  }

  const editContactHandler = async ({id, ...contact}) => {
    if (isLogged) {
      const token = localStorage.getItem('token')
      if (token) {
        if (contacts.find(c => c.id === id)) {
          try {
            const response = await fetch(`${BASE_DB_URL}contacts/${id}.json?auth=${token}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(contact)
            })

            if (!response.ok) {
              throw new Error("Il y a eu un soucis lors de l'édition du contact.")
            }

            const data = await response.json()

            setContacts([...contacts.filter(c => c.id !== id), {id, ...data}])
            setContactFormMode("")
          } catch (error) {
            console.error(error.message);
          }
        }
      }
    }
    
  }

  const deleteContactHandler = async (contactId) => {
    if (isLogged) {
      const token = localStorage.getItem('token')
      if (token) {
        if (contacts.find(c => c.id === contactId)) {
          try {
            const response = await fetch(`${BASE_DB_URL}contacts/${contactId}.json?auth=${token}`, {
              method: "DELETE"
            })

            if (!response.ok) {
              throw new Error("Il y a eu un soucis lors de la suppression du contact.")
            }

            setContacts([...contacts.filter(c => c.id !== contactId)])
            setContactFormMode("")
          } catch (error) {
            console.error(error.message);
          }
        }
      }
    }
  }

  useEffect(() => {
    refreshContacts()
  }, [])

  return (
    <div className="App">
      {signFormMode === "Sign In" && createPortal(<Modal onClose={() => setSignFormMode("")} modalTitle={"Sign In"}>
        <SignForm mode="Sign In" onSubmit={signFormSubmitHandler} />
        </Modal>, document.getElementById("modal-root"))}
      {signFormMode === "Sign Up" && createPortal(<Modal onClose={() => setSignFormMode("")} modalTitle={"Sign Up"}>
        <SignForm mode="Sign Up" onSubmit={signFormSubmitHandler} />
      </Modal>, document.getElementById("modal-root"))}
      {contactFormMode === "add" && createPortal(<Modal onClose={() => setContactFormMode("")} modalTitle="Add Contact">
        <ContactForm mode="add" onAdd={addContactHandler} />
      </Modal>, document.getElementById("modal-root"))}
      {contactFormMode === "edit" && createPortal(<Modal onClose={() => setContactFormMode("")} modalTitle="Edit Contact">
        <ContactForm mode="edit" onEdit={editContactHandler} contact={selectedContact} />
      </Modal>, document.getElementById("modal-root"))}
      {contactFormMode === "delete" && createPortal(<Modal onClose={() => setContactFormMode("")} modalTitle="Delete Contact">
        <ContactForm mode="delete" onDelete={deleteContactHandler} contact={selectedContact} />
      </Modal>, document.getElementById("modal-root"))}
     <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <span className="navbar-brand" style={{cursor: "pointer"}}>
            <i className="bi bi-globe"></i> eContacts
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContacts" aria-controls="navbarContacts" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContacts">
            {isLogged ? (
              <button onClick={logOutHandler} className="ms-auto btn btn-secondary">Sign Out</button>
              ) : (
                <>
                  <button onClick={() => setSignFormMode("Sign Up")} className="ms-auto btn btn-outline-info">Register</button>
                  <button onClick={() => setSignFormMode("Sign In")} className="ms-2 btn btn-primary">Sign In</button>
                </>
            )}
          </div>
        </div>
      </nav>
     </header>
     <main className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 rounded bg-dark text-light p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Contacts List</h3>
              {isLogged && <button className="btn btn-success" onClick={() => setSelectedContactAndFormMode({mode: "add"})}><i className="bi bi-plus-circle"></i> Add</button>}
            </div>
            <hr />
            {contacts.length === 0 ? 
            <p>Il n'y a pas de contact dans la base de données !</p> : 
            contacts.map(contact => <ContactDisplay isLogged={isLogged} key={contact.id} contact={contact} setSelectedContactAndFormMode={setSelectedContactAndFormMode} />)}
          </div>
        </div>
     </main>
    </div>
  );
}

export default App;
