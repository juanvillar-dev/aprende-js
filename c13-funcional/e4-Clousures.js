/*------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
    CLOUSURE
    -   Esta funcion recuerda el entorno (scope) en el que fue creada.
    -   Incluso después de que ese entorno haya terminado de ejecutarse.
    -   Una función interna puede acceder a las variables de la función externa, aunque ya finalizo

    USOS PRACTICOS
    -   Encapsulación   : Crear variables privadas que no se pueden modificar desde fuera.
    -   Factories       : Generar funciones personalizadas con parámetros preconfigurados.
    -   Callbacks y eventos                 : Mantener acceso a datos del contexto original.
    -   Currificación y aplicación parcial  : Guardar parte de los argumentos para usarlos después.

    CONSIDERACIONES
    -   Memoria         : Mantienen vivas las variables, puede llegar a ser pesado
    -   Debugging       : Puederser confuso de entender
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/


function ejemplo1(){
        function crearContador() {
            let valor = 0; // privado

            return {
                incrementar : () => ++valor,
                decrementar : () => --valor,
                reset       : () => valor = 0,
                valorActual : () => valor
            };
        }

        const contador = crearContador();
        console.log(contador.incrementar()); // 1
        console.log(contador.incrementar()); // 2
        console.log(contador.incrementar()); // 3
        console.log(contador.incrementar()); // 4
        console.log(contador.decrementar()); // 3
        console.log(contador.valorActual()); // 3
}





/*------------------------------------------------------------------------------------------------------------
        EJEMPLO DE FACTORY CON CLOSURE
------------------------------------------------------------------------------------------------------------*/
function ejemplo2(){
        const porTres   = function (x){
            return x * 3;
        }
        console.log(porTres (10));



        console.log(porTres(10));
        function crearMultiplicador(factor){
            return function(x){
                return x * factor;
            }
        }


        const porDos    = crearMultiplicador(2);
        const porCinco  = crearMultiplicador(5);

        console.log(porDos  (10));
        console.log(porCinco(10));
}





/*------------------------------------------------------------------------------------------------------------
        EJEMPLO: CARRITO DE COMPRAS SIMPLE
------------------------------------------------------------------------------------------------------------*/
function ejemplo3(){
        function crearCarrito(){
            let items = [];             // variable privada, no accesible desde fuera

            return {
                    agregar: function(producto){
                        items.push(producto);
                        return `${producto} agregado al carrito`;
                    },
                    getLista: function(){
                        return [...items]
                    },
                    getCanidad: function(){
                        return items.length;
                    }
            }
        }

        const carrito = crearCarrito();  

        console.log(carrito.agregar(`Microfono`));
        console.log(carrito.agregar(`Galleta`));
        console.log(carrito.agregar(`Guante`));
        console.log(carrito.agregar(`Naranja`));
        console.log(carrito.agregar(`Olla`));

        console.log(carrito.getLista());
        console.log(carrito.getCanidad());
}





/*------------------------------------------------------------------------------------------------------------
        EJEMPLO: CONSULTAR API
------------------------------------------------------------------------------------------------------------*/
function ejemplo4(){

        const conectar  = dominio => recurso => {
            const url   = `${dominio}/${recurso}`;

            return {
                buscar  : ()    => fetch(url).then(response => response.json()),

                insertar: (obj) => fetch(url, {
                                                    method  : "POST",
                                                    headers : {"Content-Type" : "application/json"},
                                                    body    : JSON.stringify(obj),
                                            }).then(response => response.json()),

                eliminar: (id)  => fetch(url,{method  : "DELETE"}).then(response = response.json()),
            }
        }


        
        const base = conectar(`https//www.example.com`);
        const todos = base(`todos`);
        const usuarios = base(`usuarios`);

        todos.buscar();
        todos.buscar(10);

        usuarios.eliminar(10);
    }

