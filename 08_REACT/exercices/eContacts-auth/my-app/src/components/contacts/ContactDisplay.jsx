const ContactDisplay = (props) => {
  const contact = props.contact
  const isLogged = props.isLogged
  const setSelectedContactAndFormMode = props.setSelectedContactAndFormMode

  const getContactAge = () => {
    const today = new Date()
    const todayCopy = new Date()
    const doB = new Date(contact.dateOfBirth)

    todayCopy.setFullYear(doB.getFullYear())

    if (todayCopy > doB) {
      return today.getFullYear() - doB.getFullYear() - 1
    } else {
      return today.getFullYear() - doB.getFullYear()
    }
  }

  return (
    <div className="m-2 border border-info rounded p-3 row">
      <div className="col-4 d-flex justify-content-center">
        <img src={contact.avatarURL} alt="Contact Avatar" style={{width: "250px", height: "250px", objectFit: "contain", borderRadius: "50%"}} />
      </div>
      <div className="col-8">
        <div className="d-flex align-items-center">
          <h3>{contact.firstname} {contact.lastname}</h3>
          {isLogged &&<button className="ms-auto btn btn-warning" onClick={() => setSelectedContactAndFormMode({contact, mode: 'edit'})}><i className="bi bi-pencil-square"></i></button>}
          {isLogged &&<button className="ms-2 btn btn-danger" onClick={() => setSelectedContactAndFormMode({contact, mode: 'delete'})}><i className="bi bi-trash"></i></button>}
        </div>
        <hr />
        <ul>
          <li><b>Date de naissance: </b> {new Date(contact.dateOfBirth).toLocaleDateString()}</li>
          <li><b>Age: </b> {getContactAge()} an{getContactAge() > 1 && 's'}</li>
          <li><b>Email: </b> {contact.email}</li>
          <li><b>Numéro de téléphone: </b> {contact.phoneNumber}</li>
        </ul>
        <hr />
      </div>
    </div>
  )
}

export default ContactDisplay