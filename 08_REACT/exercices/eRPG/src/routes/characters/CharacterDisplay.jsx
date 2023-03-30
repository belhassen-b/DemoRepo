import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const CharacterDisplay = (props) => {
  const character = useSelector(state => state.charactersSlice.characters).find(c => c.id === props.characterId)
  const charClass = useSelector(state => state.charClassesSlice.charClasses).find(c => c.id === character.charClass)
  const charWeapons = useSelector(state => state.weaponsSlice.weapons).filter(w => character.charWeapons.some(x => x === w.id))
  const user = useSelector(state => state.authSlice.user)
  const xpTable = useSelector(state => state.charactersSlice.xpTable)

  return (
    <div className="m-3 border border-info rounded p-3 row">
      <div className="col-4 d-flex justify-content-center align-items-center">
        <div className="rounded-circle border border-light p-1" style={{height: "150px", width: "150px"}}>
          <img src={character.charAvatarURL} alt="Avatar" style={{borderRadius: "50%", height: "100%", width: "100%", objectFit: "cover"}} />
        </div>
      </div>
      <div className="col-8">
        <div className="d-flex align-items-center">
          <h5 className="m-0 me-2">{character.charName}</h5>
          {user && <Link className="ms-2 p-1 px-2 btn btn-outline-warning" to={`/characters/edit/${character.id}`}><i className="bi bi-pencil-square"></i></Link>}
          {user && <Link className="ms-2 p-1 px-2 btn btn-outline-danger" to={`/characters/delete/${character.id}`}><i className="bi bi-trash"></i></Link>}
        </div>
        <hr />
        <ul>
          <li><b>Class:</b> {charClass.name}</li>
          <li><b>XP:</b> {character.currentXP} (<b>Level:</b> {xpTable.find(x => character.currentXP >= x.xpRequired).level})</li>
          <li><b>HP:</b> {character.currentHP}/{character.maxHP}</li>
          <li><b>AC:</b> {character.charFinalAC}</li>
          <li><b>Weapons:</b> {charWeapons.map(w => w.name).join(", ")}</li>
        </ul>
      </div>
    </div>
  )
}

export default CharacterDisplay