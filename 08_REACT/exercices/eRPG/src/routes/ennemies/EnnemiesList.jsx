import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import EnnemyDisplay from "./EnnemyDisplay"

const EnnemiesList = () => {
  const ennemies = useSelector(state => state.ennemiesSlice.ennemies)
  const user = useSelector(state => state.authSlice.user)

  return (
    <>
      <div className="d-flex align-items-center">
        <h3 className="m-0">Ennemies List</h3>
        {user && <Link className="ms-auto btn btn-outline-success" to={`/ennemies/add`}><i className="bi bi-plus-circle"></i> Add</Link>}
      </div>
      <hr />
      {ennemies.length === 0 ?
      <p>There is no ennemy in the database!</p> : 
      [...ennemies].sort((a, b) => a.id.localeCompare(b.id)).map(e => <EnnemyDisplay key={e.id} ennemyId={e.id} />)}
    </>
  )
}

export default EnnemiesList