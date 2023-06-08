/* Fonction creation filtre ingredients */
function createIngredientsFilter() {
    const filterIngredients = document.querySelector('.filter_ingredients')
    const filterIngredientsBtn = document.querySelector('.btn-ingredients')

    const filterBlock = document.createElement('div')
    filterBlock.classList.add('filters_element_block')
    // filterBlock.style.display="none"

    const filterInput = document.createElement('input')    
    filterInput.classList.add('filters_element_block_input')

    const filterList = document.createElement('ul')
    filterList.classList.add('filters_element_block_list')

    filterIngredients.appendChild(filterBlock)
    filterBlock.appendChild(filterInput)
    filterBlock.appendChild(filterList)

    filterIngredientsBtn.addEventListener('click', function() {
        const aria = filterIngredientsBtn.toggleAttribute('aria-expanded');
        if(!aria) {
            filterBlock.style.display="block"
            filterIngredients.setAttribute('aria-expanded', 'true')

        } else {
            filterBlock.style.display="none"
            filterIngredients.setAttribute('aria-expanded', 'false')
            filterIngredientsBtn.setAttribute('aria-expanded', 'false')
        }
    });
}

// /* Fonction creation filtre appliances */
function createAppliancesFilter() {
    const filterAppliances = document.querySelector('.filter_appliances')
    const filterAppliancesBtn = document.querySelector('.btn-appliances')

    const filterBlock = document.createElement('div')
    filterBlock.classList.add('filters_element_block')
    filterBlock.setAttribute('aria-expanded', 'false')
    filterBlock.style.display="none"

    const filterInput = document.createElement('input')    
    filterInput.classList.add('filters_element_block_input')

    const filterList = document.createElement('ul')
    filterList.classList.add('filters_element_block_list')

    filterAppliances.appendChild(filterBlock)
    filterBlock.appendChild(filterInput)
    filterBlock.appendChild(filterList)

    filterAppliancesBtn.addEventListener('click', function() {
        const aria = filterAppliancesBtn.toggleAttribute('aria-expanded');
        if(!aria) {
            filterBlock.style.display="block"
            filterAppliances.setAttribute('aria-expanded', 'true')

        } else {
            filterBlock.style.display="none"
            filterAppliances.setAttribute('aria-expanded', 'false')
            filterAppliancesBtn.setAttribute('aria-expanded', 'false')
        }
    })

}

// /* Fonction creation filtre ustensils */
function createUstensilsFilter() {
    const filterUstensils = document.querySelector('.filter_ustensils')
    const filterUstensilsBtn = document.querySelector('.btn-ustensils')

    const filterBlock = document.createElement('div')
    filterBlock.classList.add('filters_element_block')
    filterBlock.setAttribute('aria-expanded', 'false')
    filterBlock.style.display="none"

    const filterInput = document.createElement('input')    
    filterInput.classList.add('filters_element_block_input')

    const filterList = document.createElement('ul')
    filterList.classList.add('filters_element_block_list')

    filterUstensils.appendChild(filterBlock)
    filterBlock.appendChild(filterInput)
    filterBlock.appendChild(filterList)

    filterUstensilsBtn.addEventListener('click', function() {
        const aria = filterUstensilsBtn.toggleAttribute('aria-expanded');
        if(!aria) {
            filterBlock.style.display="block"
            filterUstensils.setAttribute('aria-expanded', 'true')

        } else {
            filterBlock.style.display="none"
            filterUstensils.setAttribute('aria-expanded', 'false')
            filterUstensilsBtn.setAttribute('aria-expanded', 'false')
        }
    })
}






// function searchInputFilter () {

// }

// function inputFilter() {

// }