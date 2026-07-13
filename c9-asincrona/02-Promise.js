
/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------

    PROMISES
        -   Es un objeto que representa una operacion que ahora o en el futuro lanzara un resultado.
        -   Este resultado: exito(resolve) o error(reject).
        
        -   Existen por que los callback pueden ser caoticos si se anidan mucho.
        -   Las promesas son mas claras y ordenadas para manejar procesos asincronos.



    ESTADOS
    - Pending   (pendiente) : la operación aún no terminó.
    - Fulfilled (cumplida)  : la operación terminó con éxito y devuelve un valor.
    - Rejected  (rechazada) : la operación falló y devuelve un motivo (error).

    

    Ejemplo: Pedir comida por delivery:
        -   Haces el pedido -> Se crea una promesa.
        -   El restaurante puede cumplirla (entrega la comida) o rechazarla (falta de ingredienes)
        -   Tu decides que hacer en cada caso.

---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
const personas = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "María", edad: 30 },
    { id: 3, nombre: "Pedro", edad: 28 },
    { id: 4, nombre: "Lucía", edad: 22 },
    { id: 5, nombre: "Carlos", edad: 35 }
];





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    CALLBACK
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo1(){
        function obtenerUsuario(id, callback){
                const persona = personas.find(p=> p.id === id);
                if(persona) callback(persona, null);
                else        callback(null, "Persona no encontrada");
        }


        obtenerUsuario(1, (resultado, error)=>{
                if(resultado)   console.log(resultado);
                else            console.log(error);
                console.log("Siempre se ejecuta");
        });
}








/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    PROMISES
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo2(){
        function obtenerUsuario(id){
            return new Promise((resolve, reject)=>{
                    const persona = personas.find(p=> p.id === id);
                    if(persona) resolve(persona);
                    else        reject ("persona no encontrada");
            });
        }


        obtenerUsuario(1)
                .then   (resultado  => console.log(resultado))
                .catch  (error      => console.log(error))
                .finally(()         => console.log("Siempre se ejecua"));
}








/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    ASYNC / AWAIT
    -   Marca la funcion como asincrona.
    -   Automáticamente hace que esa función devuelva una Promesa, aunque tú no pongas.
    -   Mientras el motor libera el hilo para que otras tareas sigan corriendo sin bloquear
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
async function ejemplo3(){
        async function obtenerUsuario(id){
            const persona = personas.find(p=> p.id === id);

            if(persona) return persona;
            else        throw "Persona no encontrada";
        }


        try{
            const resultado = await obtenerUsuario(1);
            console.log(resultado);

        } catch (error){
            console.log(error);

        } finally {
            console.log("Siempre se ejecuta");
        }
}


// ASYNC : Te ahorra el return new Promise();
function ejemplo4() {
        async function numero(){
            return 100;
        }
        numero().then(x=> console.log(x));
}






/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Promise.all
    -   Convierte un array de promesas en una
    -   Esta promesa se resuelve cuando todas se resolvieron.
    -   Lanza todas las promesas en paralelo y espera todas juntas
    -   Si una promesa falla, toda la operación se rechaza 
    -  (aunque puedes manejarlo con try/catch por promesa)
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/

function ejemplo5(){
        const p1 = Promise.resolve(10);
        const p2 = Promise.resolve(20);
        const p3 = Promise.resolve(20);
        const p4 = Promise.resolve(20);
        
        const promesas = [p1, p2, p3, p4];

        Promise.all(promesas).then(resultados => {
            console.log(resultados);
        })
}
