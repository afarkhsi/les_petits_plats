// ciblage des elements

// const searchBar = document.querySelector(".search_zone_input")
// const defaultMessage = document.querySelector(".message-no-match-result")
// const cards = document.querySelectorAll('.cards')

// console.log('affichage des cards', cards)

// //ajout ecouteur evenement keyup
// searchBar.addEventListener("input", (event)=>{
//     const searchedName = event.target.value
//     cards.forEach(card => {
//         const isVisible = card.textContent.includes(searchedName)
//         card.element.classList.toggle('hide', !isVisible)
//     })
// })

// function searchRecipe (letters) {
//     let input = document.querySelector(".search_zone_input").trim().value
//     input = input.toLowerCase();
//     let cards = document.querySelectorAll('card')

//     for (i=0; cards.length; i++) {
//         if (!cards[i].innerHTML.toLowerCase().includes(input)) {
//             cards[i].style.display="none";
//             defaultMessage.innerHTML="Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
//         }

//         else {
//             cards[i].style.display="block"
//         }
//     }
// }