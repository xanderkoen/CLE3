window.addEventListener('load', init);


//Global variables
let imageList = ['drempel', 'toilet', 'lepel'];
let fotoField;

/**
 * Initialize after the DOM is ready
 */
function init() {
    fotoField = document.getElementById("foto-field");
    console.log(fotoField);

    createFotoField();
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createFotoField() {
    imageList = Foto(imageList);

    for (let i = 0; i < imageList.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'foto-card');
        fotoField.appendChild(card);

        let title = document.createElement('h2');
        card.appendChild(title);
        let image = document.createElement('img');
        image.src = `../media/${imageList[i]}.png`;
        card.appendChild(image);
    }
}

function Foto(array) {
    return array;
}