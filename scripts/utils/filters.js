/* Fonction creation filtre ingredients */
function createIngredientsFilter() {
    const filterIngredients = document.querySelector('.filter_ingredients')
    const filterIngredientsBtn = document.querySelector('.btn-ingredients')

    const filterBlock = document.createElement('div')
    filterBlock.classList.add('filters_ingredients_block')
    filterBlock.classList.add('filters_element_block')
    filterBlock.style.display="none"

    const filterInput = document.createElement('input')    
    filterInput.classList.add('filters_ingredients_block_input')
    filterInput.classList.add('filters_element_block_input')

    const filterList = document.createElement('ul')
    filterList.classList.add('filters_ingredients_block_list')
    filterList.classList.add('filters_element_block_list')
    

    filterIngredients.appendChild(filterBlock)
    filterBlock.appendChild(filterInput)
    filterBlock.appendChild(filterList)

    filterIngredientsBtn.addEventListener('click', function() {
        const arrow = document.querySelector('.filters_ingredients_btn_arrow')
        const aria = filterIngredientsBtn.toggleAttribute('aria-expanded');
        if(!aria) {
            filterBlock.style.display="block"
            filterIngredients.setAttribute('aria-expanded', 'true')
            filterIngredientsBtn.style.borderRadius = "11px 11px 0px 0px"
            arrow.style.transform = 'rotate(180deg)';
        } else {
            filterBlock.style.display="none"
            filterIngredients.setAttribute('aria-expanded', 'false')
            filterIngredientsBtn.setAttribute('aria-expanded', 'false')
            filterIngredientsBtn.style.borderRadius = "11px"
            arrow.style.transform = 'rotate(360deg)';
        }
        inputIngredientsFilter()
    });

}

/* Fonction creation filtre appliances */
function createAppliancesFilter() {
    const filterAppliances = document.querySelector('.filter_appliances')
    const filterAppliancesBtn = document.querySelector('.btn-appliances')

    const filterBlock = document.createElement('div')
    filterBlock.classList.add('filters_appliances_block')
    filterBlock.classList.add('filters_element_block')
    filterBlock.setAttribute('aria-expanded', 'false')
    filterBlock.style.display="none"

    const filterInput = document.createElement('input')    
    filterInput.classList.add('filters_appliances_block_input')
    filterInput.classList.add('filters_element_block_input')

    const filterList = document.createElement('ul')
    filterList.classList.add('filters_appliances_block_list')
    filterList.classList.add('filters_element_block_list')

    filterAppliances.appendChild(filterBlock)
    filterBlock.appendChild(filterInput)
    filterBlock.appendChild(filterList)

    filterAppliancesBtn.addEventListener('click', function() {
        const arrow = document.querySelector('.filters_appliances_btn_arrow')
        const aria = filterAppliancesBtn.toggleAttribute('aria-expanded');
        if(!aria) {
            filterBlock.style.display="block"
            filterAppliances.setAttribute('aria-expanded', 'true')
            filterAppliancesBtn.style.borderRadius = "11px 11px 0px 0px"
            arrow.style.transform = 'rotate(180deg)';
        } else {
            filterBlock.style.display="none"
            filterAppliances.setAttribute('aria-expanded', 'false')
            filterAppliancesBtn.setAttribute('aria-expanded', 'false')
            filterAppliancesBtn.style.borderRadius = "11px"
            arrow.style.transform = 'rotate(360deg)';
        }
        inputAppliancesFilter()
    })

}

/* Fonction creation filtre ustensils */
function createUstensilsFilter() {
    const filterUstensils = document.querySelector('.filter_ustensils')
    const filterUstensilsBtn = document.querySelector('.btn-ustensils')

    const filterBlock = document.createElement('div')
    filterBlock.classList.add('filters_ustensils_block')
    filterBlock.classList.add('filters_element_block')
    filterBlock.setAttribute('aria-expanded', 'false')
    filterBlock.style.display="none"

    const filterInput = document.createElement('input')    
    filterInput.classList.add('filters_ustensils_block_input')
    filterInput.classList.add('filters_element_block_input')

    const filterList = document.createElement('ul')
    filterList.classList.add('filters_ustensils_block_list')
    filterList.classList.add('filters_element_block_list')

    filterUstensils.appendChild(filterBlock)
    filterBlock.appendChild(filterInput)
    filterBlock.appendChild(filterList)

    filterUstensilsBtn.addEventListener('click', function() {
        const arrow = document.querySelector('.filters_ustensils_btn_arrow')
        const aria = filterUstensilsBtn.toggleAttribute('aria-expanded');
        if(!aria) {
            filterBlock.style.display="block"
            filterUstensils.setAttribute('aria-expanded', 'true')
            filterUstensilsBtn.style.borderRadius = "11px 11px 0px 0px"
            arrow.style.transform = 'rotate(180deg)';
        } else {
            filterBlock.style.display="none"
            filterUstensils.setAttribute('aria-expanded', 'false')
            filterUstensilsBtn.setAttribute('aria-expanded', 'false')
            filterUstensilsBtn.style.borderRadius = "11px"
            arrow.style.transform = 'rotate(360deg)';
        }
        inputUstensilsFilter()
    })
}





