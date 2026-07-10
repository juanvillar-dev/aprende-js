


/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    ARRAY
    -   Tipo        : Objeto
    -   Dinámico    : Puede crecer o reducirse
    -   Heterognéo  : Puede contener distintos tipos([1, "texto", true, ['a', 2, 4.5]]);
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo1(){
    const numeros   = [10,20,30];
    
    const dias      = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    
    const datos     = [ "Enero",
                        3.14, 
                        2000,  
                        [1,2,3,4], 
                        ['a', 2, 4.5,"hola"],
                        {nombre: "Juan", apellido: "Villar"},
                        new Function( (a,b)=> a+b )
                      ]

    const copia     = [...dias];    // Copia superficial, copia las referencias no los obj
    const copia2    = JSON.parse(JSON.stringify(productos));    // Copia profunda

    const generado1 = Array.from({length: 5});

    const generado2 = Array.from({length: 5}, (_, i)=>`Item ${i+1}`);
    
    const generado3 = Array.from(dias, (dia, i)=> `Item [${i}] = ${dia}`);

    console.log(generado3);
}
ejemplo1();




/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    AGREGAR Y ELIMINAR
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo2(){
    const arreglo = [];

    //AGREGAR AL FINAL
    arreglo.push("uno"      );
    arreglo.push("dos"      );
    arreglo.push("tres"     );
    arreglo.push("cuatro"   );
    console.table(arreglo);

    //AGREGAR AL INICIO
    arreglo.unshift ("- uno"    );
    arreglo.unshift ("- dos"    );
    arreglo.unshift ("- tres"   );
    arreglo.unshift ("- cuatro" );
    console.table(arreglo);


    //ELIMINAR EL ULTIMO
    arreglo.pop();

    //ElIMINAR EL PRIMERO
    arreglo.shift();
    console.table(arreglo);
}





/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    Metodos
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo3(){
    
    const Laptop = {nombre: "Laptop",precio: 2500.99,}
    const productos = [
        {nombre: "Microfono", precio:280 },
        {nombre: "Teclado"  , precio:50  },
        {nombre: "Monitor"  , precio:750 },
        {nombre: "Telefono" , precio:800 },
        {nombre: "Mouse"    , precio:120 },
        Laptop
    ];
    const numeros   = [5,4,3,2,1];

    
    let r;

    r = productos.length;            
    r = productos.includes   (Laptop);                              //Contiene el elemento(referencia)?
    
    r = productos.find       (x => x.nombre == "Monitor");          //Primer elemento que cumple
    r = productos.findIndex  (x => x.nombre == "Monitor");          //Indice del primer elemento que cumple
    r = productos.indexOf    (Laptop);                              //Indice del elemento(referencia)
    r = productos.lastIndexOf(Laptop);
    
    r = productos.some       (x => x.precio > 200);                 // ¿Alguno cumple?
    r = productos.every      (x => x.precio > 200);                 // ¿Todos cumplen?

    r = numeros  .sort      ();                                    //Orden
    r = numeros  .reverse   ();                                    //Orden inverso
    r = productos.slice(4);

    r = productos.sort      ((a,b)=> a.precio - b.precio);
    r = productos.filter    (x => x.precio > 200);                 // Filtrar solo los que cumplen
    
    r = productos.map       (x => x.nombre);                       // Transforma los objetos
    r = productos.reduce    ((c, x) => c + x.precio,0);            // Un valor recolectado
    r = productos.reduce    ((acumulador, elementoActual) => { } , valorInicialOpcional); 
    r = productos.reduce	( (k,p)=> {
        k = k.concat(', '+p.nombre);
        return k;
    }, "");




    console.log(r)
}




function ejemplo5(){
    const conjuntos = ["hola", ['a','e','i'], [1,2,[2.1,2.2,2.3]]];

    const x6 = conjuntos.flat   ();                         // Aplana los arreglos
    const x7 = conjuntos.flat   (2);                        // Aplana los arreglos
}