import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { deleteWeapon } from "./weaponsSlice"

const WeaponDelete = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const nameRef = useRef()
  const diceTypeRef = useRef()
  const damageTypeRef = useRef()

  const { weaponId } = useParams()
  const weapon = useSelector(state => state.weaponsSlice.weapons).find(w => w.id === weaponId)

  const submitFormHandler = async (event) => {
    event.preventDefault()

    await dispatch(deleteWeapon(weaponId))

    navigate(`/weapons`)

  }


  return (
    <>
      <h3>Delete Weapon</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: </label>
          <input type="text" disabled defaultValue={weapon?.name} className="form-control" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="diceType" className="form-label">diceType: </label>
          <select disabled defaultValue={weapon?.diceType} className="form-select" ref={diceTypeRef}>
            <option value="">Select a dice type</option>
            <option value="4">d4</option>
            <option value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10</option>
            <option value="12">d12</option>
            <option value="20">d20</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="damageType" className="form-label">damageType: </label>
          <select disabled defaultValue={weapon?.damageType} className="form-select" ref={damageTypeRef}>
            <option value="">Select a damage type</option>
            <option value="slashing">Slashing</option>
            <option value="piercing">Piercing</option>
            <option value="bludgeoning">Bludgeoning</option>
            <option value="fire">Fire</option>
            <option value="electric">Electric</option>
            <option value="poison">Poison</option>
          </select>
        </div>
        <div className="text-end">
          <button className="btn btn-danger"><i className="bi bi-trash"></i> Confirm</button>
        </div>
      </form>
    </>
  )
}

export default WeaponDelete