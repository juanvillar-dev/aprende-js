const URL = "https://pokeapi.co/api/v2/";




/*-------------------------------------------------------------------------------------------------
    Función genérica para hacer fetch con manejo de errores
-------------------------------------------------------------------------------------------------*/
async function fetchJSON(url) {
    try{
        const response  = await fetch(url);
        if(!response)     throw new Error ("Error HTTP " + response.status);
        return            await response.json();
    
    } catch (error){
        console.error("Error de red o petición: ",error);
        return null;
    }
}




/*-------------------------------------------------------------------------------------------------
    OBTENER UN POKEMON
-------------------------------------------------------------------------------------------------*/
async function getPokemon(nombre) {
    const data = await fetchJSON(URL+`pokemon/${nombre}`);
    if(!data) return null;
    return data;
}




/*-------------------------------------------------------------------------------------------------
    LISTAR POKEMONES (PAGINACIÓN)
-------------------------------------------------------------------------------------------------*/
async function listarPokemons(limit = 10, offset = 0) {
    const data  = await fetchJSON(URL+`pokemon?limit=${limit}&offset=${offset}`);
    if(!data)   return [];
    return data.results;
}




/*-------------------------------------------------------------------------------------------------
    ESTADISTICAS Y HABILIDADES
-------------------------------------------------------------------------------------------------*/
function mostrarEstadisticas(data){
    console.log("📊 Estadísticas:");
    data.stats.forEach(s => console.log(`${s.stat.name}: ${s.base_stat}`));

    console.log("⚡ Habilidades:");
    data.abilities.forEach(a => console.log("-", a.ability.name));
}




/*-------------------------------------------------------------------------------------------------
    🔄 PARELELIZAR PETICIONES CON PROMISE.ALL
-------------------------------------------------------------------------------------------------*/
async function getMultiplesPokemon(nombres){
    try {
        //Esta llamando a varios pokemones, los entrega como una lista de promesas
        const promesas      = nombres.map(nombre => 
            fetch(URL+`pokemon/${nombre}`).then(response=>response.json())
        );
        const resultados    = await Promise.all(promesas);
        return resultados;
    } catch (error){
        console.error("Error en peticiones paralelas", error);
    }
}





async function operaciones() {
    /* 
    const listaPaginada = await listarPokemons(10, 1);
    listaPaginada.forEach(p => console.log(p.name));



    const pokemon       = await getPokemon("pikachu");
    console.log("");    console.log("");
    console.log(`Nombre : ${pokemon.name}`);
    console.log(`Altura : ${pokemon.height}`);
    console.log(`Peso   : ${pokemon.weight}`);
    console.log(`Tipos  : ${pokemon.types.map(t=>t.type.name).join(",")}`);



    mostrarEstadisticas(pokemon);
    */
    const data =  await getMultiplesPokemon(["pikachu","charmander","bulbasaur"]);    
    data.forEach(p => console.log("📌", p.name, "Tipos:", p.types.map(t => t.type.name).join(", ")));

}











async function getPokemonConCancelacion(nombre) {
  const controller = new AbortController();
  const signal = controller.signal;

  setTimeout(() => controller.abort(), 50); // cancelar tras 1s

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`, { signal });
    const data = await res.json();
    console.log("✅ Pokémon:", data.name);
  } catch (err) {
    if (err.name === "AbortError") {
      console.error("❌ Petición cancelada");
    } else {
      console.error("❌ Error:", err);
    }
  }
}
getPokemonConCancelacion("pikachu");

