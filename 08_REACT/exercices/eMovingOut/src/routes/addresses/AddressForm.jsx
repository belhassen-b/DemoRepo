import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { addAddress, deleteAddress, editAddress } from "./addressesSlice"

const AddressForm = () => {
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  const { addressId } = useParams()
  const address = useSelector(state => state.addresses.addresses).find(a => a.id === addressId)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const streetNumberRef = useRef()
  const streetNameRef = useRef()
  const postalCodeRef = useRef()
  const cityNameRef = useRef()

  const submitFormHandler = async (e) => {
    e.preventDefault()

    if (mode === 'delete') {
      await dispatch(deleteAddress(addressId))
    } else {

      const streetNumber = +streetNumberRef.current.value
      const streetName = streetNameRef.current.value
      const postalCode = postalCodeRef.current.value
      const cityName = cityNameRef.current.value

      streetNumberRef.current.value = ""
      streetNameRef.current.value = ""
      postalCodeRef.current.value = ""
      cityNameRef.current.value = ""

      const addressValues = {
        streetNumber,
        streetName,
        postalCode,
        cityName
      }

      if (mode === 'add') {
        await dispatch(addAddress(addressValues))
      } else if (mode === 'edit') {
        await dispatch(editAddress({id: addressId, ...addressValues}))
      }
    }

    navigate(`/addresses`)
  }

  return (
    <>
      <h3>{mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase()} Address</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="streetNumber" className="form-label">Street number: </label>
          <input type="number" id="streetNumber" className="form-control" ref={streetNumberRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={address?.streetNumber} />
        </div>
        <div className="mb-3">
          <label htmlFor="streetName" className="form-label">Street name: </label>
          <input type="text" id="streetName" className="form-control" ref={streetNameRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={address?.streetName} />
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">Postal code: </label>
          <input type="text" id="postalCode" className="form-control" ref={postalCodeRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={address?.postalCode} />
        </div>
        <div className="mb-3">
          <label htmlFor="cityName" className="form-label">City name: </label>
          <input type="text" id="cityName" className="form-control" ref={cityNameRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={address?.cityName} />
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

export default AddressForm