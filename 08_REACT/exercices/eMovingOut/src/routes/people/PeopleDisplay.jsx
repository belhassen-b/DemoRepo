import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const PeopleDisplay = (props) => {
  const people = useSelector(state => state.people.people).find(p => p.id === props.peopleId)
  const user = useSelector(state => state.auth.user)
  const address = useSelector(state => state.addresses.addresses).find(a => a.id === people.address)

  return (
    <div className="m-3 rounded border border-info p-3">
      <div className="d-flex align-items center">
        <h5>{people.firstname} {people.lastname}</h5>
        {user && <Link to={`/people/edit/${props.peopleId}?mode=edit`} className="ms-auto btn btn-outline-warning"><i className="bi bi-pencil-square"></i></Link>}
        {user && <Link to={`/people/delete/${props.peopleId}?mode=delete`} className="ms-2 btn btn-outline-danger"><i className="bi bi-trash"></i></Link>}
      </div>
      <hr />
      <ul>
        <li><b>Email: </b>{people.email}</li>
        <li><b>Phone number: </b>{people.phone}</li>
        {people.address && <li><b>Address: </b>{address.streetNumber} {address.streetName} - {address.postalCode} {address.cityName}</li>}
      </ul>
    </div>
  )
}

export default PeopleDisplay