import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addCharClass } from "./charClassesSlice"

const CharClassEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const nameRef = useRef()
  const hitDiceTypeRef = useRef()

  const { charClassId } = useParams()
  const charClass = useSelector(state => state.charClassesSlice.charClasses).find(c => c.id === charClassId)

  const submitFormHandler = async (event) => {
    event.preventDefault()

    const charClassValues = {
      name: nameRef.current.value,
      hitDiceType: +hitDiceTypeRef.current.value
    }

    await dispatch(addCharClass(charClassValues))

    navigate(`/charClasses`)

  }


  return (
    <>
      <h3>Edit Character Class</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: </label>
          <input type="text" required defaultValue={charClass.name} className="form-control" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="hitDiceType" className="form-label">Hit dice: </label>
          <select required defaultValue={charClass.hitDiceType} className="form-select" ref={hitDiceTypeRef}>
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
          <button className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
        </div>
      </form>
    </>
  )
}

export default CharClassEdit