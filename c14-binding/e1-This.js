/*------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
    THIS
    Es el objeto que invoca la funcion
    Solo puede ser objetos, no funciones


    NO ES UNA VARIABLE
    -   Es una keyword especial que el motor de JS aigna automaticamente en cada ejecución del codigo.
    
    NO APUNTA SIEMPRE AL MISMO OBJETO
    -   Su valor depende de la forma en que se llama la funcion.

    ES DINAMICO
    -   En funciones normales.
    -   Puede cambiar según el contexto de ejecución.



    REGLAS
    1)  INVOCACIÓN GLOBAL (modo estricto vs no estricto)
        -   en NO ESTRICTO, (this) en (window)
        -   en ESTRICTO   , (this) es (undefined)
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/



console.log(this);




function normal(){
    console.log(this)
}
normal();


const objeto = {
    nombre: "Juan",
    metodo: normal
}

objeto.metodo();
new normal();






