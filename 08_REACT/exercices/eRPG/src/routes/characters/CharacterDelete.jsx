import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import unknownCharacterIMG from '../../assets/img/unknown_character.jpeg'
import Counter from "../../components/shared/Counter"
import { deleteCharacter } from "./charactersSlice"

const CharacterDelete = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { characterId } = useParams()

  const availableWeapons = useSelector(state => state.weaponsSlice.weapons)
  const availableClasses = useSelector(state => state.charClassesSlice.charClasses)
  const character = useSelector(state => state.charactersSlice.characters).find(c => c.id === characterId)

  const charStats = character.charStats

  const charWeapons = character.charWeapons

  const submitFormHandler = async (event) => {
    event.preventDefault()

    await dispatch(deleteCharacter(characterId))

    navigate(`/characters`)

  }

  const computeCounterProps = (charStat) => {
    
    return {
      bgColor: "grey", 
      counterValue: charStat.value,
      buttonBgColor: "white",
      spanColor: "white",
      buttonTextColor: "black",
      statName: charStat.name,
      minValue: charStat.value,
      maxValue: charStat.value
    }
  }


  return (
    <>
      <h3>Delete Character</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="row align-items-center">
          <div className="col-4 d-flex justify-content-center">
            <div className="border border-warning rounded-circle p-2" style={{height: "200px", width: "200px"}}>
              <img src={!character ? unknownCharacterIMG : character.charAvatarURL} alt="Avatar" style={{height: "100%", width: "100%", borderRadius: "50%", objectFit: "cover"}} />
            </div>
          </div>
          <div className="col-8">
            <div className="mb-3">
              <label htmlFor="charName" className="form-label">Name: </label>
              <input type="text" disabled className="form-control" defaultValue={character?.charName} />
            </div>
            <div className="mb-3">
              <label htmlFor="charClass" className="form-label">Class: </label>
              <select id="charClass" className="form-select" disabled defaultValue={character?.charClass.id}>
                {[...availableClasses].sort((a, b) => a.name.localeCompare(b.name)).map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="avatarURL" className="form-label">Avatar URL:</label>
              <input type="text" disabled className="form-control" defaultValue={character?.charAvatarURL} />
            </div>
            <div className="mb-3">
              <label htmlFor="charBaseAC" className="form-label">Base AC:</label>
              <input type="number" id="charBaseAC" disabled className="form-control" defaultValue={character.charBaseAC}/>
            </div>
          </div>
          <h5 className="text-center mt-4">Stats</h5>
          <hr className="w-75 mx-auto"/>
          <div className="col-12 row row-cols-3 row-cols-md-6 g-3 mx-auto my-3">
            {[...charStats].sort((a, b) => a.id - b.id).map(stat => <div key={stat.name} className="col">
              <Counter {...computeCounterProps(stat)} />
            </div>)}
          </div>
          <div className="d-flex pb-2 align-items-center justify-content-center mt-4">
            <h5 className="m-0">Weapons</h5>
          </div>
          <hr className="w-75 mx-auto"/>
          <ul>
            {charWeapons.map((value, index) => (
              <li key={index} className="row my-2">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor={`charWeapon-${index + 1}`} className="form-label w-100 text-center col-4">Weapon n°{index + 1}</label>
                </div>
                <div className="col-10 d-flex">
                  <select id={`charWeapon-${index + 1}`} className="form-select" disabled value={value}>
                    {availableWeapons.map(w => <option key={w.id} value={w.id}>{w.name} (d{w.diceType})</option>)}
                  </select>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="text-end">
          <button className="btn btn-danger"><i className="bi bi-trash"></i> Confirm</button>
        </div>
      </form>
    </>
  )
}

export default CharacterDelete