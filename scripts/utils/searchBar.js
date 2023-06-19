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
    const clearSearch = document.querySelector(".search_zone_clear")

    let newRecipes = [];
    let tagIsVisible = false

    /* ajout du listener de comparaison à la saisie dans l'input */
    searchBar.addEventListener("keyup", (event)=>{
        let searchedName = event.target.value;
        // console.log('saisie clavier:', searchedName)

        const regexInput = new RegExp (`${searchedName.trim().toLowerCase()}`);
        // console.log('regex', regexInput)
        if(searchBar.value.length > 2) {
            newRecipes = recipes.filter((recipe) => {
                let cardIsVisible = false;
                if (regexInput.test(recipe.name.toLowerCase())){
                    cardIsVisible=true;
                } else if (regexInput.test(recipe.description.toLowerCase())) {
                    cardIsVisible=true;
                }

                recipe.ingredients.forEach((ingredient)=> {
                    if (regexInput.test(ingredient.ingredient.toLowerCase())) {
                        cardIsVisible=true; 
                    }
                });       
                return cardIsVisible 
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
        if((searchBar.value.length > 2)){
            recipesData(newRecipes)
            // console.log("nouveau tableau:" , newRecipes)
            generateFiltersList(newRecipes)
            clearSearch.style.display="block"   
        } else {
            defaultMessage.innerHTML=""
            recipesData(recipes)
            generateFiltersList(recipes)
            sum(recipes)
            clearSearch.style.display="none"   
        }


        const ingredientsElements = document.querySelectorAll(".tags_ingredients_block_content")
        const ingredientsElementsArray = Array.from(ingredientsElements)
        console.log("liste des tags actifs:", ingredientsElementsArray)

        if(ingredientsElementsArray.length>0) {
            tagIsVisible=true
            console.log("test tags visible true",tagIsVisible)
        } else {
            tagIsVisible=false
            console.log("test tags visible false",tagIsVisible)
        }

    })

    /** Fonction reinitialisation input et affichage */
    function clearSearchBar() {
        if(searchBar.value !=""){
            searchBar.value = "";
            clearSearch.style.display="none"
            recipesData(recipes)
            generateFiltersList(recipes)
            sum(recipes)
        }
    }
    clearSearch.onclick = clearSearchBar

    /** Listener changement affichage bouton search */
    const searchBtn = document.querySelector(".search_zone_button")
    const searchBtnImg = document.querySelector(".search_zone_button img")

    function searchBtnHover(){
        searchBtnImg.src="assets/icones/search_yellow.svg"
   
    }

    function searchBtnOut() {
        searchBtnImg.src="assets/icones/search.svg"    
    }

    searchBtn.onmouseover = searchBtnHover;
    searchBtn.onmouseout = searchBtnOut
}

