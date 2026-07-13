
/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    FLUJO DE EVENTOS EN EL DOOM
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
const body = document.body;
const card = document.querySelector(".caja");
const boton= document.querySelector("#boton");







//  SE EJECUTARAN LOS 3 EN SIMULTANEO
function ejemplo1(){
        body    .addEventListener("click", ()=> console.log("body"));
        card    .addEventListener("click", ()=> console.log("card"));
        boton   .addEventListener("click", ()=> console.log("boton"));
}



//  EVENT.stopPropagation();
//  -   Detiene el evento en la fase actual
//  -   El evento no sigue subiendo en la burbuja ni bajando en la captura
//  -   Útil cuando no quieres que el evento afecte elementos padres
function ejemplo2(){
        body    .addEventListener("click", (e)=> console.log("body"));
        

        card    .addEventListener("click", (e)=> {      // Ejecuta carta, no body  
            console.log("card, evento 1");
            e.stopPropagation();       
        });
        
        card    .addEventListener("click", (e)=> {      // Ejecuta carta, no body
            console.log("card, evento 2");
        })

        
        boton   .addEventListener("click", (e)=> {      // Ejecuta boton y carta, no body
            console.log("boton")}
        );
} 



//  EVENT.stopImmediatePropagation();
//  -   Detiene todo, incluso otros listeners en el mismo nodo.
//  -   Si hay varios eventos en el mismo elemento, se cancela todos los eventos posteriores
function ejemplo3(){
        body    .addEventListener("click", (e)=> console.log("body"));
        

        card    .addEventListener("click", (e)=> {      // Ejecuta carta, no body  
            console.log("card, evento 1");
            e.stopImmediatePropagation();       
        });
        
        card    .addEventListener("click", (e)=> {      // No se ejecuta
            console.log("card, evento 2");
        })
} 

ejemplo2();

