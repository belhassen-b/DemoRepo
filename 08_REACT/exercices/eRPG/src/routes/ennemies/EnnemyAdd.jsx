import axios from "axios"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import unknownMonsterIMG from '../../assets/img/unknown_monster.jpg'
import { rollDice } from "../../utils/diceFunctions"
import { addEnnemy } from "./ennemiesSlice"

const EnnemyAdd = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const nameRef = useRef()
  const challengeRatingRef = useRef()
  const sizeRef = useRef()
  const baseACRef = useRef()
  const avatarDisplayRef = useRef()
  const avatarURLRef = useRef()

  const submitFormHandler = async (e) => {
    e.preventDefault()

    const name = nameRef.current.value
    const challengeRating = +challengeRatingRef.current.value
    const size = sizeRef.current.value
    const baseAC = +baseACRef.current.value
    const avatarDisplay = avatarDisplayRef.current.value
    const avatarURL = avatarURLRef.current.value
    const maxHP = rollDice(+sizeRef.current.selectedOptions[0].textContent.split(/[(,)]/)[1].substring(1))

    const monsterValues = {
      name,
      challengeRating,
      size,
      baseAC,
      avatarDisplay,
      avatarURL,
      finalAC: baseAC,
      maxHP,
      currentHP: maxHP
    }

    await dispatch(addEnnemy(monsterValues))

    navigate(`/ennemies`)
  }

  const avatarURLInputHandler = async (event) => {
    try {
      const response = await axios.get(event.target.value)

      console.log(response);

      if (response.status !== 200) {
        avatarDisplayRef.current.src = unknownMonsterIMG
        throw new Error("Avatar URL isn't valid!")
      } else if (response.status === 200) {
        avatarDisplayRef.current.src = event.target.value 
      }
      
      
    } catch (error) {
      avatarDisplayRef.current.src = unknownMonsterIMG
      console.error(error.message);
    }
  }

  return (
    <>
      <h3>Add an Ennemy</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <div className="mt-5 p-2 rounded-circle border border-danger" style={{height: "200px", width: "200px"}}>
            <img src={unknownMonsterIMG} ref={avatarDisplayRef} alt="Monster Portrait" className="rounded-circle" style={{height: "100%", width:"100%", objectFit:"cover"}} />
            </div>
          </div>
          <div className="col-8">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name: </label>
              <input type="text" className="form-control" required ref={nameRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="challengeRating" className="form-label">Challenge rating: </label>
              <select ref={challengeRatingRef} required id="challengeRating" className="form-select">
                <option value="">Select a challenge rating</option>
                <option value="0.175">1/8</option>
                <option value="0.25">1/4</option>
                <option value="0.5">1/2</option>
                {[...Array(30)].map((_, i) => <option value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label">Size: </label>
              <select className="form-control" required ref={sizeRef}>
                <option value="">Select a size</option>
                <option value="tiny">Tiny (d4)</option>
                <option value="small">Small (d6)</option>
                <option value="medium">Medium (d8)</option>
                <option value="large">Large (d10)</option>
                <option value="huge">Huge (d12)</option>
                <option value="gargantual">Gargantual (d20)</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="baseAC" className="form-label">Base AC: </label>
              <input type="number" defaultValue={10} min={0} max={30} className="form-control" required ref={baseACRef} />
            </div>
            <div className="mb-3">
              <label htmlFor="avatarURL" className="form-label">Avatar URL:</label>
              <input type="text" required className="form-control" ref={avatarURLRef} onInput={avatarURLInputHandler}/>
            </div>
          </div>
          <div className="col-6">
          </div>
          <div className="col-6"></div>
        </div>
        <hr />
        <div className="text-end">
          <button className="btn btn-success"><i className="bi bi-send"></i> Send</button>
        </div>
      </form>
    </>
  )
}

export default EnnemyAdd