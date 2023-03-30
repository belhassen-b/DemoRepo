import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CharClassDisplay from "./CharClassDisplay"

const CharClassesList = () => {
  const user = useSelector(state => state.authSlice.user)
  const charClasses = useSelector(state => state.charClassesSlice.charClasses)

  return (
    <>
      <div className="d-flex align-items-center">
        <h3>Character Classes List</h3>
        {user && <Link className="ms-auto btn btn-outline-success" to={`/charClasses/add`}><i className="bi bi-plus-circle"></i> Add</Link>}
      </div>
      <hr />
      {charClasses.length === 0 ?
      <p>There is no character class in the database!</p> : 
      charClasses.map(c => <CharClassDisplay key={c.id} charClassId={c.id} />)}
    </>
  )
}

export default CharClassesList