// import { createIngredients, createRecipeCard } from "../vues/recipesCards.js"
import {recipesData, recipes} from '../index.js'

// // V1 FONCTIONNELLE
// function searchData() {
//     const searchBar = document.querySelector(".search_zone_input")
//     const defaultMessage = document.querySelector(".message-no-match-result")
//     const cards = document.querySelectorAll('.cards')


//     // console.log('affichage des cards', cards)

//     searchBar.addEventListener("keyup", (event)=>{
//         const searchedName = event.target.value.toLowerCase()
//         const cardsLength = cards.length

//         cards.forEach(card => {
//             const isVisible = card.textContent.toLowerCase().includes(searchedName)
//             const cardVerif = false
//             if(searchedName.length > 2 && !isVisible) {
//                 card.classList.add("hide")
//                 card.style.display= 'none'
//             } else {         
//                 card.classList.remove("hide")
//                 card.style.display= 'block'
//             }
//         })

//         const cardsHiddenLength = document.getElementsByClassName('hide').length
//         if(cardsLength === cardsHiddenLength) {
//             // console.log('ca filtre!', cardsLength, cardsHiddenLength)
//             defaultMessage.innerHTML = `Aucune recette ne contient ‘${searchedName}’ vous pouvez chercher «
//             tarte aux pommes », « poisson », etc. `
//         } else {
//             // console.log('ca supprime!', cardsLength, cardsHiddenLength)
//             defaultMessage.innerHTML = ""
//         }
//     })
// }

// V2 TEST
// export function searchData() {
//     const searchBar = document.querySelector(".search_zone_input")
//     const defaultMessage = document.querySelector(".message-no-match-result")
//     const cards = document.querySelectorAll('.cards')
//     const recipesContainer = document.querySelector(".recipes_cards")


//     console.log('affichage des cards', cards)
//     const newRecipes = []

//     // function recipesDatav2(data) {
//     //     recipesContainer.innerHTML= '';
//     //     data.forEach((recipe) => {
//     //         recipesContainer.appendChild(createRecipeCard(recipe))
//     //       })
//     // }

//     searchBar.addEventListener("keyup", (event)=>{
//         const searchedName = event.target.value.toLowerCase()
//         const test = cards.length

//         cards.forEach(card => {
//             const isVisible = card.textContent.toLowerCase().includes(searchedName)
//             const cardVerif = false
//             if(searchedName.length > 2 && isVisible && newRecipes.includes(card)== cardVerif ) {
//                 card.classList.remove("hide")
//                 newRecipes.push(card)
//                 console.log(newRecipes)
//                 recipesData(recipes)
//             } else {         
//                 card.classList.add("hide")
//             }
//         })
//     })
// }

//V3 Fonctionnelle
export function searchData() {
    const searchBar = document.querySelector(".search_zone_input")
    const defaultMessage = document.querySelector(".message-no-match-result")

    let newRecipes = []

    /* ajout du listener de comparaison à la saisie dans l'input */
    searchBar.addEventListener("keyup", (event)=>{
        let searchedName = event.target.value;
        console.log('saisie clavier:', searchedName)

        const regexInput = new RegExp (`${searchedName.trim().toLowerCase()}`);
        console.log('regex', regexInput)

        newRecipes = recipes.filter((recipe) => {
            let isVisible = false;
            if (regexInput.test(recipe.name.toLowerCase())){
                isVisible=true;
            } else if (regexInput.test(recipe.description.toLowerCase())) {
                isVisible=true;
            }

            recipe.ingredients.forEach(({ingredient})=> {
                if (regexInput.test(ingredient.toLowerCase())) {
                    isVisible=true; 
                }
            });            
            return isVisible           
        })

        /** nouveau display après filtre */
        if(newRecipes.length>0) {
            defaultMessage.innerHTML=""
            recipesData(newRecipes)
            console.log("nouveau tableau:" , newRecipes)
        } else {
            recipesData(newRecipes)
            defaultMessage.innerHTML = `Aucune recette ne contient ‘${searchedName}’ vous pouvez chercher «
                tarte aux pommes », « poisson », etc. `
            console.log("nouveau tableau:" , newRecipes)
        }

    })
}

