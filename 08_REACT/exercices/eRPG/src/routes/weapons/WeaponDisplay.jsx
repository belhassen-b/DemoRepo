import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const WeaponDisplay = (props) => {
  const weapon = useSelector(state => state.weaponsSlice.weapons).find(w => w.id === props.weaponId)
  const user = useSelector(state => state.authSlice.user)

  return (
    <div className="border border-info rounded p-3 m-3">
      <div className="d-flex align-items-center">
        <h5>{weapon.name}</h5>
        {user && <Link to={`/weapons/edit/${props.weaponId}`} className="ms-auto btn btn-outline-warning p-1 px-2"><i className="bi bi-pencil-square"></i></Link>}
        {user && <Link to={`/weapons/delete/${props.weaponId}`} className="ms-2 btn btn-outline-danger p-1 px-2"><i className="bi bi-trash"></i></Link>}
      </div>
      <hr />
      <ul>
        <li><b>Dice type: </b>d{weapon.diceType}</li>
        <li><b>Damage type: </b>{weapon.damageType.substring(0, 1).toUpperCase() + weapon.damageType.substring(1).toLowerCase()}</li>
      </ul>
    </div>
  )
}

export default WeaponDisplay