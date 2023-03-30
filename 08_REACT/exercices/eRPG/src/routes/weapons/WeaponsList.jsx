import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import WeaponDisplay from "./WeaponDisplay"

const WeaponsList = () => {
  const user = useSelector(state => state.authSlice.user)
  const weapons = useSelector(state => state.weaponsSlice.weapons)

  return (
    <>
      <div className="d-flex align-items-center">
        <h3>Weapons List</h3>
        {user && <Link className="ms-auto btn btn-outline-success" to={`/weapons/add`}><i className="bi bi-plus-circle"></i> Add</Link>}
      </div>
      <hr />
      {weapons.length === 0 ?
      <p>There is no weapon in the database!</p> : 
      weapons.map(w => <WeaponDisplay key={w.id} weaponId={w.id} />)}
    </>
  )
}

export default WeaponsList