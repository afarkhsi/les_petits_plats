// let ingredients;
// let appareils;
// let ustensiles;



// function addUstensils(ustensil){
//     ustensiles.push(ustensil);
// }


// function getUstensils(){
//     return ustensiles;
// }


// function createIngredientsFilter() {
//     const filterIngredients = document.querySelector('.filter_element1')
//     const filterIngredientsBtn = document.querySelector('.test_filters_element1_btn')

//     const filterBlock = document.querySelector('.test_filters_element1_block')

//     // filterIngredientsBtn.addEventListener('click', function() {
//     //     const aria = filterIngredientsBtn.toggleAttribute('aria-expanded');
//     //     if(!aria) {
//     //         filterBlock.style.display="block"
//     //         filterIngredients.setAttribute('aria-expanded', 'true')
//     //         filterIngredientsBtn.style.borderRadius = "11px 11px 0px 0px"
//     //     } else {
//     //         filterBlock.style.display="none"
//     //         filterIngredients.setAttribute('aria-expanded', 'false')
//     //         filterIngredientsBtn.setAttribute('aria-expanded', 'false')
//     //         filterIngredientsBtn.style.borderRadius = "11px"
//     //     }
//     //     inputIngredientsFilter()
//     // });

// }

function generateFiltersListTEST(recipes) {
    const generateIngredientsList = document.querySelector('.test_filters_element1_block_list');
    const generateAppliancesList = document.querySelector('.test_filters_element2_block_list');
    const generateUstensilsList = document.querySelector('.test_filters_element3_block_list');

    const ingredientsArray = [];
    console.log('tab ingre', ingredientsArray)
    const appliancesArray = [];
    const ustensilsArray = [];

    generateIngredientsList.innerHTML = "";
    generateAppliancesList.innerHTML = "";
    generateUstensilsList.innerHTML = "";

    // boucle pour completer les filtres
    recipes.forEach((recipe) => {
        // push les ingredients dans le tableau ingredientsArray
        recipe.ingredients.forEach((ingredient)=> {
            if(ingredientsArray.includes(ingredient.ingredient) === false) {
                ingredientsArray.push(ingredient.ingredient);
                const ingredientItem = document.createElement('li');
                ingredientItem.classList.add('test_filters_element1_block_list_item');
                ingredientItem.innerHTML=ingredient.ingredient;
                generateIngredientsList.appendChild(ingredientItem) ;
            }
        })

        // push les appareils dans le tableau appliancesArray
        const appliance = recipe.appliance 
        if(appliancesArray.includes(appliance) === false) {
            appliancesArray.push(appliance);
            const appliancesItem = document.createElement('li');
            appliancesItem.classList.add('test_filters_element2_block_list_item');
            appliancesItem.innerHTML=appliance;;
            generateAppliancesList.appendChild(appliancesItem);
        }

        // push les appareils dans le tableau ustensilsArray
        recipe.ustensils.forEach((ustensil)=> {
            if(ustensilsArray.includes(ustensil) === false) {
                ustensilsArray.push(ustensil);
                const ustensilsItem = document.createElement('li');
                ustensilsItem.classList.add('test_filters_element3_block_item');
                ustensilsItem.innerHTML=ustensil;
                generateUstensilsList.appendChild(ustensilsItem);
            }
        })
    })

    // console.log("liste des ingrédients:", ingredientsArray)
    // console.log("liste des appareils:", appliancesArray)
    // console.log("liste des ustensiles:", ustensilsArray)
    // tagIngredientAdded=false
    // createTagIngredients()
    tagAppliancesAdded=false
    createTagAppliances()
    // tagUstensilsAdded=false
    // createTagUstensils()
}

const tagsBlock = document.querySelector('.tags')
const appliancesTagBlock = document.createElement('div')
appliancesTagBlock.classList.add('tags_appliances')

const ingredientItems = document.getElementsByClassName('filters_ingredients_block_list_item')

const appliancesItems = document.getElementsByClassName('test_filters_element2_block_list_item')

