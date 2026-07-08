const precio = '$30.00'
const producto = 'Monitor de 20\"';

console.log(producto.concat(' : ').concat(precio));
console.log(producto + " " + precio);
console.log("El producto "+producto+" cuesta "+precio)
console.log("El producto",producto,"cuesta",precio)
console.log(`El producto ${producto} cuesta ${precio}`)

console.log(producto);
console.log(producto.length);               //TAMAÑO
console.log(producto.includes('for'));      //¿CONTIENE 'tor'?
console.log(producto.indexOf('tor'));       //¿EN QUE POSICIÓN COMIENZA 'tor'?




const cadena = "  Hola amigo  ";

console.log(cadena);
console.log(cadena.trim());
console.log(cadena.trimStart());
console.log(cadena.trimEnd());

console.log(cadena.replace('amigo', 'compañero'));

console.log(cadena.slice(0,6));
console.log(cadena.slice(6));

console.log(cadena.substring(0,6));
console.log(cadena.substring(6));
console.log(cadena.substring(6,1));




const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
console.log(usuario.repeat(5));
console.log(usuario.toLowerCase());
console.log(usuario.toUpperCase());

const actividad = "Hola amigo, ¿como estas?";
console.log(actividad.split(" "));


const numero = 300;
console.log(precio.toString)
