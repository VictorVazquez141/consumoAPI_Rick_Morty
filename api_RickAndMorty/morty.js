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
        console.log(results) //mostrar en consola

    } catch (error) { //En caso de existir un error en consulta
        console.error(error.message)
    }

}
getCharacters()