/** Fonction pour ajouter la liste d'element dans le filtre */

function generateFiltersList(recipes) {
    const generateIngredientsList = document.querySelector('.filters_ingredients_block_list');
    const generateAppliancesList = document.querySelector('.filters_appliances_block_list');
    const generateUstensilsList = document.querySelector('.filters_ustensils_block_list');

    const ingredientsArray = []
    const appliancesArray = []
    const ustensilsArray = []

    generateIngredientsList.innerHTML = "";
    generateAppliancesList.innerHTML = "";
    generateUstensilsList.innerHTML = "";

    // boucle pour completer les filtres
    recipes.forEach((recipe) => {
        // push les ingredients dans le tableau ingredientsArray
        recipe.ingredients.forEach((ingredient)=> {
            if(ingredientsArray.includes(ingredient.ingredient) === false) {
                ingredientsArray.push(ingredient.ingredient)
                const ingredientItem = document.createElement('li')
                ingredientItem.classList.add('filters_ingredients_block_list_item')
                ingredientItem.classList.add('filters_element_block_list_item')
                ingredientItem.innerHTML=ingredient.ingredient;

                generateIngredientsList.appendChild(ingredientItem) 
            }
        })

        // push les appareils dans le tableau appliancesArray
        const appliance = recipe.appliance
        if(appliancesArray.includes(appliance) === false) {
            appliancesArray.push(appliance)
            const appliancesItem = document.createElement('li')
            appliancesItem.classList.add('filters_appliances_block_list_item')
            appliancesItem.classList.add('filters_element_block_list_item')
            appliancesItem.innerHTML=appliance;
            generateAppliancesList.appendChild(appliancesItem)
        }

        // push les appareils dans le tableau ustensilsArray
        recipe.ustensils.forEach((ustensil)=> {
            if(ustensilsArray.includes(ustensil) === false) {
                ustensilsArray.push(ustensil)
                const ustensilsItem = document.createElement('li')
                ustensilsItem.classList.add('filters_ustensils_block_list_item')
                ustensilsItem.classList.add('filters_element_block_list_item')
                ustensilsItem.innerHTML=ustensil
                generateUstensilsList.appendChild(ustensilsItem)
            }
        })
    })

    tagIngredientAdded=false
    createTagIngredients()
    tagApllianceAdded=false
    createTagAppliances()
    tagUstensilsAdded=false
    createTagUstensils()
}


/** Fonction test recherche input filtre ingredients */
function inputIngredientsFilter() {
    const filterInput = document.querySelector('.filters_ingredients_block_input') 
    filterInput.addEventListener('keyup', () => {
        const ingredientsItem = document.querySelectorAll('.filters_ingredients_block_list_item')
        const filterInput = document.querySelector('.filters_ingredients_block_input') 
        const searchedValue = filterInput.value
    
        const regexInput = new RegExp (`${searchedValue.trim().toLowerCase()}`);
    
        ingredientsItem.forEach((item)=> {
            if(regexInput.test(item.innerHTML.toLowerCase())){
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
            return (ingredientsItem)
        })
    })
}


/** Fonction test recherche input filtre appliances */
function inputAppliancesFilter() {
    const filterInput = document.querySelector('.filters_appliances_block_input') 
    filterInput.addEventListener('keyup', () => {
        const appliancesItem = document.querySelectorAll('.filters_appliances_block_list_item')
        const filterInput = document.querySelector('.filters_appliances_block_input') 
        const searchedValue = filterInput.value
    
        const regexInput = new RegExp (`${searchedValue.trim().toLowerCase()}`);
    
        appliancesItem.forEach((item)=> {
            if(regexInput.test(item.innerHTML.toLowerCase())){
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
            return (appliancesItem)
        })
    })
}



/** Fonction test recherche input filtre ustensils */
function inputUstensilsFilter() {
    const filterInput = document.querySelector('.filters_ustensils_block_input') 
    filterInput.addEventListener('keyup', () => {
        const ustensilsItem = document.querySelectorAll('.filters_ustensils_block_list_item')
        const filterInput = document.querySelector('.filters_ustensils_block_input') 
        const searchedValue = filterInput.value
    
        const regexInput = new RegExp (`${searchedValue.trim().toLowerCase()}`);
    
        ustensilsItem.forEach((item)=> {
            if(regexInput.test(item.innerHTML.toLowerCase())){
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
            return (ustensilsItem)
        })
    })
}