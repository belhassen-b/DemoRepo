import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import AlbumDisplay from "./components/albums/AlbumDisplay";
import AlbumForm from "./components/albums/AlbumForm";
import { addAlbum, deleteAlbum, editAlbum, fetchAlbums } from "./components/albums/albumsSlice";
import { removeUser, signIn, signUp } from "./components/auth/authSlice";
import SignForm from "./components/auth/SignForm";
import Modal from "./components/shared/Modal";

function App() {
  const albums = useSelector(state => state.albums.albums)
  const [albumFormMode, setAlbumFormMode] = useState("")
  const [selectedAlbum, setSelectedAlbum] = useState(undefined)
  const [signFormMode, setSignFormMode] = useState("")
  const [sortingType, setSortingType] = useState("")
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  const onSigningHandler = async (credentials) => {
    if (signFormMode === "Sign In") {
      await dispatch(signIn(credentials))
    } else if (signFormMode === "Sign Up") {
      await dispatch(signUp(credentials))
    }

    setSignFormMode("")
  }

  const setSelectedAlbumAndAlbumFormMode = ({album, mode}) => {
    setSelectedAlbum(album)
    setAlbumFormMode(mode)
  }

  useEffect(() => {
    dispatch(fetchAlbums())
  }, [dispatch])

  const getSortedAlbums = () => {
    // let  tmpArray = []

    // switch (sortingType) {
    //   case "title":
    //     tmpArray = [...albums].sort((a, b) => a.title.localeCompare(b.title))
    //     break;
    //   case "id":
    //     tmpArray = [...albums].sort((a, b) => a.id.localeCompare(b.id))
    //     break;
    //   case "score":
    //     tmpArray = [...albums].sort((a, b) => a.score - b.score)
    //     break;
    //   default: 
    //     tmpArray = [...albums]
    //     break;
    // }

    // return tmpArray

    
    switch (sortingType) {
      case "title":
        return [...albums].sort((a, b) => a.title.localeCompare(b.title))
      case "id":
        return [...albums].sort((a, b) => a.id.localeCompare(b.id))
      case "score":
        return [...albums].sort((a, b) => b.score - a.score)
      default: 
        return [...albums]
    }
  }

  const onAddAlbumHandler = async (albumValues) => {
    await dispatch(addAlbum(albumValues))
    setAlbumFormMode("")
  }

  const onEditAlbumHandler = async (albumValuesWithId) => {
    await dispatch(editAlbum(albumValuesWithId))
    setAlbumFormMode("")
  }

  const onDeleteAlbumHandler = async (albumId) => {
    await dispatch(deleteAlbum(albumId))
    setAlbumFormMode("")
  }

  return (
    <div className="App">
      {albumFormMode === 'add' && createPortal(<Modal onClose={() => setAlbumFormMode("")}>
        <AlbumForm mode='add' onAdd={onAddAlbumHandler} />
      </Modal>, document.getElementById("modal-root"))}
      {albumFormMode === 'edit' && createPortal(<Modal onClose={() => setAlbumFormMode("")}>
        <AlbumForm mode='edit' onEdit={onEditAlbumHandler} albumId={selectedAlbum.id} />
      </Modal>, document.getElementById("modal-root"))}
      {albumFormMode === 'delete' && createPortal(<Modal onClose={() => setAlbumFormMode("")}>
        <AlbumForm mode='delete' onDelete={onDeleteAlbumHandler} albumId={selectedAlbum.id} />
      </Modal>, document.getElementById("modal-root"))}
      {signFormMode && createPortal(<Modal onClose={() => setSignFormMode("")} title={signFormMode}>
        <SignForm mode={signFormMode} onSubmit={onSigningHandler} />
      </Modal>, document.getElementById("modal-root"))}
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <span style={{cursor: "pointer"}} className="navbar-brand" ><i className="bi bi-globe"></i> eAlbums</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#eRecipe-navbar" aria-controls="eRecipe-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="eRecipe-navbar">
            {user ? (
              <button className="ms-auto btn btn-secondary" onClick={() => dispatch(removeUser())}>Sign Out</button>
              ) : (
              <>
                <button className="ms-auto btn btn-outline-info" onClick={() => setSignFormMode("Sign Up")}>Register</button>
                <button className="ms-2 btn btn-primary" onClick={() => setSignFormMode("Sign In")}>Sign In</button>
              </>
            )}
          </div>
        </div>
      </nav>
      </header>
      <main className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark rounded text-light p-3">
            <div className="d-flex align-items-center">
              <h3>Album List</h3>
              <label htmlFor="albumSorting" className="form-label m-0 ms-auto me-2">tri par </label>
              <select id="albumSorting" className="form-select w-25 bg-dark text-light" value={sortingType} onChange={(e) => setSortingType(e.target.value)}>
                <option value="">Sélectionnez un tri</option>
                <option value="id">Id</option>
                <option value="score">Score</option>
                <option value="title">Titre</option>
              </select>
              {user && <button onClick={() => setSelectedAlbumAndAlbumFormMode({mode: "add"})} className="ms-2 btn btn-outline-success"><i className="bi bi-plus-circle"></i> Add</button>}
            </div>
              <hr />
              {albums.length === 0 ?
              <p>Il n'y a pas d'album dans la base de données !</p> : 
              (
                <div className="mx-auto row row-cols-2 row-cols-md-3 row-cols-xl-4">
                  {getSortedAlbums().map(a => <AlbumDisplay albumId={a.id} key={a.id} setSelectedAlbumAndAlbumFormMode={setSelectedAlbumAndAlbumFormMode} />)}
                </div>
              )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
