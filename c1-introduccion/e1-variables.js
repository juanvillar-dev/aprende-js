//  FILOSOFIA MODERNA: “usa CONST siempre, LET cuando sea necesario, VAR nunca ”.

/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    AMBITO DE BLOQUE VS FUNCIÓN
    - 👉 var “escapa” del bloque, mientras que let y const se quedan dentro
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo1(){
    if(true){
        var     a = 1;
        let     b = 2;
        const   c = 3;
    }

    console.log(a);     // ✅ 1 (var ignora el bloque)
    console.log(b);     // ❌ ReferenceError
    console.log(c);     // ❌ ReferenceError   
}





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    HOISTING
    -👉 var puede usarse antes de declararse (peligroso). 
    -👉 let y const no
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo2(){
    console.log(x);     // undefined (var se eleva con valor por defecto)
    var x = 10;

    console.log(y);     // ❌ ReferenceError (zona muerta temporal)
    var y = 20;

    console.log(z);     // ❌ ReferenceError (zona muerta temporal)
    var z = 30;
}





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    REDECLARACIÓN
    -👉 var permite sobrescribir sin quejarse → fuente de bugs
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo3(){
    var nombre  = "Mateo";
    var nombre  = "Padre";  // ✅ permitido

    let edad = 20;
    //let edad = 30;        // ❌ Error

    const PI = 3.14;
    //const PI = 3.14159;   // ❌ Error
}





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    REASIGNACIÓN
    -👉 CONST fija la referencia, no el contenido
    -👉 Piensa que CONST es como pegarle un candado a la etiqueta que apunta a una caja
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo4(){
    let min   = 10;
    min       = 20;     // ✅ permitido

    const max = 100;
    //max       = 200;  // ❌ Error

    const arr = [1,5,7];
    arr.push(5);

    //arr = [];         // ❌ Error
    arr = [1,5,7];
}


//  -👉 El error no depende de "qué reasignes", sino del "hecho de reasignar"
function ejemplo5(){
    let arreglo = [1,2,3,4];

    const lista = arreglo;
    //lista = arreglo;    // ❌ Error
}

//  -👉 Pero el objeto sigue siendo mutable
function ejemplo6(){
    const persona   = {nombre:"Juan"};

    persona.nombre  = "Luis";
    persona.edad    = 30;

    delete persona.nombre;

    console.log(persona);
}