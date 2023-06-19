// import { RecipesModel } from "./models/api.js";
// import { searchData } from "./utils/searchBar.js";
// import { createRecipeCard } from "./vues/recipesCards.js";



// let recipes = []

// // Recupère la data
// async function getRecipesData(){
//     recipes = await fetch('data/recipes.json')
//         .then(response => response.json())
//         .then(response => {
//             return response.recipes
//         })
//         .catch(() => {
//             throw new Error('Impossible de contacter le serveur pour recettes')
//         })
//     init()
// }



const recipesContainer = document.querySelector(".recipes_cards")

// CREATION DES CARDS
function recipesData(data) {
    recipesContainer.innerHTML= '';
    data.forEach((recipe) => {
        recipesContainer.appendChild(createRecipeCard(recipe))
      })
}

function init () {
    searchData()   
    createIngredientsFilter()
    createAppliancesFilter()
    createUstensilsFilter()
    recipesData(recipes)
    generateFiltersList(recipes)
}

/* getRecipesData est declarée dans api.js */
getRecipesData()


// const test = document.querySelector('.tags')
// const test2 = document.getElementById('test2')
// const btn = document.querySelector('.tags button')

// btn.addEventListener('click', function() {
//     const aria = test2.toggleAttribute('aria-expanded')
//     if( aria === false) {
//             test2.style.display='block'
//     } else {
//         test2.style.display='none'
//     }

// })


// function displayDropdown() {
//     if(filterIngredients.toggleAttribute('aria-expanded') === false) {
//         filterBlock.style.display="block"
//         filterIngredients.setAttribute('aria-expanded', 'true')
//     } else {
//         filterBlock.style.display="none"
//         filterIngredients.setAttribute('aria-expanded', 'false')
//     }
// }


