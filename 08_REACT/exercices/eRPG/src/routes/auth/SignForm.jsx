import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { signIn, signUp } from "./authSlice"

const SignForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode') ?? 'Sign In'

  const submitFormHandler = async (event) => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const credentials = {
      email,
      password,
      returnSecureToken: true
    }

    emailRef.current.value = ""
    passwordRef.current.value = ""

    if (mode === 'Sign In') {
      await dispatch(signIn(credentials))
    } else {
      await dispatch(signUp(credentials))
    }

    navigate(`/`)
  }

  return (
    <>
      <h3>{mode}</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input type="email" id="email" required ref={emailRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password: </label>
          <input type="password" id="password" required ref={passwordRef} className="form-control" />
        </div>
        <div className="text-end">
          <button className={`btn btn-${mode === 'Sign In' ? 'primary' : 'info'}`}>{mode}</button>
        </div>
      </form>
    </>
  )
}

export default SignForm