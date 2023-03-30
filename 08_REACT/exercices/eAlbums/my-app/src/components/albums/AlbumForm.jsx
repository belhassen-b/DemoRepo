import { useRef } from "react"
import { useSelector } from "react-redux"

const AlbumForm = (props) => {
  const mode = props.mode
  const album = useSelector(state => state.albums.albums).find(a => a.id === props.albumId)

  const titleRef = useRef()
  const artistRef = useRef()
  const scoreRef = useRef()
  const releaseDateRef = useRef()
  const coverURLRef = useRef()
  const priceRef = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault()

    if (mode === 'delete') {
      props.onDelete(props.albumId)
    } else {

      const title = titleRef.current.value
      const artist = artistRef.current.value
      const score = +scoreRef.current.value
      const price = +priceRef.current.value
      const releaseDate = releaseDateRef.current.value
      const coverURL = coverURLRef.current.value

      titleRef.current.value = ""
      artistRef.current.value = ""
      scoreRef.current.value = ""
      releaseDateRef.current.value = ""
      coverURLRef.current.value = ""
      priceRef.current.value = ""

      const albumValues = {
        title,
        artist,
        score,
        releaseDate,
        price,
        coverURL
      }

      if (mode === 'add') {
        props.onAdd(albumValues)
      } else if (mode === 'edit') {
        props.onEdit({id: props.albumId, ...albumValues})
      }
    }
  }

  return (
    <>
      <h3>{mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase()} Album</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre: </label>
          <input type="text" disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={album?.title} ref={titleRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="artist" className="form-label">Artiste: </label>
          <input type="text" disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={album?.artist} ref={artistRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="releaseDate" className="form-label">Date de sortie: </label>
          {/* Pour pouvoir avoir comme date maximale de sortie de l'album la date du jour, il nous faut utiliser la méthode .toISOString() puis ne prendre en compte que les 10 premiers caractères de la chaine, par exemple : '2023-02-27' */}
          <input type="date" max={new Date().toISOString().substring(0, 10)} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={album?.releaseDate} ref={releaseDateRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="score" className="form-label">Score: </label>
          <input type="number" min={0} max={5} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={album?.score} ref={scoreRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="coverURL" className="form-label">Image de couverture: </label>
          <input type="text" disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={album?.coverURL} ref={coverURLRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Prix: </label>
          <input type="number" min={0} step={0.01} disabled={mode === 'delete'} required={mode !== 'delete'} defaultValue={album?.price} ref={priceRef} className="form-control" />
        </div>
        <div className="text-end">
          <button className={`btn btn-${mode === 'delete' ? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>
            <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Ajouter'}
          </button>
        </div>
      </form>
    </>
  )
} 

export default AlbumForm