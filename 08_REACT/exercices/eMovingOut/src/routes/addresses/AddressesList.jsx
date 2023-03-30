import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import AddressDisplay from "./AddressDisplay"

const AddressesList = () => {
  const addresses = useSelector(state => state.addresses.addresses)
  const user = useSelector(state => state.auth.user)

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Addresses List</h3>
        {user && <Link to={`/addresses/add?mode=add`} className="btn btn-outline-success"><i className="bi bi-plus-circle"></i> Add</Link>}
      </div>
      <hr />
      {addresses.length === 0 ?
      <p>There is no address in the database!</p> : 
      [...addresses].sort((a, b) => a.id.localeCompare(b.id)).map(a => <AddressDisplay key={a.id} addressId={a.id} />)}
    </>
  )
}

export default AddressesList