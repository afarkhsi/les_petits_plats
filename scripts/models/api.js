export class RecipesModel {
    constructor (url) {
        this.url = url
    }

    async getRecipesData(){
        return fetch(this.url)
            .then(response => response.json())
            .then(response => {
                return response.recipes
        })
        .catch(() => {
            throw new Error('Impossible de contacter le serveur pour recettes')
        })
    }
}