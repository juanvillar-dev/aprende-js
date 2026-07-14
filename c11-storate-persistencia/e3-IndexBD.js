/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    IndexedDB
    -   Es una base de datos NO SQL dentro del navegador.
    -   Permite guardar datos estructurados (objetos, colecciones) de forma asincrona.
    

    Eventos Principales
    -   oneupgradeneeded    => Se dispara al crear o cambiar versiones, aqui defines estructura.
    -   onsuccess           => La conexion es exitosa, puedes usar la BD
    -   oneerror            => Ocurrió un error
    -   tx.oncomplete       => Transacción exitosa.


    Transacciones
    -   Abre transaccion sobre las tablas(object store) y pide permiso de lectura/escritura


    Indices
    -   Es un atajo para buscar registros por un campo diferene a la CLAVE PRIMARIA (KeyPath)


    Requests y Results
    -   Cada operación (get, getAll, add, put, delete) devuelve un request:
    -   request         => Objeto que representa la petición asíncrona.
    -   request.result  => Contiene el resultado final, disponible dentro de .
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/







/*-------------------------------------------------------------------------------------------------
    INICIALIZAR UNA BD
-------------------------------------------------------------------------------------------------*/
function crearBD(){
    const request = indexedDB.open("Almacen",1)     // Abrir o crear la BD "Tienda" versión 1     

    request.onupgradeneeded = (event) =>{           // Accion si se crea o cambia version
            const bd    = event.target.result;
            
            //Crear tabla
            const store = bd.createObjectStore("producos", {keyPath:"id", autoIncrement: true});
            //Crear indices para búsqueda
            store.createIndex("nombre"      ,"nombre"       ,{unique: false});
            store.createIndex("marca"       ,"marca"        ,{unique: false});
            store.createIndex("categoria"   ,"categoria"    ,{unique: false});
    };

   
    request.onsuccess       = (event) =>{           // Accion si la BD se abre correctamente
            const bd = event.target.result;
            console.log     ("✅ BD creada", bd.name);
    }


    request.onerror         = (event) => {          // Accion si ocurre un error al abrir la BD
            console.error   ("❌ Error al abrir BD:", event.target.error);
    }
}




/*-------------------------------------------------------------------------------------------------
    FUNCIÓN PARA ABRIR LA BD
-------------------------------------------------------------------------------------------------*/
function abrirBD(){
        return new Promise((resolve, reject)=>{
            const request = indexedDB.open("Almacen", 1);
            request.onsuccess   = () => resolve (request.result );  // devuelve la conexión
            request.onerror     = () => reject  (request.error  );
        });
}




/*-------------------------------------------------------------------------------------------------
    INSERTAR UN PRODUCTO
-------------------------------------------------------------------------------------------------*/
async function crearProducto(producto){
        const bd    = await abrirBD();
        const tx    = bd.transaction("productos","readwrite");      // Abre transaccion sobre las tablas(object store)
        const store = tx.objectStore("productos");                  // Especificas con que tabla(object store) trabajar
        
        store.add(producto);                                        // INSERTAR
        
        tx.oncomplete = () => console.log("✅ Producto creado:", producto);

}




/*-------------------------------------------------------------------------------------------------
    BUSCAR UN PRODUCTO
-------------------------------------------------------------------------------------------------*/
async function buscarProducto(id) {
        const bd    = await abrirBD();
        const tx    = bd.transaction("productos","readonly");       // solo lectura
        const store = tx.objectStore("productos");

        const request = store.get(id);                              // BUSCAR POR ID

        request.onsuccess = () => {return request.result}; 
}





/*-------------------------------------------------------------------------------------------------
    BUSCAR UN PRODUCTO POR OTRO CAMPO (INDEX)
-------------------------------------------------------------------------------------------------*/
async function buscarProducto(nombre) {
        const bd    = await abrirBD();
        const tx    = bd.transaction("productos","readonly");       // solo lectura
        const index = tx.objectStore("productos").index("nombre");

        const request = index.getAll(nombre);                       // BUSCAR POR ID

        request.onsuccess = () => {return request.result}; 
}




/*-------------------------------------------------------------------------------------------------
    LEER TODOS LOS PRODUCTOS
-------------------------------------------------------------------------------------------------*/
async function getProductos() {
        const bd    = await abrirBD();
        const tx    = bd.transaction("productos","readonly")
        const store = tx.objectStore("productos");

        const request = store.getAll();                             // OBTENER TODA LA LISTA

        request.onsuccess = () => request.result
}




/*-------------------------------------------------------------------------------------------------
    ACTUALIZAR PRODUCTO
-------------------------------------------------------------------------------------------------*/
async function actualizarProducto(id, nuevaData) {
        const bd    = await abrirBD();
        const tx    = bd.transaction("productos", "readwrite");
        const store = tx.objectStore("productos");

        const request = store.get(id);                              // BUSCAR POR ID
        request.onsuccess = () => {
                const producto = request.result;

                if(producto){
                    Object.assign(producto, nuevaData);             // Actualiza campos
                    store.put(producto);                            // ACTUALIZAR
                    console.log("✏️ Producto actualizado:", producto);
                }
        }
}




/*-------------------------------------------------------------------------------------------------
    ELIMINAR PRODUCTO
-------------------------------------------------------------------------------------------------*/
async function eliminarProducto(id) {
        const bd    = await abrirBD();
        const tx    = bd.transaction("productos", "readwrite");
        const store = tx.objectStore("productos");

        store.delete(id);

        tx.oncomplete = () => console.log("🗑️ Producto eliminado con id:", id);
}   