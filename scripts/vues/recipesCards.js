
function crateIngredients(ingredients) {

    // const ingredientsWrapper = document.querySelector
    const ingredientsWrapper = document.createElement('div')
    ingredientsWrapper.classList.add('card_body_ingredients-detail')

    // const ingredientsTitle = document.createElement('h4')
    // ingredientsTitle.classList.add('card-h4')
    // ingredientsTitle.classList.add('card_body_h4')
    // ingredientsTitle.textContent="Ingrédients"
    // ingredientsWrapper.appendChild(ingredientsTitle);

    let ingredientsDOM;

    for(let ingredient of ingredients) {
        ingredientsDOM = document.createElement('p')
        ingredientsDOM.classList.add('card_body_ingredients-detail_block')
        ingredientsDOM.setAttribute('data-ingredient', ingredient.ingredient);
        if (ingredient.unit === '' || ingredient.unit== null) {
            if (ingredient.quantity) {
                ingredientsDOM.innerHTML = `<p class="card_body_ingredients-detail_block_name">${ingredient.ingredient}</p> 
                                            <p class="card_body_ingredients-detail_block_quantity">${ingredient.quantity}</p>`;
            } else {
                ingredientsDOM.innerHTML = `<p class="card_body_ingredients-detail_block_name">${ingredient.ingredient}</p> `;
            } 
        } else {
            ingredientsDOM.innerHTML = `<p class="card_body_ingredients-detail_block_name">${ingredient.ingredient}</p> 
                                        <p class="card_body_ingredients-detail_block_quantity">${ingredient.quantity} ${ingredient.unit}</p>
                                        `;
        }
        ingredientsWrapper.appendChild(ingredientsDOM);
        // console.log(ingredientsDOM)
        }
    return ingredientsWrapper
}

function createRecipeCard(data) {
    const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = data;

    const wrapper = document.createElement('article');
    wrapper.classList.add("cards")
    wrapper.classList.add("col-4")
    wrapper.setAttribute('id', id);
    wrapper.setAttribute('servings', servings);
    wrapper.style.maxWidth = "380px"
    wrapper.style.maxHeight = "730px"

    const cardBlock = document.createElement('div')
    cardBlock.classList.add("card")
    cardBlock.classList.add("rounded-4")
    cardBlock.classList.add("border-light")
    // cardBlock.style.maxWidth = "380px"

    //FIXME: add au scss
    cardBlock.style.width = "100%"
    cardBlock.style.height = "100%"


    const cardHidden = document.createElement('div')
    cardHidden.classList.add("is-hidden")

    const cardImage = document.createElement('img')
    cardImage.classList.add("card_img")
    cardImage.classList.add("card-img-top")
    cardImage.classList.add("h-")
    cardImage.setAttribute('src', image)
    cardImage.setAttribute('alt', name)

    const cardTimer = document.createElement('span')
    cardTimer.classList.add("card_timer")
    cardTimer.classList.add("bg-warning")
    cardTimer.classList.add("rounded-5")
    cardTimer.textContent = `${time} min`

    const cardTitle = document.createElement('h3')
    cardTitle.classList.add("card_title")
    cardTitle.classList.add("card-title")
    cardTitle.textContent = `${name}`

    const cardBody = document.createElement('div')
    cardBody.classList.add("card_body")
    cardBody.classList.add("card-body")

    const cardRecipesTitle = document.createElement('h4')
    cardRecipesTitle.classList.add("card_body_h4")
    cardRecipesTitle.classList.add("card-h4")
    cardRecipesTitle.textContent = "RECETTE"

    const cardRecipesDescription = document.createElement('p')
    cardRecipesDescription.classList.add("card_body_text")
    cardRecipesDescription.classList.add("card-text")
    cardRecipesDescription.textContent = `${description}`

    const cardIngredientsTitle = document.createElement('h4')
    cardIngredientsTitle.classList.add('card-h4')
    cardIngredientsTitle.classList.add('card_body_h4')
    cardIngredientsTitle.textContent="INGRÉDIENTS"

    const cardRecipesIngredients = crateIngredients(ingredients)

    wrapper.appendChild(cardBlock);
    cardBlock.appendChild(cardImage);
    cardBlock.appendChild(cardTimer);
    cardBlock.appendChild(cardTitle);
    cardBlock.appendChild(cardBody);
    cardBody.appendChild(cardRecipesTitle);
    cardBody.appendChild(cardRecipesDescription);
    cardBody.appendChild(cardIngredientsTitle);
    cardBody.appendChild(cardRecipesIngredients);
    wrapper.appendChild(cardHidden)

    return (wrapper);
    // const ingredientTest = getIngredients(ingredients)
    // console.log(ingredientTest)





    // function getCardDOM() {
        
    //     let cardDOM = `
    //     <div class="card" style="width: 18rem;">
    //         <img src="..." class="card-img-top" alt="...">
    //         <span class="bg-warning">${time} min</span>
    //         <h3 class="card-title">${name}</h3>
    //         <div class="card-body">
    //             <h4 class="card-h4 fw-light">Recette</h4>
    //             <p class="card-text">${description}</p>
    //         </div>
    //     </div>
    //     `
    //     ;
    //     // getIngredients(ingredients)
    //     wrapper.innerHTML=cardDOM;

    //     return wrapper;
    // }

    // return {
    //     id, 
    //     name,
    //     servings,
    //     ingredients,
    //     time,
    //     description,
    //     appliance,
    //     ustensils,
    //     getCardDOM
    // }
}