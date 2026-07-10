
/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    CICLO DE VIDA DEL DOM
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
/*
    Es el conjunto de etapas por las que pasa una página web desde que se empieza a cargar hasta que se cierra. Cada etapa tiene eventos específicos que puedes usar para ejecutar código en el momento adecuado.
*/ 






//  DOMContentLoaded
/*
    -   Se dispara cuando el HTML a sido completamente cargado y parseado
    -   NO espero imágemes, estilos ni frames
    -   Es el momentas ideal para manipular el DOM con JS

    -   IDEAL para inicializar componentes, agregar listeners, modificar nodos
*/
function ejemplo1(){
        document.addEventListener("DOMContentLoaded", ()=>{
            console.log("DOM listo para manipular") 
        });
}





//  load
/*
    -   Se dispara cuando todo el contenido de la página ha sido cargado.
    -   SI incluye imagenes, CSS, Scripts externos, Iframes

    -   IDEAL para mostrar animaciones post-carga, funciones con img
*/
function ejemplo2(){
        window.addEventListener("load", () => {
            console.log("Todo cargado, incluyendo imágenes");
        });

}





//  beforeunload
/*  
    - Se dispara justo antes de que el usuario abandone la página.
    - UTIL al mostrar un mensaje de confirmación para evitar perdida de datos.
*/
function ejemplo3(){
        window.addEventListener("beforeunload", (e)=>{
            e.preventDefault();
        });
}




//  unload
/*  
    -   Se dispara cuando la página se está descargando (cerrando).
    -   No se puede detener ni mostrar mensajes.

    -   UTIL para limpiar recursos, cerrar conexiones, etc
*/
function ejemplo4(){
        window.addEventListener("unload", () => {
        console.log("La página se está cerrando");
        });
}