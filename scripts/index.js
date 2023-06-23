const recipesContainer = document.querySelector(".recipes_cards")

// CREATION DES CARDS
function recipesData(data) {
    recipesContainer.innerHTML= '';
    data.forEach((recipe) => {
        recipesContainer.appendChild(createRecipeCard(recipe))
      })
}

function init () {
    createIngredientsFilter()
    createAppliancesFilter()
    createUstensilsFilter()
    recipesData(recipes)
    generateFiltersList(recipes)
}

/* getRecipesData est declarée dans api.js */
getRecipesData()
