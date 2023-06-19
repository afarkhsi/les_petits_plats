
let recipes = []

// Recupère la data
async function getRecipesData(){
    recipes = await fetch('data/recipes.json')
        .then(response => response.json())
        .then(response => {
            return response.recipes
        })
        .catch(()=> {
            throw new Error('Impossible de contacter le serveur pour recettes')
        })
    /* init est declarée dans index.js */
    init()
}
