
/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    CALLBACK

    -   Es una función que se pasa como argumento a otra función.
    -   Esto permite que una accion ocurra despues de que otra termine.
    -   Ejemplo: "Cuando llegues a mi casa, haz la cena". El CALLBACK es "hacer la cena".

---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/

function ejemplo1(){
        function llegarCasa(nombre, callback){
            console.log(nombre+" abre la puerta");
            console.log(nombre+" se cambi la ropa");
            callback();
        }


        llegarCasa("Juan", function(){
            console.log("Hacer sopa");
        });
}





function ejemplo2(){
        const datos = {
            valor1 : 20,
            valor2 : 10
        };

        function operacion(datos, callback){
            return callback(datos.valor1, datos.valor2);
        }

        console.log(    operacion(datos, (a,b) => a+b));
        console.log(    operacion(datos, (a,b) => a-b));
        console.log(    operacion(datos, (a,b) => a*b));
}





function ejemplo3(){
        function accion(){
            console.log("Hola");
        }

        console.log("Inicio");
        setTimeout(accion, 10000);
        console.log("Fin");
}





function ejemplo4(){
        function saludar(nombre){
            console.log("Hola "+nombre)
        }

        setTimeout(saludar("Juan"), 10000);
}





function ejemplo5(){
        function saludar(nombre, edad, pais) {
            console.log(`Hola ${nombre}, tienes ${edad} años y vives en ${pais}`);
        }

        setTimeout(saludar, 10000, "Juan", 20, "Perú");
}





function ejemplo6(){
        function porCadaUno(arreglo, callback){
            for(let i=0; i < arreglo.length; i++){
                const elemento = arreglo[i];
                
                callback(elemento, i);
            }
        }

        const frutas = ["naranja", "mango", "papaya", "platano", "freza"];

        porCadaUno(frutas, (elemento, i)=>{
            console.log(`Elemento[${i}] = ${elemento}`);
        })
}




