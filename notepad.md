fetch("https://pokeapi.co/api/v2/pokemon/")
.then(respuesta => respuesta.json())
.then(respuestaJSON => {
    console.log(respuestaJSON.results);
    let listaNombreDePokemons;    sacarLosNombresDeLosPokemon();