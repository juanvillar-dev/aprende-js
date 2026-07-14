/*------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------
    BINDING
    Significa a qué objeto está atado THIS cuando se ejecuta una función.

    Cada vez que se ejecuta una funcion() JS determina valor tendra (this) en la funcion.
    Es el acto de asociar una función, variable o contexto () a un valor o entorno específico
--------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/
'use strict'



function ejemplo1(){        
        const persona = {
                nombre  : "Henry",

                saludar : function() {
                    console.log(`Hola, me llamo ${this.nombre}`);
                }
        }


        persona.saludar();                  //  Hola me llamo Henry



        const saludar = persona.saludar;    //  Hola me llamo undefined
        saludar();                          



        const $boton = document.getElementById(`btnPrueba`); //  Hola me llamo undefined
        $boton.addEventListener(`click`, persona.saludar);
}





function ejemplo2(){
        function quienSoy(){
            console.log(`Hola, yo soy `, this);
        }
        quienSoy();
}





/*------------------------------------------------------------------------------------------------------------
    IMPLICIT BINDING    (CUANDO ES INVOCACION POR MÉTODO)
    -   Enlazamiento Implícito
    -   Ocurre cuando llamas a una función como método de un objeto, usando la notación de punto (obj.metodo()).
    -   JS asigna el (this) al objeto que está “a la izquierda del punto” en la invocación.
------------------------------------------------------------------------------------------------------------*/
function ejemplo3(){
        const sacha = {
                nombre  : `Sacha`,

                saludar : function(){
                    console.log(this);
                },

                hermano : {
                    nombre  : `Eric`,
                    
                    saludar : function(){
                        console.log(this)
                    }
                }
        }

        sacha.saludar();                                    //  this = sacha
        sacha.hermano.saludar();                            //  this = hermano
        
        
        // Si extraes la función y la llamas sin el objeto, pierdes el binding implícito:
        const saludo = sacha.saludar;               
        saludo();                                           //  this = undefined
        
        /*
        Aquí no se está llamando a sacha.saludar()
        Lo que se pasa es la función en sí misma como referencia.
        */
        const $boton = document.getElementById(`btnPrueba`);
        $boton.addEventListener(`click`, sacha.saludar());  //  this = botonHTML
}





function ejemplo4(){
        const sacha = {
            nombre  : `Sacha`,

            saludar : function(){
                console.log("saludar")
                console.log(this);          // <-- aquí sí es `sacha`

                saludar2();                 // llamada "suelta"

                function saludar2(){
                    console.log("saludar2")
                    console.log(this);      // <-- aquí ya no es `sacha`
                }
            },
        }

        sacha.saludar();
}





function ejemplo5(){
        const sacha = {
            nombre  : `Sacha`,

            saludar : function(){
                console.log("saludar")
                console.log(this);          // <-- aquí sí es `sacha`

                this.saludar2();            // <-- aquí aun es `sacha`
            },
        
            saludar2: function(){
                console.log("saludar2")
                console.log(this);          // <-- aquí aun es `sacha`
            }

        }

        sacha.saludar();
}





/*------------------------------------------------------------------------------------------------------------
    EXPLICIT BINDING    (CUANDO ES INVOCACIÓN INDIREECTA)
------------------------------------------------------------------------------------------------------------*/

function ejemplo6(){
        const sacha = {
            nombre  : `Sacha`,
            carrera : `Doctor`,
            saludar : function(num1, num2){
                console.log(`Hola me llamo`, this.nombre, ` me dijiste ${num1}, ${num2}`);
            }
        }


        const pepe = {
            nombre : `Pepe`,
        }

        
        sacha.saludar();
        sacha.saludar.call(pepe, 1, 2   );       //Especificas el (this)
        sacha.saludar.call(pepe, [1, 2] );      

        const $btn = document.getElementById(`btnPrueba`);
        $btn.addEventListener(`click`, sacha.saludar.call(sacha, 1,2)); // cuando hay   metodo()    se ejecuta al instante
        $btn.addEventListener(`click`, sacha.saludar.bind(sacha, 1,2)); // solo hay     metodo      no se ejecuta
}





/*------------------------------------------------------------------------------------------------------------
    NEW BINDING         (INSTANCIAR OBJETOS)
------------------------------------------------------------------------------------------------------------*/
function ejemplo7(){
        function Persona (nombre){
            this.nombre = nombre;
            //return this       // JS lo hace automaticamente por el (new)
        }

        const sacha = new Persona(`Sacha`); // Se crea un objeto y se guarda cen (sacha)
}






/*------------------------------------------------------------------------------------------------------------
    LEXICAL BINDING
    -   No tienen su propio (this)  A diferencia de las funciones normales, 
    -   Las flechas no generan un nuevo contexto de (this).
    -   Herencia léxica: El this dentro de una arrow function es el mismo que el del lugar donde fue definida. 
    -   Se dice que lo “heredan” del scope exterior
------------------------------------------------------------------------------------------------------------*/
function ejemplo8(){    
        const sacha = {
            nombre  : `Sacha`,
            carrera : `Doctor`,
            
            saludar : function(){
                const decirProfesion = () =>{
                    console.log(`Mi carrera es: `, this.carrera);
                }
                console.log(`Hola me llamo`, this.nombre);
                decirProfesion();
            },

            saludar2: () => {
                const decirProfesion = () =>{
                    console.log(`Mi carrera es: `, this.carrera);
                }
                console.log(`Hola me llamo`, this.nombre);
                decirProfesion();
            }
        }
        sacha.saludar();
}

ejemplo7();