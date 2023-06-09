// import {recipesData, recipes} from '../index.js'

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


//V2 FONCTIONNELLE
/*export*/ function searchData() {
    const searchBar = document.querySelector(".search_zone_input")
    const defaultMessage = document.querySelector(".message-no-match-result")

    let newRecipes = []

    /* ajout du listener de comparaison à la saisie dans l'input */
    searchBar.addEventListener("keyup", (event)=>{
        let searchedName = event.target.value;
        // console.log('saisie clavier:', searchedName)

        const regexInput = new RegExp (`${searchedName.trim().toLowerCase()}`);
        // console.log('regex', regexInput)

        newRecipes = recipes.filter((recipe) => {
            let isVisible = false;
            if (regexInput.test(recipe.name.toLowerCase())){
                isVisible=true;
            } else if (regexInput.test(recipe.description.toLowerCase())) {
                isVisible=true;
            }

            recipe.ingredients.forEach((ingredient)=> {
                if (regexInput.test(ingredient.ingredient.toLowerCase())) {
                    isVisible=true; 
                }
            });            
            return isVisible           
        })

        /** nouveau display après filtre */
        if(newRecipes.length>0) {
            defaultMessage.innerHTML=""
            recipesData(newRecipes)
            // console.log("nouveau tableau:" , newRecipes)
            generateFiltersList(newRecipes)
        } else {
            recipesData(newRecipes)
            defaultMessage.innerHTML = `Aucune recette ne contient ‘${searchedName}’ vous pouvez chercher «
                tarte aux pommes », « poisson », etc. `
            // console.log("nouveau tableau:" , newRecipes)
            generateFiltersList(newRecipes)
        }

        /** Actualisation du nombre de recettes affichées */
        const recipesSum = document.querySelector('.filters_element_sum')
        recipesSum.innerHTML=`${newRecipes.length} recettes`
    })
}

