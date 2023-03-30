import { useRef } from "react"
import { useSelector } from "react-redux"

const RecipeForm = (props) => {
  const mode = props.mode
  const recipe = useSelector(state => state.recipes.recipes).find(r => r.id === props.recipeId)
  const availableIngredients = useSelector(state => state.recipes.ingredients)

  const titleRef = useRef()
  const instructionsRef = useRef()
  const cookTimeRef = useRef()
  const prepTimeRef = useRef()
  const ingredientsRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    if (mode === 'delete') {
      props.onDelete(recipe.id)
    } else {
      const title = titleRef.current.value
      const instructions = instructionsRef.current.value
      const prepTime = prepTimeRef.current.value
      const cookTime = cookTimeRef.current.value

      const tmpArray = []

      for (const option of ingredientsRef.current.selectedOptions) {
        tmpArray.push(availableIngredients.find(i => i.id === +option.value))
      }

      const recipeValues = {
        title, 
        instructions,
        prepTime,
        cookTime,
        ingredients: tmpArray
      }

      console.log(recipeValues);

      titleRef.current.value = ""
      instructionsRef.current.value = ""
      prepTimeRef.current.value = ""
      cookTimeRef.current.value = ""
      for (const option of ingredientsRef.current.options) option.selected = false

      if (mode === 'add') {
        props.onAdd(recipeValues)
      } else if (mode === 'edit') {
        props.onEdit({...recipeValues, id: recipe.id})
      }
    }
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Titre: </label>
        <input type="text" ref={titleRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={recipe?.title} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="prepTime" className="form-label">Temps de préparation: </label>
        <input type="number" ref={prepTimeRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={recipe?.prepTime} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="cookTime" className="form-label">Temps de cuisson: </label>
        <input type="number" ref={cookTimeRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={recipe?.cookTime} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="instructions" className="form-label">Titre: </label>
        <textarea ref={instructionsRef} required={mode !== 'delete'} disabled={mode === 'delete'} defaultValue={recipe?.instructions} className="form-control" cols={30} rows={10} style={{resize: "none"}}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="ingredients" className="form-label">Ingrédients: </label>
        <select id="ingredients" ref={ingredientsRef} required={mode !== 'delete'} disabled={mode === 'delete'} multiple defaultValue={recipe?.ingredients.map(i => i.id)} className="form-select">
          {availableIngredients.map(i => <option value={i.id} key={i.id}>{i.name}</option>)}
        </select>
      </div>
      <div className="text-end">
        <button className={`btn btn-${mode === 'delete'? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>
          <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Envoyer'}
          </button>
      </div>
    </form>
  )
}

export default RecipeForm