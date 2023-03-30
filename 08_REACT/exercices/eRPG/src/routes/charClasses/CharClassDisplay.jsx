import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const CharClassDisplay = (props) => {
  const charClass = useSelector(state => state.charClassesSlice.charClasses).find(c => c.id === props.charClassId)
  const user = useSelector(state => state.authSlice.user)

  return (
    <div className="border border-info rounded p-3 m-3">
      <div className="d-flex align-items-center">
        <h5>{charClass.name}</h5>
        {user && <Link to={`/charClasses/edit/${props.charClassId}`} className="ms-auto btn btn-outline-warning p-1 px-2"><i className="bi bi-pencil-square"></i></Link>}
        {user && <Link to={`/charClasses/delete/${props.charClassId}`} className="ms-2 btn btn-outline-danger p-1 px-2"><i className="bi bi-trash"></i></Link>}
      </div>
      <hr />
      <ul>
        <li><b>Hit dice type: </b>d{charClass.hitDiceType}</li>
      </ul>
    </div>
  )
}

export default CharClassDisplay