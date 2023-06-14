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
        if(searchBar.value.length > 2) {
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
        sum(newRecipes)
        }
        

        /** affichage du message par default lorsqu'aucune recette n'est trouvée */
        if(newRecipes.length>0) {
            defaultMessage.innerHTML=""
        } else {
            defaultMessage.innerHTML = `Aucune recette ne contient ‘${searchBar.value}’ vous pouvez chercher «
                tarte aux pommes », « poisson », etc. `
        }


        /** nouveau display en fonction de la recherche */
        if((searchBar.value.length>2)){
            recipesData(newRecipes)
            // console.log("nouveau tableau:" , newRecipes)
            generateFiltersList(newRecipes)
        } else {
            defaultMessage.innerHTML=""
            recipesData(recipes)
            generateFiltersList(recipes)
            sum(recipes)
        }
    })

    /** Fonction d'actualisation du nombre de recettes affichées */
    function sum(data){

        const recipesSum = document.querySelector('.filters_element_sum')
        recipesSum.innerHTML=`${data.length} recettes`
        console.log("tableau test :", data)
    }
}

