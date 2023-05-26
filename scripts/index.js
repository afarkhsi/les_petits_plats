import { RecipesModel } from "./models/api.js";

const recipes = new RecipesModel('.data/recipes.js')
console.log(recipes)