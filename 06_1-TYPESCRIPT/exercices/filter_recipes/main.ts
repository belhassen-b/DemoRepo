import { recipes } from "./recipes";
import Recipe from "./interface/Recipe";

const recipesList: Recipe[] = [];
for (const key in recipes) {
  recipesList.push({id: key, ...recipes[key]})
}