import axios from "axios"
import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import unknownCharacterIMG from '../../assets/img/unknown_character.jpeg'
import Counter from "../../components/shared/Counter"
import { editCharacter } from "./charactersSlice"

const CharacterEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { characterId } = useParams()

  const availableWeapons = useSelector(state => state.weaponsSlice.weapons)
  const availableClasses = useSelector(state => state.charClassesSlice.charClasses)
  const character = useSelector(state => state.charactersSlice.characters).find(c => c.id === characterId)

  const [charStats, setCharStats] = useState(character.charStats)

  const [charWeapons, setCharWeapons] = useState(character.charWeapons)

  const charNameRef = useRef()
  const charClassRef = useRef()
  const avatarURLRef = useRef()
  const charBaseACRef = useRef()
  const avatarDisplayRef = useRef()

  const submitFormHandler = async (event) => {
    event.preventDefault()

    const characterValues = {
      ...character,
      charName: charNameRef.current.value,
      charClass: charClassRef.current.value,
      charAvatarURL : avatarURLRef.current.value,
      charBaseAC: +charBaseACRef.current.value,
      charFinalAC: +charBaseACRef.current.value + Math.ceil((charStats.find(s => s.name === "DEX").value - 10) / 2),
      charStats,
      charWeapons
    }

    await dispatch(editCharacter({id: characterId, ...characterValues}))

    navigate(`/characters`)

  }

  const avatarURLInputHandler = async (event) => {
    try {
      const response = await axios.get(event.target.value)

      console.log(response);

      if (response.status !== 200) {
        avatarDisplayRef.current.src = unknownCharacterIMG
        throw new Error("Avatar URL isn't valid!")
      } else if (response.status === 200) {
        avatarDisplayRef.current.src = event.target.value 
      }
      
      
    } catch (error) {
      avatarDisplayRef.current.src = unknownCharacterIMG
      console.error(error.message);
    }
  }

  const statValueChangedHandler = ({statName, value}) => {
    console.log(statName, value);
    const oldStat = charStats.find(s => s.name === statName)
    if (oldStat) {
      setCharStats([...charStats.filter(s => s !== oldStat), {...oldStat, value}])
    } 
  }

  const computeCounterProps = (charStat) => {
    
    return {
      bgColor: "grey", 
      counterValue: charStat.value,
      buttonBgColor: "white",
      spanColor: "white",
      buttonTextColor: "black",
      statName: charStat.name,
      minValue: 1,
      maxValue: 20,
      onValueChange: (value) => statValueChangedHandler({statName: charStat.name, value})
    }
  }


  return (
    <>
      <h3>Edit Character</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="row align-items-center">
          <div className="col-4 d-flex justify-content-center">
            <div className="border border-warning rounded-circle p-2" style={{height: "200px", width: "200px"}}>
              <img ref={avatarDisplayRef} src={!character ? unknownCharacterIMG : character.charAvatarURL} alt="Avatar" style={{height: "100%", width: "100%", borderRadius: "50%", objectFit: "cover"}} />
            </div>
          </div>
          <div className="col-8">
            <div className="mb-3">
              <label htmlFor="charName" className="form-label">Name: </label>
              <input type="text" required className="form-control" defaultValue={character?.charName} ref={charNameRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="charClass" className="form-label">Class: </label>
              <select id="charClass" className="form-select" ref={charClassRef} required defaultValue={character?.charClass.id}>
                {[...availableClasses].sort((a, b) => a.name.localeCompare(b.name)).map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="avatarURL" className="form-label">Avatar URL:</label>
              <input type="text" required className="form-control" defaultValue={character?.charAvatarURL} ref={avatarURLRef} onInput={avatarURLInputHandler}/>
            </div>
            <div className="mb-3">
              <label htmlFor="charBaseAC" className="form-label">Base AC:</label>
              <input type="number" id="charBaseAC" required className="form-control" defaultValue={character.charBaseAC} ref={charBaseACRef}/>
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
            <button type="button" className="ms-2 p-1 px-2 btn btn-outline-success rounded-circle" onClick={() => charWeapons.length < 5 && setCharWeapons([...charWeapons, ''])}><i className="bi bi-plus"></i></button>
          </div>
          <hr className="w-75 mx-auto"/>
          <ul>
            {charWeapons.map((value, index) => (
              <li key={index} className="row my-2">
                <div className="col-2 d-flex align-items-center">
                  <label htmlFor={`charWeapon-${index + 1}`} className="form-label w-100 text-center col-4">Weapon n°{index + 1}</label>
                </div>
                <div className="col-10 d-flex">
                  <select id={`charWeapon-${index + 1}`} className="form-select" required value={value} onChange={(e) => setCharWeapons([...charWeapons.slice(0, index), e.target.value,...charWeapons.slice(index + 1)])}>
                    <option value="">Select a weapon</option>
                    {availableWeapons.map(w => <option key={w.id} value={w.id}>{w.name} (d{w.diceType})</option>)}
                  </select>
                  <button type="button" className="ms-2 btn btn-outline-danger rounded-circle" onClick={() => setCharWeapons([...charWeapons.slice(0, index), ...charWeapons.slice(index + 1)])}><i className="bi bi-trash"></i></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="text-end">
          <button className="btn btn-warning"><i className="bi bi-send"></i> Edit</button>
        </div>
      </form>
    </>
  )
}

export default CharacterEdit