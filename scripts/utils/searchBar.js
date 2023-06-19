function searchData() {
    const searchBar = document.querySelector(".search_zone_input")
    const defaultMessage = document.querySelector(".message-no-match-result")
    const clearSearch = document.querySelector(".search_zone_clear")

    newRecipes = [];
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
                return cardIsVisible; 
            });
        sum(newRecipes);
        generateFiltersList(newRecipes);
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
            clearSearch.style.display="block"   
        } else {
            defaultMessage.innerHTML=""
            recipesData(recipes)
            sum(recipes)
            clearSearch.style.display="none"   
        }
    })

    /** si un tag est actif les tableaux de la fonction recipesDataWithTags sont utilisé pour actuliser la page*/
    const tagsIngredientsElements = document.querySelectorAll(".tags_ingredients_block_content")
    const tagsIngredientsElementsArray = Array.from(tagsIngredientsElements)
    console.log("liste des tags ingredients actifs:", tagsIngredientsElementsArray)

    const tagsAppliancesElements = document.querySelectorAll(".tags_appliances_block_content")
    const tagsAppliancesElementsArray = Array.from(tagsAppliancesElements)
    console.log("liste des tags appareils actifs:", tagsAppliancesElementsArray)

    const tagsUstensilsElements = document.querySelectorAll(".tags_ustensils_block_content")
    const tagsUstensilsElementsArray = Array.from(tagsUstensilsElements)
    console.log("liste des tags ustensils actifs:", tagsUstensilsElementsArray)

    if(tagsIngredientsElementsArray.length>0 ||
    tagsAppliancesElementsArray.length>0 ||
    tagsUstensilsElementsArray.length>0) {
        tagIsVisible=true
        if(newRecipes.length>0){
            newRecipes=recipesDataWithTags(newRecipes)
        } else {
            newRecipes=recipesDataWithTags(recipes)
        }
    }

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

