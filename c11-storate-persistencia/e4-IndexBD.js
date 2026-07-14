

/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    event
    -   Cada operacion(abrir base, transaccion, lectura, escritura) es asincrona
    -   Cuando termina el navegador dispara un evento(success, error, upgradeneeded, etc.)  
    -   Event dice que ocurrio.
    -   Event.target    = propiedad importante, apuna al request que origino la operacion 


    indexedDB.open("Tienda",1)
    -   Si la BD no existe, la crea.
    -   Si existe con la version 1, la abre, para otra version la crea.

    onupgradeneeded
    -   Se dispara cuando la BD se crea o se cambia de versión.
    -   Aqui se define la estructura

    request.onsuccess
    -   Se dispara cuando la conexion a la BD se abre correctamente.
    -   Aqui ya puedes usar la BD para transacciones (insertar, leer, etc.).

    request.oneerror
    -   Se dispara cuando ocurre un error al abrir la BD.
    -   Ejemplo: permisos denegados, error interno del navegador.
    
    tx.oncomplee
    -   Se dispara cuando una transacción termina con éxio.
    -   Útil para confirmar que los cambios se guardaron.





    Indice en IndexdDB
    -   Es como un "atajo" para buscar regitros dentro de una tabla(object store)
    -   Sirve para consultar por un campo distinto de la clave primaria(keyPath)
    -   Ejmplo: si una tabla tiene ID, pero quieres buscar por un atributo, usa indice.

    store.createIndex("nombre", "nombre", { unique: false });
    -   Primer "nombre"     = para el indice en la BD
    -   Segundo "nombre"    = para la propiedad del objeto
    -   {unique: false}     = ¿Pueden repetirse?




    tx = db.transaction(["productos","marcas", "categorias"], "readonly")
    -   Abre transaccion sobre las tablas(object store) y pide permiso de lectura/escritura
    
    tx.objectStore("productos")
    -   Especificas con que tabla(object store) quieres trabajar

    tx.objectStore("productos").index("campo")
    -   Puedes tener índices que apuntan a un campo específico de los objetos.
    -   Permite buscar directamente por ese campo.


    request
    -   Cada operación en IndexedDB (get, getAll, add, put, etc.) devuelve un request.
    -   Es un objeto que representa la petición asíncrona al motor de IndexedDB.
    -   No devuelve el resultado directamente, sera atraves de eventos(onsuccess, oneerror)

---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/





function crearBD(){    
        const request = indexedDB.open("Tienda",1)      // Crear o llamar BD   

        request.onupgradeneeded = function(event){        
                const db = event.target.result;         // Devuelve un request (petición para abrir la BD)

                // Tabla de marcas
                if(!db.objectStoreNames.contains("marcas")){
                    const marcas    = db.createObjectStore("marcas"     , {keyPath: "id", autoIncrement: true});
                    marcas          .createIndex("nombre"   , "nombre"  , {unique: true});  // buscar por nombre de marca
                }
                
                // Tabla de categorías
                if(!db.objectStoreNames.contains("categorias")){
                    const categorias= db.createObjectStore("categorias" , {keyPath: "id", autoIncrement: true});
                    categorias      .createIndex("nombre"   , "nombre"  , {unique: true});  // buscar por nombre de categoría
                }

                // Tabla de productos
                if(!db.objectStoreNames.contains("productos")){
                    const productos = db.createObjectStore("producos"   , {keyPath: "id", autoIncrement: true});
                    productos       .createIndex("nombre"       ,"nombre"       , {unique: false}); // buscar por nombre
                    productos       .createIndex("marcaID"      ,"marcaID"      , {unique: false}); // buscar por marca
                    productos       .createIndex("categoriaID"  ,"categoriaID"  , {unique: false});// buscar por categoría
                }
        }
}








function abrirDB(){
        return new Promise((resolve, reject)=>{
            const request = indexedDB.open("Tienda", 1);
            request.onsuccess   = () => resolve (request.result);
            request.onerror     = () => reject  (request.error);
        });
}




async function crearProducto(producto) {
        const db    = await abrirDB();
        const tx    = db.transaction("productos","readwrite");
        
        const tbProductos   = tx.objectStore("productos");
        tbProductos.add(producto);

        tx      .onecomplete= () => console.log("✅ Producto creado: ", producto);
}




async function leerProductos() {
        const db    = await abrirDB();
        const tx    = db.transaction("productos", "readonly");
        
        const tbProductos   = tx.objectStore("productos");
        const request       = tbProductos.getAll();

        request .onsuccess  = () => console.log("📋 Productos: ", request.result);
}




async function actualizarProducto(id, nuevaData) {
        const db    = await abrirDB();
        const tx    = db.transaction("productos", "readwrite");         // Especificar lectura o modificacion
        
        const tbProductos   = tx.objectStore("productos");
        const request       = tbProductos.get(id);                      // Buscar producto (id)

        request.onsuccess   = () => {                                   // Si la operacion es exitosa?
            const producto = request.result;                            // Obtener producto
            if(producto) {                                              // Si producto es truthy
                Object.assign(producto, nuevaData);                     
                tbProductos.put(producto);                              // Actualizar
                console.log("✏️ Producto actualizado:", producto);
            }
        }
}




async function eliminarProducto(id) {
        const db    = await abrirDB();
        const tx    = db.transaction("productos", "readwrite");

        tx.objectStore("productos").delete(id);

        tx.onecomplete      = () => console.log("🗑️ Producto eliminado con id: ",id)
}




async function buscarProductoPorNombre(nombre) {
        const db    = await abrirDB();
        const tx    = db.transaction("productos", "readonly");

        const tbProductos   = tx.objectStore("productos").index("nombre");
        const request       = tbProductos.getAll(nombre);

        request.onsuccess   = () => console.log("🔎 Productos con nombre:", request.result);
}




async function buscarProductosPorMarca(marcaId) {
        const db    = await abrirDB();
        const tx    = db.transaction("productos", "readonly");
        
        const tbProductos   = tx.objectStore("productos").index("marcaId");
        const request       = tbProductos.getAll(marcaId);

        request.onsuccess   = () => console.log("🔎 Productos de marca:", request.result);
}




async function buscarProductosPorCategoria(categoriaId) {
        const db    = await abrirDB();
        const tx    = db.transaction("productos", "readonly");
        
        const tbProductos   = tx.objectStore("productos").index("categoriaId");
        const request       = tbProductos.getAll(categoriaId);

        request.onsuccess   = () => console.log("🔎 Productos de categoría:", request.result);
}