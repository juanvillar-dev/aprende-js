
function ejemplo1(){
    const edad = 20;

    if (edad < 18)          console.log("Menor de edad");
    else if (edad < 65)     console.log("Adulto");
    else                    console.log("Adulto mayor");
    
}



function ejemplo20(){
    const rol = "admin";

    switch (rol) {
        case "admin":
            console.log("Acceso total");
            break;
        case "editor":
            console.log("Acceso limitado");
            break;
        default:
            console.log("Sin acceso");
    }
}



function ejemplo21(){
    let edad = 25;

    switch (true) {
        case edad < 13:
            console.log("Niño");
            break;
        case edad >= 13 && edad < 18:
            console.log("Adolescente");
            break;
        case edad >= 18 && edad < 65:
            console.log("Adulto");
            break;
    default:
        console.log("Adulto mayor");
    }

}











//EXPRESIONES DE EVALUACION LOGICA CORTA
function ejemplo2(){
    //OPERADOR TERNIARIO
    const a = 10, b = 5;
    const mayor = (a > b) ? a : b;

    console.log(mayor);
}




function ejemplo3(){
    const nota = 87;
    const resultado =   (nota >= 90) ? "A" :
                        (nota >= 80) ? "B" :
                        (nota >= 70) ? "C" : "F";

    console.log(resultado);
}



// FALSY    (false, 0, "", null, undefined, NaN)
// TRUTHY   (no FALSY)

function ejemplo5(){
        //  r = a || b      Retorna el primer valor truthy o el ultimo si todos son falsy      
        const a = "", b = undefined, c = "juan", d = null;

        const r = a || b || c || d;
        console.log(r);
}




function ejemplo6(){
        //  r = a && b      Retorna el primer valor falsy o el último si todos son truthy       
        const a = 10, b = [], c = null, d = "Juan";

        const r = a && b && c && d;
        console.log(r);
}




function ejemplo7(){
        // r = a ?? b       Retorna el primer valor que no sea NULL ni UNDEFINED
        const a = 10, b = [], c = null, d = "Juan";

        const r = a ?? b ?? c ?? d;
        console.log(r);
}




function ejemplo8(){
        const nombre = "Juan";
        console.log(nombre instanceof String);
}




// (?)acceder a propiedades o métodos de un objeto sin lanzar error si la referencia es undefined o null
function ejemplo9(){
    const persona = {
        nombre: "Juan",
        saludar() {
            return "Hola!";
        }
    };

    console.log(persona?.saludar()); // "Hola!"
    console.log(persona?.edad);      // undefined



    //  Si el valor no es null/undefined pero tampoco es un objeto o funcion valida, da error
    const valor = 5;
    console.log(valor?.metodo()); // ❌ Error: 5 no tiene métodos
}









