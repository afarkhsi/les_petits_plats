
// CIBLAGE ET CREATION DES ELEMENTS
// const filterIngredients = document.querySelector('.filter_ingredients')
// const filterIngredientsBtn = document.querySelector('.btn-ingredients')
// const filterBlock = document.querySelector('.filters_ingredients_block')

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

let tagAded = false


function createTagIngredients(){
    if(tagAded === false){
        const newIngredientArray = Array.from(ingredientItems)

        newIngredientArray.forEach((element) => {
            element.addEventListener("click", (event) => {
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

                tagIngredientClose.addEventListener('click',()=>{
                    tagIngredientBlock.style.display='none'
                    searchData()
                    // tagAded = false
                    // console.log(tagAded)
                    element.style.backgroundColor = 'white'
                    return false
                })
         
                tagsBlock.appendChild(ingredientsTagBlock)
                ingredientsTagBlock.appendChild(tagIngredientBlock)
                tagIngredientBlock.appendChild(tagIngredientContent)
                tagIngredientBlock.appendChild(tagIngredientClose)
                console.log(tagAded)
                element.style.backgroundColor = '#FFD15B'
                searchData()
            })
        })
        tagAded=true
    } 
}




