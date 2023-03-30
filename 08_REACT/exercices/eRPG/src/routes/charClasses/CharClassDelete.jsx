import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { deleteCharClass } from "./charClassesSlice"

const CharClassDelete = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const nameRef = useRef()
  const hitDiceTypeRef = useRef()

  const { charClassId } = useParams()
  const charClass = useSelector(state => state.charClassesSlice.charClasses).find(c => c.id === charClassId)

  const submitFormHandler = async (event) => {
    event.preventDefault()

    await dispatch(deleteCharClass(charClassId))

    navigate(`/charClasses`)

  }


  return (
    <>
      <h3>Delete Character Class</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: </label>
          <input type="text" disabled defaultValue={charClass.name} className="form-control" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="hitDiceType" className="form-label">Hit dice: </label>
          <select disabled defaultValue={charClass.hitDiceType} className="form-select" ref={hitDiceTypeRef}>
            <option value="">Select a dice type</option>
            <option value="4">d4</option>
            <option value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10</option>
            <option value="12">d12</option>
            <option value="20">d20</option>
          </select>
        </div>
        <div className="text-end">
          <button className="btn btn-danger"><i className="bi bi-trash"></i> Confirm</button>
        </div>
      </form>
    </>
  )
}

export default CharClassDelete