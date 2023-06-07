import { RecipesModel } from "./models/api.js";
import { searchData } from "./utils/searchBar.js";
// import { createRecipeCard } from "./vues/recipesCards.js";

// Recupère la data
const recipesModel = new RecipesModel('data/recipes.json')
export const recipes = await recipesModel.getRecipesData()
console.log("Liste de toutes les recettes:", recipes)

const recipesContainer = document.querySelector(".recipes_cards")

// const newRecipes = []



// CREATION DES CARDS
export function recipesData(data) {
    recipesContainer.innerHTML= '';
    data.forEach((recipe) => {
        recipesContainer.appendChild(createRecipeCard(recipe))
      })
}

function init () {
    recipesData(recipes)
    searchData()
}

await init()



// const searchBar = document.querySelector(".search_zone_input")
// const defaultMessage = document.querySelector(".message-no-match-result")
// const cards = document.querySelectorAll('.cards')


// console.log('affichage des cards', cards)

//ajout ecouteur evenement keyup V1 FONCTIONNEL
// searchBar.addEventListener("keyup", (event)=>{
//     const searchedName = event.target.value.toLowerCase()
//     const test = cards.length

//     cards.forEach(card => {
//         const isVisible = card.textContent.toLowerCase().includes(searchedName)
//         if(!isVisible && searchedName.length > 2) {
//             card.classList.add("hide")
//             card.style.display= 'none'
//         } else {
//             card.style.display= 'block'
//             card.classList.remove("hide")
//         }
//     })

//     const test2 = document.getElementsByClassName('hide').length
//     if(test === test2) {
//         console.log('ca filtre!', test, test2)
//         defaultMessage.innerHTML = `Aucune recette ne contient ‘${searchedName}’ vous pouvez chercher «
//         tarte aux pommes », « poisson », etc. `
//     } else {
//         console.log('ca supprime!', test, test2)
//         defaultMessage.innerHTML = ""
//     }
// })



// // V2 TEST
// searchBar.addEventListener("keyup", (event)=>{
//     const searchedName = event.target.value.toLowerCase()
//     const test = cards.length

//     const newRecipes = []

//     cards.forEach(card => {
//         const isVisible = card.textContent.toLowerCase().includes(searchedName)
//         if(searchedName.length > 2 && isVisible) {
//             card.classList.remove("hide")
//             newRecipes.push(card)
//             console.log(newRecipes)
//             // recipesData(newRecipes)
//         } else {         
//             card.classList.add("hide")
//         }
//     })

//     // const test2 = document.getElementsByClassName('hide').length
//     // if(test === test2) {
//     //     console.log('ca filtre!', test, test2)
//     //     defaultMessage.innerHTML = `Aucune recette ne contient ‘${searchedName}’ vous pouvez chercher «
//     //     tarte aux pommes », « poisson », etc. `
//     // } else {
//     //     console.log('ca supprime!', test, test2)
//     //     defaultMessage.innerHTML = ""
//     // }
// })

// const searchBar = document.querySelector(".search_zone_input")

// searchBar.addEventListener("keyup", (event)=>{
//     let searchedName = event.target.value.trim().toLowerCase();
//     console.log(searchedName)
//     searchData()
// })