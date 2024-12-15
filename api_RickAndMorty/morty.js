// Llamamos la dirección de API (character = personajes)
const apiURL = 'https://rickandmortyapi.com/api/character'

/* Funcion para obtener los personajes */
/*  */
async function getCharacters() {
    try {
        // realizamos la petición para consumir la API
        const response = await fetch(apiURL) // devuelve una promesa 
        // Respuesta interpretada en formato JOSON
        const {results} = await response.json()   

        /*Por cada personaje devuelto de la API se crea una carta
        como se diseño en la función cardCharacter */
        for (let i = 0; i < results.length; i++){
            // por cada personaje llamamos a la función que crea cartas
            cardCharacters(results[i])
        }

        // console.log(results) //mostrar en consola

    } catch (error) { //En caso de existir un error en consulta
        console.error(error.message)
    }

}
getCharacters()


/// Carta de visualización  MANEJO DEL DOM
function cardCharacters (character){
    // destructuracion (nombre, estado, imagen)
    const {name, status, image} = character

    // indicamos el contenerdor de cartas con su clase
    const cardContainer = document.querySelector('.cards-container');

    // Creamos un elemento que muestre el nombre del personaje
    const title = document.createElement('h5')
    title.textContent = name;

    // Indicamos el status del personaje
    const characterStatus = document.createElement('p')
    characterStatus.textContent = status
    
    // identificación de colores en el status
    if (status == 'Alive') { characterStatus.style.color = 'lime'}
    else { characterStatus.style.color = 'red'};
    
    // Creamos la recuperación de la imagen de personaje
    const characterImage = document.createElement('img')
    characterImage.src = image
    characterImage.width = 200

    // creación de la carta (div de cada personaje)
    const card = document.createElement('div')
    // Agregamos Nodos de elementos creados anteriromente para mostrar en 'card'
    card.appendChild(title)
    card.appendChild(characterImage)
    card.appendChild(characterStatus)
    // Style 
    card.style.backgroundColor = 'rgb(1 21 77)'
    card.style.color = 'aqua'

    // Para cada contenedor 'Card' se le dan sus caracteristicas
    cardContainer.appendChild(card);

}


