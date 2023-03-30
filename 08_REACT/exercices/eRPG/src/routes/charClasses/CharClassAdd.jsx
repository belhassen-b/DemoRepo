import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCharClass } from "./charClassesSlice"

const CharClassAdd = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const nameRef = useRef()
  const hitDiceTypeRef = useRef()

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
      <h3>Add Character Class</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name: </label>
          <input type="text" required className="form-control" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="hitDiceType" className="form-label">Hit dice: </label>
          <select required className="form-select" ref={hitDiceTypeRef}>
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
          <button className="btn btn-success"><i className="bi bi-send"></i> Send</button>
        </div>
      </form>
    </>
  )
}

export default CharClassAdd