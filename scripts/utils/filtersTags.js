
// CIBLAGE ET CREATION DES ELEMENTS
const tagsBlock = document.querySelector('.tags')

const ingredientsTagBlock = document.createElement('div')
ingredientsTagBlock.classList.add('tags_ingredients')

const appliancesTagBlock = document.createElement('div')
appliancesTagBlock.classList.add('tags_appliances')

const ustensilsTagBlock = document.createElement('div')
ustensilsTagBlock.classList.add('tags_ustensils')


// CREATION DES VARIABLES TABLEAUX
const ingredientItems = document.getElementsByClassName('filters_ingredients_block_list_item')
console.log('items:',ingredientItems )


const appliancesItems = document.getElementsByClassName('filters_appliances_block_list_item')

const ustensilsItems = document.getElementsByClassName('filters_ustensils_block_list_item')


let tagIngredientAdded = false

function createTagIngredients(){
    // const ingredientsTags = document.querySelectorAll(".tags_ingredients_block_content")
    // const ingredientsTagsArray = Array.from(ingredientsTags)
    // console.log('tags array test doublon', ingredientsTagsArray)
    
    console.log('ajout tagingredientAdded test false', tagIngredientAdded)
    if(tagIngredientAdded === false){
        const newIngredientArray = Array.from(ingredientItems)
        // console.log('test ingredients array',newIngredientArray)
        newIngredientArray.forEach((element) => {
            element.addEventListener("click", (event) => {
                /* Reinitalise l'input de recherche au click */
                const filterInput = document.querySelector('.filters_ingredients_block_input') 
                if(filterInput.value !=""){
                    filterInput.value = "";
                }

                /* Création du tag au click */
                const tagIngredientBlock = document.createElement('div')
                tagIngredientBlock.classList.add('tags_ingredients_block')
                tagIngredientBlock.classList.add('bg-warning')

                const tagIngredientContent = document.createElement('span')
                tagIngredientContent.classList.add('tags_ingredients_block_content')
                tagIngredientContent.innerHTML = event.target.innerHTML

                const tagIngredientClose = document.createElement('img')
                tagIngredientClose.classList.add('tags_ingredients_block_img')
                tagIngredientClose.src='../assets/icones/close_Tag.svg'
                // document.createElement('i')
                // tagIngredientClose.classList.add('fa-solid fa-user')

                /* Ajout listener pour supprimer le tag */
                tagIngredientClose.addEventListener('click',()=>{
                    tagIngredientBlock.style.display='none'
                    tagIngredientBlock.innerHTML=""
                    searchData()
                    tagIngredientAdded = false
                    element.style.backgroundColor = 'white'
                    recipesDataWithTags(recipes)
                    return false
                })       

                tagsBlock.appendChild(ingredientsTagBlock)
                ingredientsTagBlock.appendChild(tagIngredientBlock)
                tagIngredientBlock.appendChild(tagIngredientContent)
                tagIngredientBlock.appendChild(tagIngredientClose)
                // element.style.backgroundColor = '#FFD15B'
                searchData()
                console.log('ajout tagingredientAdded test true', tagIngredientAdded)  
            })         
        })
        tagIngredientAdded=true
    } 
}


let tagAppliancesAdded = false

function createTagAppliances(){
    // const ingredientsTags = document.querySelectorAll(".tags_ingredients_block_content")
    // const ingredientsTagsArray = Array.from(ingredientsTags)
    // console.log('tags array test doublon', ingredientsTagsArray)
    
    console.log('ajout tagingredientAdded test false', tagAppliancesAdded)
    if(tagAppliancesAdded === false){
        const newAppliancesArray = Array.from(appliancesItems)
        // console.log('test ingredients array',newIngredientArray)
        newAppliancesArray.forEach((element) => {
            element.addEventListener("click", (event) => {
                /* Reinitalise l'input de recherche au click */
                const filterInput = document.querySelector('.filters_appliances_block_input') 
                if(filterInput.value !=""){
                    filterInput.value = "";
                }

                /* Création du tag au click */
                const tagApplianceBlock = document.createElement('div')
                tagApplianceBlock.classList.add('tags_appliances_block')
                tagApplianceBlock.classList.add('bg-warning')

                const tagApplianceContent = document.createElement('span')
                tagApplianceContent.classList.add('tags_appliances_block_content')
                tagApplianceContent.innerHTML = event.target.innerHTML

                const tagApplianceClose = document.createElement('img')
                tagApplianceClose.classList.add('tags_appliances_block_img')
                tagApplianceClose.src='../assets/icones/close_Tag.svg'
                // document.createElement('i')
                // tagIngredientClose.classList.add('fa-solid fa-user')

                /* Ajout listener pour supprimer le tag */
                tagApplianceClose.addEventListener('click',()=>{
                    tagApplianceBlock.style.display='none'
                    tagApplianceBlock.innerHTML=""
                    searchData()
                    tagAppliancesAdded = false
                    element.style.backgroundColor = 'white'
                    recipesDataWithTags(recipes)
                    return false
                })       

                tagsBlock.appendChild(appliancesTagBlock)
                appliancesTagBlock.appendChild(tagApplianceBlock)
                tagApplianceBlock.appendChild(tagApplianceContent)
                tagApplianceBlock.appendChild(tagApplianceClose)
                // element.style.backgroundColor = '#FFD15B'
                searchData()
                console.log('ajout tagApplicancesAdded test true', tagAppliancesAdded)  
            })         
        })
    }
    tagAppliancesAdded=true
}


let tagUstensilsAdded = false

