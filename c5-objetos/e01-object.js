
/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    OBJETOS(object)
    -   Es una colección de pares clave → valor.
    -   Las laves son cadenas (o SYMBOLS) y los valores pueden ser cualquier tipo.
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/


function ejemplo1(){
        const obj1 = {}                 //  Literal
        const obj2 = new Object();      //  Constructor
        const obj3 = new Object(null);  //  Sin prototipo
}






function ejemplo2(){
        const producto = {};

        //ASIGNAR ELEMENTOS
        producto.nombre     = "Monitor";
        producto.precio     = 799.99; 
        producto.stock      = 20;

        console.log(producto);



        //OBTENER ELEMENTOS
        const x1        = producto.nombre;
        const x2        = producto["precio"];
        const {stock}   = producto;

        console.log(x1  );
        console.log(x2  );
        console.log(stock);



        //ELIMINAR ELEMENTOS
        delete producto.stock;
        console.log(producto);
}






function ejemplo3(){
        const persona = {
            nombre   : "Juan",
            genero   : "V",
            direccion: {
                pais    : "Perú",
                ciudad  : "Lima",
                coordenadas : {
                    lat: -12.0464,
                    lng: -77.0428
                }
            }
        }


        //DESTRUCTURACION PROFUNDA  = Permite extraer valores anidades directamente en variables
        const {
            direccion:{
                pais, 
                coordenadas : {lat, lng}
            }
        } = persona;

        console.log(pais, lat, lng);





        const personajes = ['Flash', 'Batman', 'Superman'];
        const [, ,batman] = personajes;
        console.log(batman);
}






function ejemplo4(){
        const producto = {
            nombre  : "Teclado",
            precio  : 320.80,
            stock   : 10,
        }

        const detallesPaquete = {
            dimensiones : [50,500,200],
            peso        : 850
        }

        const proveedor = {
            nombre   : "Importaciones GAK",
            telefono : "91-745-123-456",
            correo   : "recoverylima@gak.com"
        }



        // Las propiedades de detallesPaquete dentro de Propducto, tambien puede reemplazar valores
        const obj1 = Object.assign(producto, detallesPaquete); 
        // Nuevo objeto, a partir de las propiedades de Producto y detalles   
        const obj2 = {...producto, ...proveedor};                

        consolf.log(obj1);
        consolf.log(obj2);
}






function ejemplo5(){
        const producto = {
            nombre  : "Teclado",
            precio  : 320.80,
            stock   : 10,

            detallesPaquete : {
                dimensiones : [50,500,200],
                peso        : 850
            }
        }


        const x1 = Object.keys(producto);
        const x2 = Object.values(producto);
        const x3 = Object.entries(producto);

        const x4 = Object.hasOwn(producto, "precio"); 

        console.log(x1);
        console.log(x2);
        console.log(x3);
        console.log(x4);
}






function ejemplo6(){
        const producto = {
            nombre  : "Teclado",
            precio  : 320.80,
            stock   : 10,

            detallesPaquete : {
                dimensiones : [50,500,200],
                peso        : 850
            }
        }

        //CONVERTIR OBJETO A JSON
        const x1 = JSON.stringify(producto);
        
        //CONVERTIR JSON A OBJETO
        const x2 = JSON.parse(x1);


        console.log(x1);
        console.log(x2);
}


