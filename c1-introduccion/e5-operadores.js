function ejemplo1(){
    let a;
    let b;

    //MISMO VALOR, DIFERENTE TIPO
    a = 0    ==  "0";  
    a = 0    == false;
    a = []   == false;
    a = null == undefined;
    
    
    // MISMO VALOR Y TIPO
    b = 0    === "0";  
    b = 0    === false;
    b = null === undefined;
    //b = []      === false;


    console.log(a+"\n"+b);
}



function ejemplo2(){
    let a = typeof 43;
    let b = typeof "Hola";

    console.log(a+"\n"+b);
}



function ejemplo3(){
    const a = [] instanceof Array;  // Comprueba la instancia de clase
    
    console.log(a);
}








/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
        IN (Verifica si una propiedad existe en un objeto)
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo4(){
    const persona ={
        nombre : "Juan"
    }; 

    const a = "nombre" in persona;

    console.log(a); //true
}






/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
        OPTIONAL CHAINING (Accede a propiedades solo si existen.)
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo5(){
    const persona ={
        nombre : "Juan Carlos"
    }; 

    const a = persona.nombre    .startsWith("Juan");
    const b = persona.nombre    ?.startsWith("Juan");
    //const c = persona.apellido  .startsWith("Juan");  //Dara error por que no existe
    const d = persona.apellido  ?.startsWith("Juan");   //Undefined


    console.log(a, b, d);

        
    const producto ={
            nombre : "batidora",
            precio : 460.99,
            marca  : {
                    nombre : "kitchenaid",
                    ubicacion : "no se",
            }
    }


    let r;
    r = producto?.nombre;
    r = producto?.marca?.nombre.substring(0,7);

    console.log(r);
}






/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
        OPERADORES ARITMETICOS
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo10(){
        const x1 = 10 + 5;
        const x2 = 10 - 5;
        const x3 = 10 * 5;
        const x4 = 10 / 5;

        const x5 = 24 % 5;
        let   x6 = 2 ** 4;
        let   x7 = x6++;
        let   x8 = x6++;

        console.log(x1,x2,x3,x4);
        console.log(x5,x6,x7,x8);
}






/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
        OPERADORES DE ASIGNACIÓN
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo11(){
        let a  = 10; //asignación
        let x1 = a += 5;
        let x2 = a -= 5;
        let x3 = a *= 5;
        let x4 = a /= 5;
        let x5 = a %= 2;

        console.log(x1,x2,x3,x4, x5);
}
ejemplo11();