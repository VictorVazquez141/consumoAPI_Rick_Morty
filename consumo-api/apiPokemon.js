// Consumo de api POKEMON con FETCH
/*Es una manera sencilla de realizar solicitudes HTTP */

// obtener infomración sobre un pokemon
// url de la api de pokemon

const url = 'https://pokeapi.co/api/v2/pokemon/'

//función que obtiene datos de un pokemon
// async function gePokemonData(pokemonName){
//     try{
//         const 
//     }
// }

//obtener datos de un pokemon 
async function solicitarPokemon(pokemonName){
    try{
        // realiza la solicitud a la API
        const solicitud = await fetch(`${url}${pokemonName.toLowerCase()}`)

        //verificar si la solicitud tuvo exito
        if(!solicitud.ok){
            throw new Error(`Pokemon no encontrado: ${solicitud.status}`)
        }

        //Respuesta convertida a JSON
        const datos = await solicitud.json()
        console.log(datos)

        //Mostrar información en consola
        console.log(`Nombre: ${datos.nombre}`)
        console.log(`Altura: ${datos.altura}`)
        console.log(`Peso: ${datos.peso}`)
        console.log(`Tipos: ${datos.types.map(type => type.type.name).join(',')}`)
    } catch(error){
        console.error(error.message)
    }

}
solicitarPokemon("Pikachu")