const ustensilsItems = document.getElementsByClassName('filters_ustensils_block_list_item')
function createTagAppliances(){
    let tagAppliancesAdded=false
    // const ingredientsTags = document.querySelectorAll(".tags_ingredients_block_content")
    // const ingredientsTagsArray = Array.from(ingredientsTags)
    // console.log('tags array test doublon', ingredientsTagsArray)
    
    // console.log('ajout tagingredientAdded test false', tagAppliancesAdded)
    if(tagAppliancesAdded === false){
        tagAppliancesAdded=true
        const newAppliancesArray = Array.from(appliancesItems)
        // console.log('test ingredients array',newIngredientArray)
        newAppliancesArray.forEach((element) => {
            element.addEventListener("click", (event) => {
                /* Reinitalise l'input de recherche au click */
                const filterInput = document.querySelector('.test_filters_element2_block_input') 
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
                    tagAppliancesAdded = false
                    element.style.backgroundColor = 'white'
                    searchData()
                    recipesDataWithTags(recipes)
                    return false
                })       

                tagsBlock.appendChild(appliancesTagBlock)
                appliancesTagBlock.appendChild(tagApplianceBlock)
                tagApplianceBlock.appendChild(tagApplianceContent)
                tagApplianceBlock.appendChild(tagApplianceClose)
                // element.style.backgroundColor = '#FFD15B'
                searchData()
                // console.log('ajout tagApplicancesAdded test true', tagAppliancesAdded)  
            })         
        })
    }
}



function recipesDataWithTags(recipes) {
    // const ingredientsElements = document.querySelectorAll(".tags_ingredients_block .tags_ingredients_block_content")
    // const ingredientsElementsArray = Array.from(ingredientsElements)
    // console.log("liste des tags ingredients actifs:", ingredientsElementsArray)

    const appliancesElements = document.querySelectorAll(".tags_appliances_block .tags_appliances_block_content")
    const appliancesElementsArray = Array.from(appliancesElements)
    console.log("liste des tags appliances actifs:", appliancesElements)

    // const ustensilsElements = document.querySelectorAll(".tags_ustensils_block .tags_ustensils_block_content")
    // const ustensilsElementsArray = Array.from(ustensilsElements)
    // console.log("liste des tags ustensils actifs:", ustensilsElements)

    let newRecipes = []

    // let ingredientsElementsTagged = []
    let appliancesElementsTagged = []
    // let ustensilsElementsTagged = []

    sum(newRecipes)
      
    // ingredientsElementsTagged = ingredientsElementsArray.map((element) => element.innerHTML)
    appliancesElementsTagged = appliancesElementsArray.map((element) => element.innerText)
    // ustensilsElementsTagged = ustensilsElementsArray.map((element) => element.innerHTML)


    // console.log('Text des tags ingredients affiché:', ingredientsElementsTagged)
    console.log('Text des tags appliances affiché:', appliancesElementsTagged)

    newRecipes = recipes.filter((recipe) => {
        let isVisible = false;

        // let ingredientFound = false;
        let applianceFound = false;
        // let ustensilFound = false;

        // let sumIngredientFound = 0
        let sumApplianceFound = 0
        // let sumUstensilFound = 0

        // let newRecipeIngredients =[]
        // newRecipeIngredients = recipe.ingredients.map(({ingredient}) => ingredient);

        let newRecipeAppliances = []
        newRecipeAppliances.push(recipe.appliance)

        // let newRecipeUstensils =[]
        // newRecipeUstensils = recipe.ustensils.map((ustensil) => ustensil);


        console.log("new tab appliances", newRecipeAppliances)

        /** Incrémentation des compteurs */
        // if(ingredientsElementsTagged.length > 0){
        //     ingredientsElementsTagged.forEach((element)=> {
        //         if(newRecipeIngredients.includes(element)){
        //             sumIngredientFound += 1
        //         }
        //     });
        // }

        if(appliancesElementsTagged.length > 0){
            appliancesElementsTagged.forEach((element)=> {
                if(newRecipeAppliances.includes(element)){
                    sumApplianceFound += 1
                }
            });
        }

        // if(ustensilsElementsTagged.length > 0){
        //     ustensilsElementsTagged.forEach((element)=> {
        //         if(newRecipeUstensils.includes(element)){
        //             sumUstensilFound += 1
        //         }
        //     });
        // }


        // if(ingredientsElementsTagged.length === sumIngredientFound) {
        //     ingredientFound = true
        // }

        
        if(appliancesElementsTagged.length > 0){
            if(sumApplianceFound>0) {
                 applianceFound = true;
            }     
        } else applianceFound = true;

        // if(ustensilsElementsTagged.length === sumUstensilFound) {
        //     ustensilFound = true
        // }


        if(/*(ingredientFound===true)&& */ (applianceFound===true) /*&& (ustensilFound===true)*/) {
            isVisible=true;
        }
    //     console.log('tab ingred', newRecipeIngredients)
    // console.log('tab appli', newRecipeAppliances)
        return isVisible
    })
    console.log('tableau nvx filtré', newRecipes)
    generateFiltersListTEST(newRecipes)
    recipesData(newRecipes)
    sum(newRecipes)
    return newRecipes
}

function sum(data){
    const recipesSum = document.querySelector('.filters_element_sum')
    recipesSum.innerHTML=`${data.length} recettes`
    console.log("tableau test :", data)
}
