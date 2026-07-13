/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    MANEJO DE ERRORES

    -   ¿Cómo saber si la solicitud HTTP se realizo con exito?
    -   response.ok         => Indica si el codigo HTTP esta en (200-299) osea funciono.
    -   response.status     => Envia el codigo (200, 201, 400, 500, etc).
    -   response.json()     => Muchas APIs envian mensaje de aprobacion.

---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/




/*-------------------------------------------------------------------------------------------------
    EJEMPLO PRACTICO (GET)       
-------------------------------------------------------------------------------------------------*/
async function ejemplo1() {
        const response      = await fetch("https://api.example.com/data");

        if(response.ok) {
            const data      = await response.json();
            console.log     ("Datos recibidos", data);
        }else{
            console.error   ("Error en GET", response.status);
        }
        console.log(data);
}




/*-------------------------------------------------------------------------------------------------
    EJEMPLO PRACTICO (POST)       
-------------------------------------------------------------------------------------------------*/
async function ejemplo2() {
        const obj   = {nombre: "Juan" , edad: 20}
        const parametros  = {
            method  : "POST",
            headers : {"Content-Type" : "application/json"},
            body    : JSON.stringify(obj),
        };
        const response      = await fetch("https://api.example.com/users", parametros);

        if(response.ok){
            console.log     ("Datos enviados");
        } else {
            console.error   ("Error en POST", response.status);
        }
}




/*-------------------------------------------------------------------------------------------------
    ENVIAR DATOS    (POST)      ¡Este maneja errores de red por el try...catch!, Codigo de real
-------------------------------------------------------------------------------------------------*/
async function ejemplo3() {
        const obj   = {nombre: "Juan" , edad: 20}
        const parametros  = {
            method  : "POST",
            headers : {"Content-Type" : "application/json"},
            body    : JSON.stringify(obj),
        };

        try{
            const response  =   await fetch("https://api.example.com/users", parametros)
            
            // Verificar si la respuesta fue exitosa
            if(!response.ok){
                console.error   ("Error en POST", response.status);
                return; //Sale si hubo error HTTP
            }

            // Procesar el cuerpo de la respuesta
            const data      =   await response.json();
            console.log     ("POST exitoso"  , data );

        } catch (error){

            // Captura errores de red (no internet, servidor caído). Sin internet no existe response
            console.error   ("Fallo petición", error);
        }
}

