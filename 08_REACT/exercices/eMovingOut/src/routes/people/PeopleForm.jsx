import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { addPeople, deletePeople, editPeople } from "./peopleSlice"

const PeopleForm = () => {
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  const { peopleId } = useParams()
  const people = useSelector(state => state.people.people).find(p => p.id === peopleId)
  const addressesList = useSelector(state => state.addresses.addresses)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const addressRef = useRef()

  const submitFormHandler = async (e) => {
    e.preventDefault()

    if (mode === 'delete') {
      await dispatch(deletePeople(peopleId))
    } else {

      const firstname = firstnameRef.current.value
      const lastname = lastnameRef.current.value
      const email = emailRef.current.value
      const phone = phoneRef.current.value
      const address = addressRef.current.value

      firstnameRef.current.value = ""
      lastnameRef.current.value = ""
      emailRef.current.value = ""
      phoneRef.current.value = ""
      addressRef.current.value = ""

      const peopleValues = {
        firstname,
        lastname,
        email,
        phone,
        address
      }

      if (mode === 'add') {
        await dispatch(addPeople(peopleValues))
      } else if (mode === 'edit') {
        await dispatch(editPeople({id: peopleId, ...peopleValues}))
      }
    }

    navigate(`/people`)
  }

  return (
    <>
      <h3>{mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase()} People</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="firstname" className="form-label">Firstname: </label>
          <input type="text" id="firstname" className="form-control" ref={firstnameRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={people?.firstname} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Lastname: </label>
          <input type="text" id="lastname" className="form-control" ref={lastnameRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={people?.lastname} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input type="email" id="email" className="form-control" ref={emailRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={people?.email} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone number: </label>
          <input type="text" id="phone" className="form-control" ref={phoneRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={people?.phone} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address: </label>
          <select id="address" ref={addressRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={people?.address.id} className="form-select">
            {addressesList.map(a => <option key={a.id} value={a.id}>{a.streetNumber} {a.streetName} - {a.postalCode} {a.cityName}</option>)}
          </select>
        </div>
        <div className="text-end">
          <button className={`btn btn-${mode === 'delete' ? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>
            <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirm' : mode === 'edit' ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
    </>
  )
}

export default PeopleForm