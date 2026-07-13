const URL = "https://www.themealdb.com/api/json/v1/1/";






/*-------------------------------------------------------------------------------------------------
    EJEMPLO BASICO          | Aquí aplicamos manejo de errores desde el inicio
-------------------------------------------------------------------------------------------------*/
async function getCategorias() {
    try{
        const response  = await fetch(URL+`categories.php`);

        if(!response.ok) throw new Error("Error HTTP: "+response.status);

        const data      = await response.json();
        return data.categories; //Especifica que parte del obj quieres

    } catch (error){
        console.error("Errror en la red o peticion", error);
        return [];
    }
}




/*-------------------------------------------------------------------------------------------------
    RECETAS POR CATEGORÍA   |   (función dinámica) Aquí usamos funciones dinámicas con parámetros
-------------------------------------------------------------------------------------------------*/
async function getRecetas(categoria) {
    try{
        const response  = await fetch(URL+`filter.php?c=${categoria}`);

        if(!response.ok)  throw new Error("Error HTTP: "+response.status);

        const data      = await response.json();
        return data.meals;
    } catch (error){
        console.error("Error", error);
    }
}




/*-------------------------------------------------------------------------------------------------
    RECETAS POR CATEGORÍA   |   (función dinámica) Aquí usamos funciones dinámicas con parámetros
-------------------------------------------------------------------------------------------------*/
async function getDetalleReceta(id) {
    try {
        const response  = await fetch(URL+`lookup.php?i=${id}`);
        
        if(!response.ok)  throw new Error("Error HTTP: "+response.status);

        const data      = await response.json();
        const alimento  = data.meals[0];
        return alimento;
    } catch(error){ 
        console.error("Error", error);
    }
}




/*-------------------------------------------------------------------------------------------------
    OPERACIONES
-------------------------------------------------------------------------------------------------*/


async function operaciones() {
    const categorias= await getCategorias();
    console.log(categorias);

    const recetas   = await getRecetas("pasta");
    console.log(recetas);

    const detalle   = await getDetalleReceta(53064);
    console.log(detalle); 
}


operaciones();