import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const EnnemyDisplay = ({ennemyId}) => {
  const ennemy = useSelector(state => state.ennemiesSlice.ennemies).find(e => e.id === ennemyId)
  const user = useSelector(state => state.authSlice.user)
  const xpRewards = useSelector(state => state.ennemiesSlice.xpRewards)

  return (
    <div className="m-3 border border-info rounded p-3 row">
      <div className="col-4 d-flex justify-content-center align-items-center">
        <div className="rounded-circle border border-light p-1" style={{height: "150px", width: "150px"}}>
          <img src={ennemy.avatarURL} alt="Avatar" style={{borderRadius: "50%", height: "100%", width: "100%", objectFit: "cover"}} />
        </div>
      </div>
      <div className="col-8">
        <div className="d-flex align-items-center">
          <h5 className="m-0 me-2">{ennemy.name}</h5>
          {user && <Link className="ms-2 p-1 px-2 btn btn-outline-warning" to={`/ennemies/edit/${ennemy.id}`}><i className="bi bi-pencil-square"></i></Link>}
          {user && <Link className="ms-2 p-1 px-2 btn btn-outline-danger" to={`/ennemies/delete/${ennemy.id}`}><i className="bi bi-trash"></i></Link>}
        </div>
        <hr />
        <ul>
          <li><b>Challenge rating:</b> {ennemy.challengeRating} ({xpRewards.find(x => +x.challengeRating === ennemy.challengeRating).xpReward} XP)</li>
          <li><b>Size:</b> {ennemy.size.substring(0, 1).toUpperCase() + ennemy.size.substring(1).toLowerCase()}</li>
          <li><b>HP:</b> {ennemy.currentHP}/{ennemy.maxHP}</li>
          <li><b>AC:</b> {ennemy.finalAC}</li>
        </ul>
      </div>
    </div>
  )
}

export default EnnemyDisplay