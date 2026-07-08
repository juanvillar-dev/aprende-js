
/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    DATOS PRIMITIVOS (SE COPIAN POR VALOR)

    - Son datos simples, inmutables, que se almacenan directamente en la variable.
    - Se crea una copia independiente del dato.
    - Cambiar una copia no afecta al original.
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo1(){
    let nombre  = "Licuadora";  // string (Texto)
    let edad    = 20;           // number   
    let peso    = 67.5;         // number
    let adulto  = edad > 18;    // boolean  : true o false
    let valor   ;               // undefined: valor por defecto de una variable no inicializada.
    let resultado   = null;     // Se usa para indicar que algo está vacío a propósito
    let numeroGrande= 1234567890123456789012345678901234567890n;


    console.log(typeof nombre);       // "string"
    console.log(typeof edad);         // "number"
    console.log(typeof adulto);       // "boolean"
    console.log(typeof valor);        // "undefined"
    console.log(typeof resultado);    // "object" (sí, `null` es un bug histórico)
    console.log(typeof numeroGrande); // "bigint"
}


function ejemplo2(){
    let a = "usuario";
    let b = "usuario";

    console.log(a == b);    
    

    let id    = Symbol("usuario");      //Symbol, son unicos
    let otroId= Symbol("usuario");      

    console.log(id == otroId)  //False
}





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    DATOS NO PRIMITIVOS (REFERENCIALES)

    - Son estructuras más complejas que se almacenan en el heap y se acceden por referencia.
    - Se copia la dirección de memoria, no el contenido.
    - Cambiar una copia afecta al original.
    - Aplica a objetos, arrays, funciones.
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/


function ejemplo3(){    
    const persona = {   
        nombre  : "Juan",
        edad    : 20,
        activo  : true,
    }


    const numeros = [1, 2, 3];


    function saludar(nombre){
        return `Hola, ${nombre}`;
    }


    const hoy = new Date();
}

ejemplo3();