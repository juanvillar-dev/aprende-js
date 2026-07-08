

/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    HOISTING
    JavaScript mueve las declaraciones de variables y funciones al principio de su scope 
    (ya sea global o de función) antes de ejecutar el código. Pero ¡solo las declaraciones, 
    no las asignaciones
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/



//  FUNCIONES DECLARADAS    | Se elevan, puedes llamarlas antes de que aparezcan en el codigo
saludar();  // Funciona

function saludar(){
    console.log("Hola amigo")
}





//  VARIABLES CON (var)     | Solo eleva la declaración, no el valor asignado
console.log(nombre);
var nombre = "Juan";





//console.log(edad);    //Error
let edad = 30;  