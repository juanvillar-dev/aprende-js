/*------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
    COMPOSICIÓN
    -   Es el proceso de combinar funciones simples para construir funciones complejas
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/

function ejemplo1(){
        const doble = x => x * 2;
        const cuadrado = x => x * x;

        // Composición manual
        const dobleDelCuadrado = x => doble(cuadrado(x));

        console.log(dobleDelCuadrado(3)); // 18
}










/*------------------------------------------------------------------------------------------------------------
        OBTENER EL NOMBRE CAPITALIZADO DEL PRODUCTO CON STOCK MAS CARO
------------------------------------------------------------------------------------------------------------*/
const carrito = [
    { nombre: "mouse"   , stock: 10 , precio: 25    },
    { nombre: "teclado" , stock: 5  , precio: 45    },
    { nombre: "laptop"  , stock: 4  , precio: 1200  },
    { nombre: "monitor" , stock: 0  , precio: 300   },
    { nombre: "tablet"  , stock: 3  , precio: 400   },
    { nombre: "batidora", stock: 7  , precio: 150   },
    { nombre: "TV"      , stock: 4  , precio: 2500  },  // El mas caro
    { nombre: "GPU"     , stock: 0  , precio: 1090  }
];





//      VERSION NORMAL
function ejemplo2(){
        const resultado     = productos => {
            const producto  = productos.filter(p=> p.stock>0)
                            .reduce((max,p)=> p.precio > max.precio ? p : max);
            const nombre    = producto.nombre;
            return nombre[0].toUpperCase() + nombre.substring(1,nombre.length).toLowerCase();
        }

        console.log(resultado(carrito));
}





//      APLICANDO COMPOSITION
function ejemplo3(){
        const conStock      = productos => productos.filter(p => p.stock>0); 
        const masCaro       = productos => productos.reduce((max, p) => (p.precio > max.precio ? p : max))
        const enMayuscula   = producto  => {
            const {nombre}  = producto;
            return nombre[0].toUpperCase() + nombre.substring(1,nombre.length).toLowerCase();
        };

        



        

        //  APLICANDO PIPELIN
        const pipelin   = (...funciones) => productos => 
                                        funciones.reduce     ((r, fn)=> fn(r), productos);


        //  APLICANDO COMPOSE
        const compose   = (...funciones) => productos => 
                                        funciones.reduceRight((r, fn) => fn(r), productos);



        //  ES MAS FACIL DE ENTENDER
        const resultado1    = enMayuscula(masCaro(conStock(carrito)));      //  COMPOSICIÓN MANUAL
        const resultado2= pipelin(conStock, masCaro, enMayuscula);          //  PIPE  
        const resultado3= compose(enMayuscula, masCaro, conStock);          //  COMPOSE


        console.log(resultado1);
        console.log(resultado2(carrito));
        console.log(resultado3(carrito));
}

ejemplo3();