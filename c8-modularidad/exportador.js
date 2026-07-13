let valor_x = 1;

export  let valor_a = 8;

export  let valor_b = 5, valor_c = 100, valor_d=77;

export  const valor_PI = 3.141592




export  function saludar(nombre = "anonimo"){
    return `Hola ${nombre}`;
}

export  function despedir(nombre = "anonimo"){
    return `Ha sido un placer ${nombre}, hasta la proxima`;
}




export const nombre = "Juan";




export class Calculadora {
    sumar   (a=0, b=0){
        return a+b;
    }

    restar  (a=0, b=0){
        return a-b;
    }

    producto(a=0, b=0){
        return a*b;
    }

    division(a=0, b=0){
        return a/b;
    }
}




//solo puede existir un EXPORT DEFAULT por archivo
export default function informacionImportante(){
    return "limpia tu habitacion"
}



