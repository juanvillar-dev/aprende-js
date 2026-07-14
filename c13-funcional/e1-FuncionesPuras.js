 /*------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
    FUNCIONES PURAS
    -   Devuelve el mismo resultado para los mismos argumentos.
    -   No produdce efectos secundarios.
    
    COMO DETECTAR IMPUREZA
    -   Entrada suficiente:         ¿La función recibe todo lo que necesita como parámetros?
    -   Sin lecturas globales:      ¿Evita leer variables externas, tiempo, aleatoriedad, entorno?
    -   Sin escrituras externas:    ¿No modifica estado fuera de su alcance (arrays/objetos mutados, logs)?
    -   Determinismo:               ¿Mismas entradas → mismo resultado?
    -   Transparencia referencial:  ¿Podrías reemplazar la llamada por el valor sin cambiar el programa?
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/


function ejemplo1(){
        // PURA
        const aplicarIGV = (precio, IGV) => precio * (1 + IGV);
        // Siempre que pricio=100 y IGV=0.18, devuelve 118


        // IMPURA (ESTADO EXTERNO: IGV)
        let IGV = 0.18;
        const aplicarIGV2 = (precio) => precio * (1 + IGV);


        // IMPURA (EFECTOS SECUNDARIOS)
        const aplicarIGV3 = (precio, IGV) => {
            const total = precio * (1 + IGV);
            console.log(total);                         // Afecta al mundo exterior         
            return total;
        };


        // IMPURA POR NO SER DETERMINADA
        const aplicarIGV4 = (precio) => precio *(1 + Math.random);

}







 /*------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
    IMNUTABILIDAD
    -   Los datos no cambian una vez creados
    -   Se crean nuevas verciones con los cambios aplicados
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/
function ejemplo2(){
        //MUTABLE   (IMPERATIVO)
        let numeros = [1,2,3];
        numeros.push(4);

        const user  = {nombre : `Juan`, edad: 20};
        user.edad = 15;


        //INMUTABLE (FUNCIONAL)
        const numerosX      = [1,2,3];
        const newNumerosX   = [...numerosX, 4, 5, 6];

        const userX         = {nombre : `Juan`, edad: 20};
        const newUserX      = {...userX, edad : 15};
}






function ejemplo3(){
        const producto = {
            nombre : "Batidora",
            precio : 1200
        }

        //  FUNCION IMPMURA
        function insertarCodigo(producto, codigo){
            const x  = producto;                    // Copiaste la misma referencia de producto
            x.codigo = codigo;                      // producto original tambien sera alterado
            return x;
        }

        //  FUNCION PURA
        function insertarCodigo2(producto, codigo){
            const x  = {...producto};               // Aqui si creas una copia del producto;
            x.codigo = codigo;                      // producto original no se alura
            return x;
        }
}






function ejemplo4(){
        //  FUNCION IMPURA
        const getTomorrow = () => {
                const tomorrow = new Date();        // Esta obteniendo la fecha del momento (cambia)
                tomorrow.setDate(tomorrow.getDate() + 1);
                return tomorrow;
        }
        console.log(getTomorrow());


        //  FUNCION PURA                            
        const getTomorrow2 = (date) => {            //Devuelve el mismo resultado para los mismos argumentos.
                const tomorrow = new Date(date);    
                tomorrow.setDate(tomorrow.getDate() + 1);
                return tomorrow;
        }

                

}


