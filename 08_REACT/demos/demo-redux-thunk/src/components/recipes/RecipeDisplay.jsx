import { useSelector } from "react-redux"
import cookingHatSVG from '../../assets/img/cooking-hat.svg'
import flameSVG from '../../assets/img/flame.svg'

const RecipeDisplay = (props) => {
  const recipe = useSelector(state => state.recipes.recipes).find(r => r.id === props.recipeId)
  const setRecipeFormModeAndSelectedRecipe = props.setRecipeFormModeAndSelectedRecipe

  return (
    <div className="m-2 my-3 border border-info rounded p-3">
      <div className="d-flex align-items-center">
        <h5 className="w-75 text-center">{recipe.title}</h5>
        <span className="d-flex align-items-center px-2 py-1 ms-auto border border-warning rounded"><img className="me-2" src={cookingHatSVG} alt="prepTime SVG" style={{height: "1rem", width: "1rem", filter: "invert(100%)"}} /> {recipe.prepTime}'</span>
        <span className="d-flex align-items-center px-2 py-1 ms-2 border border-danger rounded"><img className="me-2" src={flameSVG} alt="cookTime SVG" style={{height: "1rem", width: "1rem", filter: "invert(100%)"}} /> {recipe.cookTime}'</span>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">
          <h5 className="text-center">Ingredients</h5>
          <hr />
          <ul>
            {recipe.ingredients.map(i => <li key={i.id}>{i.name}</li>)}
          </ul>
        </div>
        <div className="col-8">
          <h5>Instructions</h5>
          <hr />
          <p>{recipe.instructions}</p>
        </div>
      </div>
      <hr />
      <div className="text-end">
        <button onClick={() => setRecipeFormModeAndSelectedRecipe({recipe, mode: 'edit'})} className="btn btn-warning"><i className="bi bi-pencil-square"></i> Edit</button>
        <button onClick={() => setRecipeFormModeAndSelectedRecipe({recipe, mode: 'delete'})} className="ms-2 btn btn-danger"><i className="bi bi-trash"></i> Delete</button>
      </div>
    </div>
  )
}

export default RecipeDisplay