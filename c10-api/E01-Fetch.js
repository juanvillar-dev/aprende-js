/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    FETCH

    -   Funcion nativa de JS.
    -   Realiza solicitudes HTTP (Get,Post,Put,Delete,etc) a un servidor.
    -   Viene integrada en navegadores modernos.
    -   Devuelve una promesa

---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/




/*-------------------------------------------------------------------------------------------------
    SINTAXIS BASICA
-------------------------------------------------------------------------------------------------*/
function ejemplo1() {
        fetch("https://api.example.com/data")
                .then   (resultado  => resultado.json()     )   // CONVERTIR JSON
                .then   (data       => console.log(data)    )
                .catch  (error      => console.error(error) );
}




/*-------------------------------------------------------------------------------------------------
    PEDIR DATOS     (GET)       ¡Hace lo de arriba con async await!
-------------------------------------------------------------------------------------------------*/
async function ejemplo2() {
        try{
            const resultado = await fetch("https://api.example.com/data");
            const data      = await resultado.json();

            console.log(data);
        } catch(error){
            console.error(error);
        }
}




/*-------------------------------------------------------------------------------------------------
    ENVIAR DATOS    (POST)      ¡Aquí ya configuras método, cabeceras y cuerpo!
-------------------------------------------------------------------------------------------------*/
async function ejemplo3() {
        const obj   = {nombre: "Juan" , edad: 20}
        const parametros  = {
            method  : "POST",
            headers : {"Content-Type" : "application/json"},
            body    : JSON.stringify(obj),
        };

        
        const response  = await fetch("https://api.example.com/users", parametros)
        const data      = await response.json();
        console.log(data);
}



