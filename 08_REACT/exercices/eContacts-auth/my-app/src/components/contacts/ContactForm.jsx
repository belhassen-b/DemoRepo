import { useRef } from "react"

const ContactForm = (props) => {
  const mode = props.mode
  const contact = props.contact

  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const emailRef = useRef()
  const phoneNumberRef = useRef()
  const dateOfBirthRef = useRef()
  const avatarURLRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    if (mode === 'delete') {
      props.onDelete(contact.id)
    } else {

      const firstname = firstnameRef.current.value
      const lastname = lastnameRef.current.value
      const email = emailRef.current.value
      const phoneNumber = phoneNumberRef.current.value
      const dateOfBirth = dateOfBirthRef.current.value
      const avatarURL = avatarURLRef.current.value

      const newContactValues = {
        firstname,
        lastname,
        email,
        phoneNumber,
        dateOfBirth,
        avatarURL
      }

      firstnameRef.current.value = ""
      lastnameRef.current.value = ""
      emailRef.current.value = ""
      phoneNumberRef.current.value = ""
      dateOfBirthRef.current.value = ""
      avatarURLRef.current.value = ""

      if (mode === 'add') {
        props.onAdd(newContactValues)
      } else if (mode === 'edit') {
        props.onEdit({...newContactValues, id: contact.id})
      }
    }
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">Prénom:</label>
        <input type="text" className="form-control" ref={firstnameRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={contact?.firstname} />
        {/* Dans le cadre de notre input, il nous faut pouvoir rendre les valeurs modifiables seulement si l'on n'est pas en train de supprimer. De même, les valeurs sont requises si l'on est en ajout ou en édition. Enfin, pour que lors d'une édition ou d'une suppression on puisse avoir l'affichage des valeurs du contact, on passe par l'attribut 'defaultValue'.  */}
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">Nom:</label>
        <input type="text" className="form-control" ref={lastnameRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={contact?.lastname} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" ref={emailRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={contact?.email} />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone:</label>
        <input type="text" className="form-control" ref={phoneNumberRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={contact?.phoneNumber} />
      </div>
      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label">Date de naissance:</label>
        <input type="date" className="form-control" ref={dateOfBirthRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={contact?.dateOfBirth} />
      </div>
      <div className="mb-3">
        <label htmlFor="avatarURL" className="form-label">URL de l'Avatar:</label>
        <input type="text" className="form-control" ref={avatarURLRef} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={contact?.avatarURL} />
      </div>
      <div className="text-end">
        <button className={`btn btn-${mode === 'delete' ? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>{mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Ajouter'}</button>
      </div>
    </form>
  )
}

export default ContactForm