// obtener infomración sobre un pokemon
// url de la api de pokemon

const url = 'https://pokeapi.co/api/v2/pokemon/'

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
        console.log(`Nombre: ${datos.name}`)
        console.log(`Altura: ${datos.height}`)
        console.log(`Peso: ${datos.weight}`)
        console.log(`Tipos: ${datos.types.map(type => type.type.name).join(',')}`)
    } catch(error){
        console.error(error.message)
    }

}
solicitarPokemon("Pikachu")