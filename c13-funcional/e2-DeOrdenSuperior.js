 /*------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
    FUNCIONES DE ORDEN SUPERIOR (HIGHER ORDER FUNCTIONS, HOFs)
    -   Recibe funciones como parámetros o
    -   Devuelve funciones como resultado
    -   Permite tratar a las funciones como valores, igual que numeros o cadenas
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/



function ejemplo1(){
        //  FUNCIÓN DE PRIMER ORDEN
        const obtenerTotal  = (precio, igv) => precio * (1 + igv);
        console.log(obtenerTotal(100, 0.18));


        //  FUNCIÓN DE ORDEN SUPERIOR (Esta recibiendo otras funciones)
        const obtenerTotal2 = (precio, igv, extras) => {
            const total = precio * (1 + igv);
            return extras(total);
        }

        const x = obtenerTotal2(100, 0.18, (total)=> total - 20);
        console.log(x);
}




function ejemplo2(){
        const sumar     = (a,b) => a + b;
        const resta     = (a,b) => a - b;
        const producto  = (a,b) => a * b;
        const division  = (a,b) => a / b;

        const operacion = (fn) => fn(100, 20);


        console.log(sumar(10,5));
        console.log(operacion(sumar));
        console.log(operacion(resta));
        console.log(operacion(producto));
        console.log(operacion(division));
}





/*------------------------------------------------------------------------------------------------------------
    LOS METODOS DE ARRAY CUMPLEN ESTE PARADIGMA
------------------------------------------------------------------------------------------------------------*/
function ejemplo3(){
        const numeros = [1, 2, 3, 4, 5];

        const dobles    = numeros.map   (x          => x * 2        );  // [2, 4, 6, 8, 10]
        const pares     = numeros.filter(x          => x % 2 === 0  );  // [2, 4]
        const suma      = numeros.reduce((acc, x)   => acc + x  , 0 );  // 15
}





/*------------------------------------------------------------------------------------------------------------
    CODIGO LIMPIO Y PERSONALIZADO
------------------------------------------------------------------------------------------------------------*/
function ejemplo4(){
        const productos = [
            { nombre: "Mouse"   , stock: 10 , precio: 25    },
            { nombre: "Teclado" , stock: 5  , precio: 45    },
            { nombre: "Laptop"  , stock: 4  , precio: 1200  },
            { nombre: "Monitor" , stock: 0  , precio: 300   },
            { nombre: "Tablet"  , stock: 3  , precio: 400   },
            { nombre: "Mouse"   , stock: 7  , precio: 150   },
            { nombre: "Laptop"  , stock: 4  , precio: 2500  },
            { nombre: "GPU"     , stock: 0  , precio: 1090  }
        ];

        const esMayor500= (producto) => {
            return producto.precio > 500;
        }

        const hayStock  = (producto) => {
            return producto.stock > 0;
        }

        const getNombre = producto => producto.nombre;

        const masCaros  = productos.filter  (esMayor500);
        const conStock  = productos.filter  (hayStock);
        const nombres   = productos.map     (getNombre);

}