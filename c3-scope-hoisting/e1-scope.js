/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    El scope (ámbito) determina dónde puedes acceder a una variable o función en tu código. 
    Es como el "alcance" o "territorio" en el que una variable vive y puede ser usada.
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/





//  GLOBAL SCOPE
//  -   Variables definidas fuera de cualquier funcion o bloque
//  -   Accesibles desde cualquier parte del codigo
let nombre = "Juan";

function ejemplo1(){
    console.log(nombre);    //Puede acceder a nombre
}





//  FUNCTION SCOPE
//  -   Variables definidas dentro de una función
//  -   Solo existen y son accesibles dentro de esa función
function ejemplo2(){
    let mensaje = "Hola";
    console.log(mensaje);
}
//console.log(mensaje);     //ERROR





//  BLOCK SCOPE
//  -   Variables definidas dentro de un {}
//  -   Solo existen dentro de ese bloque
if(true){
    let secreto = "confidencial";
}
//console.log(secreto);     //ERROR





//  LEXICAL SCOPE
//  -   Las funciones anidadas tienen acceso a las variables de sus funciones externas.
function ejemplo4(){
    let dato = "visible";

    function interno(){
        console.log(dato);
    }

    interno();  //Puede acceder a dato
}