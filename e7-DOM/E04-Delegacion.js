
/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    DELEGACION DE EVENTOS
---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
/*
    Es una técnica que consiste en asignar un único listener a un elemento padre, en lugar de asignar listeners individuales a cada hijo. El padre “escucha” los eventos que ocurren en sus hijos, gracias al mecanismo de bubbling.

    -   Mejor rendimiento
    -   Esacalable
    -   Mantenible
*/ 

const body = document.body;
const card = document.querySelector(".caja");
const boton= document.querySelector("#boton");
const contenedor = document.querySelector(".contenedor");



//  PESADO
function ejemplo1(){
        const botones = document.querySelectorAll(".boton");

        botones.forEach(boton=>{
            boton.addEventListener("click",(e)=>{

                console.log(boton.id);
            })
        });
}



//  EFICIENTE
/*
    1)  El evento ocurre en el BUTTON
    2)  El navegador lo burbujea hacia arriba
    3)  El elemento (class="contenedor") lo intercepta
    4)  Usamos e.target o closest() para filtrar el tipo de elemento
*/
function ejemplo2(){
        contenedor.addEventListener("click", (e)=>{

            //EL click fue directamente sobre un    <button class="boton"> </button>
            if(e.target.matches("button.boton")){         
                const boton = e.target;

                console.log(boton.id);
            }

            //EL click fue dentro de un             <div class="caja"> </div>
            if(e.target.closest("div.caja")){
                
                console.log("click en la carta, o en un elemento hijo");
            }
        })
}

ejemplo2();