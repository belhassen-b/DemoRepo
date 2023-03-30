import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CharacterDisplay from "./CharacterDisplay"
import { fetchCharacters } from "./charactersSlice"

const CharactersList = () => {
  const characters = useSelector(state => state.charactersSlice.characters)
  const user = useSelector(state => state.authSlice.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  return (
    <>
      <div className="d-flex align-items-center">
        <h3>Characters List</h3>
        {user && <Link className="ms-auto btn btn-outline-success" to={`/characters/add`}><i className="bi bi-plus-circle"></i> Add</Link>}
      </div>
      <hr />
      {characters.length === 0 ?
      <p>There is no character in the database!</p> : 
      characters.map(c => <CharacterDisplay key={c.id} characterId={c.id} />)}
    </>
  )
}

export default CharactersList