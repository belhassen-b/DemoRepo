import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { signOut } from "../../routes/auth/authSlice"

const NavBar = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> eMovingOut</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to={`/`}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/people`}>People</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/addresses`}>Addresses</NavLink>
              </li>
            </ul>
            {user ? (
              <button className="btn btn-secondary ms-auto" onClick={() => dispatch(signOut())}>Sign Out</button>
            ) : (
              <>
                <Link to={`/auth?mode=Sign+Up`} className="ms-auto btn btn-outline-info me-2">Sign Up</Link>
                <Link to={`/auth?mode=Sign+In`} className="btn btn-primary">Sign In</Link>
              </>
            )}
          </div>
        </div>
      </nav>
  )
}

export default NavBar