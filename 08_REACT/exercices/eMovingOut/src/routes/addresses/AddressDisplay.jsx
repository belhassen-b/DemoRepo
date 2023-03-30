import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const AddressDisplay = (props) => {
  const user = useSelector(state => state.auth.user)
  const address = useSelector(state => state.addresses.addresses).find(a => a.id === props.addressId)

  return (
    <div className="m-3 border border-info p-3 d-flex align-items-center rounded">
      <span>{address.streetNumber} {address.streetName} - {address.postalCode} {address.cityName}</span>
      {user && <Link to={`/addresses/edit/${props.addressId}?mode=edit`} className="btn btn-outline-warning ms-auto"><i className="bi bi-pencil-square"></i></Link>}
      {user && <Link to={`/addresses/delete/${props.addressId}?mode=delete`} className="btn btn-outline-danger ms-2"><i className="bi bi-trash"></i></Link>}
    </div>
  )
}

export default AddressDisplay