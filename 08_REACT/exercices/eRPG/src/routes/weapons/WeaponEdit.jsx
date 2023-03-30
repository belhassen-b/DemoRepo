import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editWeapon } from "./weaponsSlice"

const WeaponEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const nameRef = useRef()
  const diceTypeRef = useRef()
  const damageTypeRef = useRef()

  const { weaponId } = useParams()
  const weapon = useSelector(state => state.weaponsSlice.weapons).find(w => w.id === weaponId)

  const submitFormHandler = async (event) => {
    event.preventDefault()

    const weaponValues = {
      name: nameRef.current.value,
      diceType: +diceTypeRef.current.value,
      damageType: damageTypeRef.current.value
    }

    await dispatch(editWeapon({id: weaponId, ...weaponValues}))

    navigate(`/weapons`)

  }


  return (
    <>
      <h3>Edit Weapon</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: </label>
          <input type="text" required defaultValue={weapon?.name} className="form-control" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="diceType" className="form-label">diceType: </label>
          <select required defaultValue={weapon?.diceType} className="form-select" ref={diceTypeRef}>
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
          <select required defaultValue={weapon?.damageType} className="form-select" ref={damageTypeRef}>
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
          <button className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
        </div>
      </form>
    </>
  )
}

export default WeaponEdit