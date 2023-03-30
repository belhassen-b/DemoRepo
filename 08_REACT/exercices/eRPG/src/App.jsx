import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { signOut } from "./routes/auth/authSlice";
import { fetchCharacters } from "./routes/characters/charactersSlice";
import { fetchCharClasses } from "./routes/charClasses/charClassesSlice";
import { fetchEnnemies } from "./routes/ennemies/ennemiesSlice";
import { fetchWeapons } from "./routes/weapons/weaponsSlice";

function App() {
  const user = useSelector(state => state.authSlice.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
    dispatch(fetchCharClasses())
    dispatch(fetchWeapons())
    dispatch(fetchEnnemies())
  }, [dispatch])
  
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> eRPG</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#eRPG-navbar" aria-controls="eRPG-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="eRPG-navbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/`}>Home</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to={`/characters`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Player
                  </NavLink>
                  <ul className="dropdown-menu">
                  <li className="nav-item">
                      <NavLink className="nav-link" to={`/characters`}>Characters List</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={`/weapons`}>Weapons List</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to={`/charClasses`}>Classes List</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" to={`/ennemies`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Gamemaster
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <NavLink className="nav-link" to={`/ennemies`}>Ennemies List</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              {user ? (
                <button className="ms-auto btn btn-secondary" onClick={() => dispatch(signOut())}>Sign Out</button>
                ) : (
                <>
                  <Link className="ms-auto btn btn-outline-info" to={`/auth?mode=Sign+Up`}>Sign Up</Link>
                  <Link className="ms-2 btn btn-primary" to={`/auth?mode=Sign+In`}>Sign In</Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        <div className="my-3 row">
          <div className="col-10 offset-1 bg-dark rounded p-3 text-light">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
