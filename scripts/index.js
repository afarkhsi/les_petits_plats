import { RecipesModel } from "./models/api.js";

// Recupère la data
const recipesModel = new RecipesModel('data/recipes.json')
const recipes = await recipesModel.getRecipesData()
console.log("Liste de toutes les recettes:", recipes)

const recipesContainer = document.querySelector(".recipes_cards")

function recipesData(recipes) {
    recipesContainer.innerHTML= '';
    recipes.forEach((recipe) => {
        recipesContainer.appendChild(createRecipeCard(recipe))
      })
}

function init () {
    recipesData(recipes)
}

await init()