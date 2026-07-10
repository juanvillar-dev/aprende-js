function ejemplo1(){
        const numeros = new Set();

        numeros.add(10);
        numeros.add(15);
        numeros.add(7);
        numeros.add(40);

        numeros.add(7);
        numeros.add(7);
        console.log(numeros)
}



function ejemplo2(){
        const arreglo = [1,2,5,2,10,2];
        const numeros = new Set(arreglo);

        console.log(arreglo);
        console.log(numeros);
}



function ejemplo3(){
        const frutas = new Set(["manzana","platano","uva"]);

        frutas.add("mango");

        console.log(frutas);
        console.log(frutas.delete("manzana"));
        console.log(frutas.has("manzana"));
        
        frutas.clear();

        console.log("Tamaño: "+frutas.size);
}



function ejemplo4(){
        const frutas = new Set(["manzana","platano","uva"]);

        const arreglo = [... frutas];

        console.log(arreglo);
}
ejemplo4();