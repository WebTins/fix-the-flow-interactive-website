// Selecteer de button om alle artikelen te kunnen verbergen
let filterButton = document.querySelector('.filter-button')

// Even checken of de juiste button geselecteerd wordt
// console.log(filterknop)
// Wacht totdat iemand erop klikt
filterButton.addEventListener('click', function() {
    // Verberg alle artikelen
    document.querySelector('.filter').classList.toggle('filter-visible')
})


let applyButton = document.querySelector('.apply-button')

applyButton.addEventListener('click', function (){
    document.querySelector('.filter').classList.remove('filter-visible')
})