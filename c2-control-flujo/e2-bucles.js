
function ejemplo1(){
    for (let i = 0; i < 5; i++) {
        console.log(`Iteración ${i}`);
    }
}



function ejemplo2(){
    for (let i = 0; i < 10; i++) {
        if (i === 5) break;
        console.log(i); // 0 a 4
    }
}



function ejemplo3(){
    for (let i = 0; i < 5; i++) {
        if (i === 2) continue;
        console.log(i); // 0, 1, 3, 4
    }
}




//  (for ... in ... ) Recorre las propiedades de un objeto
function ejemplo4(){
    const persona = {
        nombre : "Juan",
        apellido : "Villar",
        edad : "20",
        peso : 70
    }

    for(let clave in persona){
        console.log(`${clave} : ${persona[clave]}`)
    }
}




//  (for ... of ...) Recorre los valores de un iterable(arrays, strings, maps, sets)
function ejemplo5(){
    const productos = [
        {nombre : "monitor" , precio : 750, stock : 20},
        {nombre : "teclado" , precio : 178, stock : 40},
        {nombre : "mouse"   , precio : 149, stock : 37},
        {nombre : "R5 8600G", precio : 710, stock : 12},
    ]

    for (const producto of productos) {
        console.log(producto)
    }
}

ejemplo5();









function ejemplo11(){
    let i = 0;

    while (i < 5) {
        console.log(`Iteración ${i}`);
        i++;
    }
}



function ejemplo12(){
    let i = 0;
    do {
        console.log(`Iteración ${i}`);
        i++;
    } while (i < 5);
}