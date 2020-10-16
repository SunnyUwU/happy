const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-8.0544383, -34.9100154], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create marker
L.marker([-8.0544383, -34.9100154], {icon})
.addTo(map)

//image gallery
function selectImage (event) {
    const button = event.currentTarget
    
    //Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    //Selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //Atualizar o container de imagem
    imageContainer.src = image.src

    //Adicionar a classe .active para este botão
    button.classList.add("active")

}