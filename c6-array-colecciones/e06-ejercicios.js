
const usuarios = [
    { nombre: "Ana"     , rol: "admin"      , edad: 30  , activo : true },
    { nombre: "Juan"    , rol: "editor"     , edad: 25  , activo : true },
    { nombre: "Herny"   , rol: "programador", edad: 18  , activo : true },
    { nombre: "Luis"    , rol: "editor"     , edad: 20  , activo : true },
    { nombre: "Sofía"   , rol: "admin"      , edad: 36  , activo : false},
    { nombre: "Carlos"  , rol: "visitante"  , edad: 24  , activo : false},
    { nombre: "Jose"    , rol: "admin"      , edad: 27  , activo : true },
    { nombre: "Carlos"  , rol: "vendedor"   , edad: 20  , activo : true },
    { nombre: "Tomas"   , rol: "editor"     , edad: 29  , activo : false},
    { nombre: "Brayan"  , rol: "editor"     , edad: 26  , activo : true },
];


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







/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Verificar si hay al menos un producto agotado y mostrar el más caro disponible
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejercicio1(){

    const hayAgotados   = productos.some    (p => p.stock === 0);
    const masCaro       = productos.sort    ((a,b) => a.precio-b.precio).at(-1);
    const masCaro2      = productos.reduce  ((max, p) => (p.precio > max.precio ? p : max));

    console.log(hayAgotados);
    console.log(masCaro);
    console.log(masCaro2);
}





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Buscar si hay usuarios duplicados por nombre y mostrar el primero que se repite
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejercicio2(){

    const nombresVistos = new Set();

    const duplicado = usuarios.find(u=>{
        if(nombresVistos.has(u.nombre)) return true;

        nombresVistos.add(u.nombre);
        return false;
    });

    console.log(duplicado);
}






/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Escoger un usuario por rol que este activa y mostrar sus nombres en mayúsculas
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejercicio3(){
    const rolesVistos = new Set();

    const resultado = usuarios
            .filter(x=> x.activo)
            .filter(x=>{
                if (rolesVistos.has(x.rol)) return false;
                
                rolesVistos.add(x.rol);
                return true;
            })
            .map(x=> x.nombre.toUpperCase());
    ;

    console.log(resultado);
}






/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Filtrar usuarios cuyo ROL no lo tenga otro usuario
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejercicio4(){
    const cantidadPorRoles = usuarios.reduce((roles, u)=>{
        roles[u.rol] = (roles[u.rol] || 0)+1
        return roles;
    },{})


    const usuariosUnicos = usuarios.filter(u => cantidadPorRoles[u.rol]===1);


    const usuariosUnicos2 = usuarios.filter(u=>{
        for (const x of usuarios){
            if(x!==u && x.rol == u.rol) return false;
        }
        return true;
    });


    console.table(cantidadPorRoles);
    console.table(usuariosUnicos);
    console.table(usuariosUnicos2);

}





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Mostrar usuarios por rol, filtrar activos, edad descendente
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejercicio5(){
    const resultados = usuarios
        .sort   ((a , b)    => b.edad - a.edad)
        .filter ( u         => u.activo)
        .reduce ((roles , u)=> {
            roles[u.rol] = (roles[u.rol] || []);
            roles[u.rol].push({nombre : u.nombre, edad : u.edad})
            return roles;
        }, {})

    console.log(resultados);
}







/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Detectar inconsistencias en inventario: 
    productos duplicados por nombre con precios distintos
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejercicio6(){
    const resultados  = productos
        .reduce((repetidos, p)=>{
            repetidos[p.nombre] = repetidos[p.nombre] || [];
            repetidos[p.nombre].push({nombre : p.nombre,stock : p.stock, precio : p.precio});
            return repetidos;
        },{})

    console.log(resultados);
}
ejercicio6();


