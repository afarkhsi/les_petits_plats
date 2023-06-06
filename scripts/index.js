import { RecipesModel } from "./models/api.js";

// Recupère la data
const recipesModel = new RecipesModel('data/recipes.json')
const recipes = await recipesModel.getRecipesData()
console.log("Liste de toutes les recettes:", recipes)

const recipesContainer = document.querySelector(".recipes_cards")




// CREATION DES CARDS
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



const searchBar = document.querySelector(".search_zone_input")
const defaultMessage = document.querySelector(".message-no-match-result")
const cards = document.querySelectorAll('.cards')
// const test2 = document.getElementsByClassName('hide').length


console.log('affichage des cards', cards)

//ajout ecouteur evenement keyup
searchBar.addEventListener("keyup", (event)=>{
    const searchedName = event.target.value.toLowerCase()
    const test = cards.length
    // if (searchedName.length > 2) {
    //     cards.forEach(card => {
    //         const isVisible = card.textContent.toLowerCase().includes(searchedName)
    //         if(!isVisible) {
    //             card.classList.add("hide")
    //             card.style.display= 'none'
    //             // defaultMessage.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    //         } else {
    //             card.style.display= 'block'
    //         }
    //     })
    // } else {
    //     cards.forEach(card => {
    //             card.classList.remove("hide")
    //             card.style.display= 'block'
    //     })
    // }


    cards.forEach(card => {
        const isVisible = card.textContent.toLowerCase().includes(searchedName)
        if(!isVisible && searchedName.length > 2) {
            card.classList.add("hide")
            card.style.display= 'none'
            // defaultMessage.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        } else {
            card.style.display= 'block'
            card.classList.remove("hide")
        }
    })


    // if(searchedName.length > 2) {
    //     const test2 = document.getElementsByClassName('hide').length
    //     if (test > test2) {
    //         console.log('ca supprime', test, test2)
    //         defaultMessage.innerHTML = ""
    //     }
    // }    
    // if(searchedName) {
    //     const test2 = document.getElementsByClassName('hide').length
    //     if(test !== test2) {
    //         console.log('ca supprime!', test, test2)
    //         return defaultMessage.innerHTML = ""
    //     }
    // }


    const test2 = document.getElementsByClassName('hide').length
    if(test === test2) {
        console.log('ca filtre!', test, test2)
        defaultMessage.innerHTML = `Aucune recette ne contient ‘${searchedName}’ vous pouvez chercher «
        tarte aux pommes », « poisson », etc. `
    } else {
        console.log('ca supprime!', test, test2)
        defaultMessage.innerHTML = ""
    }
    




    // } else {
    //     console.log('ca marche toujours', test, test2)
    //     defaultMessage.innerHTML = ""
    // }
   


})

// const test = cards.length

// const test2 = document.getElementsByClassName('hide')

// console.log('test:', test)
// console.log('test2:', test2)