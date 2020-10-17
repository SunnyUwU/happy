const map = L.map('mapid').setView([-8.0544383, -34.9100154], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)


})

/* //create marker
L.marker([-8.0544383, -34.9100154], {icon})
.addTo(map)
.bindPopup(popup) */

//Add campo de fotos
function addPhotoField() {
    //pegar o container de fotos
    const container = document.querySelector('#images')
    //pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    } else {
        //limpar campo antes de adicionar ao container
        newFieldContainer.children[0].value=""
        //adicionar o clone ao container de imagens
        container.appendChild(newFieldContainer)
    }
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value=""
        return
    } 
    span.parentNode.remove();
   

}

//select yes or no
function toggleSelect(event) {
    //retirar classe active
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    //colocar a classe active
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o input hidden
    const input = document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou não
    input.value = button.dataset.value
}