function createTagUstensils(){
    // const ingredientsTags = document.querySelectorAll(".tags_ingredients_block_content")
    // const ingredientsTagsArray = Array.from(ingredientsTags)
    // console.log('tags array test doublon', ingredientsTagsArray)
    
    console.log('ajout tagingredientAdded test false', tagUstensilsAdded)
    if(tagUstensilsAdded === false){
        const newUstensilsArray = Array.from(ustensilsItems)
        // console.log('test ingredients array',newIngredientArray)
        newUstensilsArray.forEach((element) => {
            element.addEventListener("click", (event) => {
                /* Reinitalise l'input de recherche au click */
                const filterInput = document.querySelector('.filters_ustensils_block_input') 
                if(filterInput.value !=""){
                    filterInput.value = "";
                }

                /* Création du tag au click */
                const tagUstensilBlock = document.createElement('div')
                tagUstensilBlock.classList.add('tags_ustensils_block')
                tagUstensilBlock.classList.add('bg-warning')

                const tagUstensilContent = document.createElement('span')
                tagUstensilContent.classList.add('tags_ustensils_block_content')
                tagUstensilContent.innerHTML = event.target.innerHTML

                const tagUstensilClose = document.createElement('img')
                tagUstensilClose.classList.add('tags_ustensils_block_img')
                tagUstensilClose.src='../assets/icones/close_Tag.svg'
                // document.createElement('i')
                // tagIngredientClose.classList.add('fa-solid fa-user')

                /* Ajout listener pour supprimer le tag */
                tagUstensilClose.addEventListener('click',()=>{
                    tagUstensilBlock.style.display='none'
                    tagUstensilBlock.innerHTML=""
                    searchData()
                    tagUstensilsAdded = false
                    element.style.backgroundColor = 'white'
                    recipesDataWithTags(recipes)
                    return false
                })       

                tagsBlock.appendChild(ustensilsTagBlock)
                ustensilsTagBlock.appendChild(tagUstensilBlock)
                tagUstensilBlock.appendChild(tagUstensilContent)
                tagUstensilBlock.appendChild(tagUstensilClose)
                // element.style.backgroundColor = '#FFD15B'
                searchData()
                console.log('ajout tagustensilsAdded test true', tagUstensilsAdded)  
            })         
        })
    }
    tagUstensilsAdded=true
}


//Version finale

function recipesDataWithTags(recipes) {
    const ingredientsElements = document.querySelectorAll(".tags_ingredients_block_content")
    const ingredientsElementsArray = Array.from(ingredientsElements)
    console.log("liste des tags ingredients actifs:", ingredientsElementsArray)

    const appliancesElements = document.querySelectorAll(".tags_appliances_block_content")
    const appliancesElementsArray = Array.from(appliancesElements)
    console.log("liste des tags appliances actifs:", appliancesElements)

    const ustensilsElements = document.querySelectorAll(".tags_ustensils_block_content")
    const ustensilsElementsArray = Array.from(ustensilsElements)
    console.log("liste des tags ustensils actifs:", ustensilsElements)

    let newRecipes = []

    let ingredientsElementsTagged = []
    let appliancesElementsTagged = []
    let ustensilsElementsTagged = []

    sum(newRecipes)
      
    ingredientsElementsTagged = ingredientsElementsArray.map((element) => element.innerHTML)
    appliancesElementsTagged = appliancesElementsArray.map((element) => element.innerHTML)
    ustensilsElementsTagged = ustensilsElementsArray.map((element) => element.innerHTML)


    console.log('Text des tags ingredients affiché:', ingredientsElementsTagged)
    console.log('Text des tags appliances affiché:', appliancesElementsTagged)

    newRecipes = recipes.filter((recipe) => {
        let isVisible = false;

        let ingredientFound = false;
        let applianceFound = false;
        let ustensilFound = false;

        let sumIngredientFound = 0
        let sumApplianceFound = 0
        let sumUstensilFound = 0

        let newRecipeIngredients =[]
        newRecipeIngredients = recipe.ingredients.map(({ingredient}) => ingredient);

        let newRecipeAppliances = []
        newRecipeAppliances.push(recipe.appliance)

        let newRecipeUstensils =[]
        newRecipeUstensils = recipe.ustensils.map((ustensil) => ustensil);


        console.log("new tab appliances", newRecipeAppliances)

        /** Incrémentation des compteurs */
        if(ingredientsElementsTagged.length > 0){
            ingredientsElementsTagged.forEach((element)=> {
                if(newRecipeIngredients.includes(element)){
                    sumIngredientFound += 1
                }
            });
        }

        if(appliancesElementsTagged.length > 0){
            appliancesElementsTagged.forEach((element)=> {
                if(newRecipeAppliances.includes(element)){
                    sumApplianceFound += 1
                }
            });
        }

        if(ustensilsElementsTagged.length > 0){
            ustensilsElementsTagged.forEach((element)=> {
                if(newRecipeUstensils.includes(element)){
                    sumUstensilFound += 1
                }
            });
        }


        if(ingredientsElementsTagged.length === sumIngredientFound) {
            ingredientFound = true
        }

        
        if(appliancesElementsTagged.length === sumApplianceFound) {
            applianceFound = true
        }

        if(ustensilsElementsTagged.length === sumUstensilFound) {
            ustensilFound = true
        }


        if((ingredientFound===true) && (applianceFound===true) && (ustensilFound===true)) {
            isVisible=true;
        }
    //     console.log('tab ingred', newRecipeIngredients)
    // console.log('tab appli', newRecipeAppliances)
        return isVisible
    })
    console.log('tableau nvx filtré', newRecipes)
    generateFiltersList(newRecipes)
    recipesData(newRecipes)
    sum(newRecipes)
    return newRecipes
}

/** Fonction d'actualisation du nombre de recettes affichées */
function sum(data){
    const recipesSum = document.querySelector('.filters_element_sum')
    recipesSum.innerHTML=`${data.length} recettes`
    console.log("tableau test :", data)
}