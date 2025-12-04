// Selecteer de button om alle artikelen te kunnen verbergen
let filterKnop = document.querySelector('.filter-knop')

// Even checken of de juiste button geselecteerd wordt
// console.log(filterknop)
// Wacht totdat iemand erop klikt
filterKnop.addEventListener('click', function() {
    // Verberg alle artikelen
    document.querySelector('.filter').classList.toggle('filter-visible')
})
