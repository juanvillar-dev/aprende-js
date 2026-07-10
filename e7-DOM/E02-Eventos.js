
/*---------------------------------------------------------------------------------------------
-------EVENTOS DEL DOCUMENTO-------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded",()=>{
    a = 10;
    b = 5;
    c = a+b;
    console.log(c);
    console.log("El documento html cargo completamente");
});






/*---------------------------------------------------------------------------------------------
-------EVENTOS MOUSE---------------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/
const boton = document.querySelector("button");
/*
    click           un click
    dbclick         doble click
    mouseenter      cursor dentro del area
    mouseout        cursor fuera del area
    mousedown       presionar el area
    mouseup         soltar el area
*/
boton.addEventListener("click",()=>{
    console.log("hiciste click en boton Comprar")
});




// "e" es el objeto que representa el evento que acaba de ocurrir 
boton.addEventListener("click",(e)=>{
    e.preventDefault();                         //Cancela el comportamiento predeterminado (ej. no enviar formulario)
    e.stopPropagation();                        //Evita que el evento siga propagándose hacia elementos padre

    console.log(e.type);                        //Tipo de evento (ej. "click", "submit")
    console.log(e.target);                      //Elemento HTML que disparó el evento
    console.log(e.currentTarget);               //Elemento al que se asignó el listener (¡diferente de target en delegación!)
    console.log(e.defaultPrevented);            //Si ya se llamó preventDefault()
    console.log(e.timeStamp);                   //Momento en que ocurrió el evento (ms)
    console.log(e.tagName);                     //Tipo de etiqueta HTML
});




//SOLO FUNCIONAN PARA EVENTOS DE MOUSE
boton.addEventListener("click",(e)=>{
    let x1 = e.clientX  , x2 = e.clientY;       //Coordenadas del clic dentro del viewport
    let x3 = e.pageX    , x4 = e.pageY  ;       //Coordenadas del clic en relación a toda la página
    let x5 = e.button;                          //Qué botón del mouse fue usado (izquierdo, derecho, etc.)

    console.log(`Viewport [X: ${x1} - Y:${x2}`);
    console.log(`Pagina   [X: ${x3} - Y:${x4}`);
    console.log(`Boton : ${x5}`);
}); 




/*---------------------------------------------------------------------------------------------
-------EVENTOS INPUT---------------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/
const txtBuscador = document.querySelector(".busqueda");
/*
    keydown         presionar tecla
    keyup           soltar tecla
    focusr          entrar al input
    blur            salir del input
    copy            copiando en el input
    paste           pegando en el input
    cut             cortando en el input
    input           el mas usado
*/
txtBuscador.addEventListener("keydown",(e)=>{
    console.log("presionando tecla: ",e.key);
})


txtBuscador.addEventListener("focus",()=>{
    console.log("entrando al input", txtBuscador.value);
});


txtBuscador.addEventListener("input",(e)=>{
    console.log(e);
    
    if(e.target.value == ""){
        console.log("fallo la validación");
    }
});





