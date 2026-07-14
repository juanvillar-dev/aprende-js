/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    LOCAL STORAGE
    -   Permite guardar datos en para (clave - valor)
    -   Estos datos persisten incluso despues de cerrar el navegador.
    -   Se usa para guardar configuraciones, preferencias, sesiones ligeras.
    -   No es la mejor opcion, esta limitada en tamaño(5mb), solo string, no seguro.
    -   Las cookies o IndexDB pueden ser mas adecuadas
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/

const producto = {
    nombre  : "licuadora",
    precio  : 299.99,
    marca   : "Samsung"
}

const productos = [
    {nombre: "Microfono", precio:280 },
    {nombre: "Teclado"  , precio:50  },
    {nombre: "Monitor"  , precio:750 },
    {nombre: "Telefono" , precio:800 },
    {nombre: "Mouse"    , precio:120 },
];








/*-------------------------------------------------------------------------------------------------
    GUARDAR VALORES
-------------------------------------------------------------------------------------------------*/
function ejemplo1(){
    localStorage.setItem("nombre", "Juan");
    localStorage.setItem("producto", producto);
    localStorage.setItem("producto2", JSON.stringify(producto)); // Guardar objeto
}




/*-------------------------------------------------------------------------------------------------
    LEER VALORES
-------------------------------------------------------------------------------------------------*/
function ejemplo2(){
    const x1 = localStorage.getItem("nombre");
    const x2 = localStorage.getItem("producto");
    const x3 = JSON.parse(localStorage.getItem("producto2"));

    console.log(x1);
    console.log(x2);
    console.log(x3);
}




/*-------------------------------------------------------------------------------------------------
    ELIMINAR VALORES
-------------------------------------------------------------------------------------------------*/
function ejemplo3(){
    localStorage.removeItem("nombre");
    localStorage.removeItem("producto");
    localStorage.removeItem("producto2");

    localStorage.clear()    //Limpiar todo
}











function ejemplo4(){
    localStorage.setItem("productos", JSON.stringify(productos));
    const x = JSON.parse(localStorage.getItem("productos"));
    console.log(x);
}



//PARA ACTUALIZAR DATOS SIMPLEMENTE VUELVES A ENVIAR CON LA MODIFICACION
function ejemplo5(){
    productos.push({nombre: "microondas", precio: 1500});
    productos.push({nombre: "tv", precio: 2200});

    localStorage.setItem("productos", JSON.stringify(productos));
    const x = JSON.parse(localStorage.getItem("productos"));
    console.log(x);
}

ejemplo4();
ejemplo3();