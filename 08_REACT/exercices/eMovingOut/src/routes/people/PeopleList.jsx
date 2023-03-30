import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PeopleDisplay from "./PeopleDisplay"

const PeopleList = () => {
  const people = useSelector(state => state.people.people)
  const user = useSelector(state => state.auth.user)

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>People List</h3>
        {user && <Link to={`/people/add?mode=add`} className="btn btn-outline-success"><i className="bi bi-plus-circle"></i> Add</Link>}
      </div>
      <hr />
      {people.length === 0 ?
      <p>There is no people in the database!</p> : 
      [...people].sort((a, b) => a.id.localeCompare(b.id)).map(p => <PeopleDisplay key={p.id} peopleId={p.id} />)}
    </>
  )
}

export default PeopleList