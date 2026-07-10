let elemento;

elemento = document;
elemento = document.head;
elemento = document.body;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.links;
elemento = document.links[0];
elemento = document.images;
elemento = document.images[0];
elemento = document.scripts;








/*---------------------------------------------------------------------------------------------
-------SELECCION DE ELEMENTOS------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/

elemento = document.getElementsByClassName  ("caja");
elemento = document.getElementsByTagName    ("div");        // para etiquetas

elemento = document.getElementById  ("url-informacion"  );
elemento = document.getElementById  ("url-novedades"    );

elemento = document.querySelector   (".caja");              // Uno solo
elemento = document.querySelector   (".caja:nth-child(2)");

elemento = document.querySelectorAll(".caja");              // Todos los que coincidan
elemento = document.querySelectorAll("a");





/*---------------------------------------------------------------------------------------------
-------MANIPULACIÓN DE CONTENIDO---------------------------------------------------------------
---------------------------------------------------------------------------------------------*/

elemento = document.querySelector("#titulo");
elemento.innerHTML      = "<p>Esto es texto en <strong>HTML</strong></p>"   // HTML
elemento.textContent    = "<p>Esto es texto en <strong>HTML</strong></p>"   // Texto plano
elemento.innerText      = "<p>Esto es texto en <strong>HTML</strong></p>"   // Considera estilos




/*---------------------------------------------------------------------------------------------
-------ESTILOS Y CLASES------------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/

elemento = document.querySelector("#titulo");
elemento.style.color         = "#85b";
elemento.style.textTransform = "uppercase"
elemento.style.background    = "#c0c4c8";

elemento.classList.add      ("texto", "prueba");    // Agrega clases
elemento.classList.remove   ("prueba");             // Elimina la clase
elemento.classList.toggle   ("prueba");             // Elimina o agrega la clase si existe o no




/*---------------------------------------------------------------------------------------------
-------Crear, insertar y eliminar elementos----------------------------------------------------
---------------------------------------------------------------------------------------------*/
// CREAR
let enlace = document.createElement("a");
enlace.textContent  = "Nuevo enlace";
enlace.href         = "https://www.youtube.com/";
enlace.target       = "_blank";
enlace.setAttribute     ("class", "enlace-1");
enlace.getAttribute     ("class");
enlace.removeAttribute  ("class");

//INSERTAR
let menu = document.querySelector("#cabezal");
menu.appendChild(enlace);
menu.insertBefore(enlace, menu.children[1]);
menu.replaceChild(enlace, menu.children[1]);

//ELIMINAR
enlace.remove();
menu.removeChild(menu.children[1]);




/*---------------------------------------------------------------------------------------------
-------ELEMENTOS HIJOS-------------------------------------------------------------------------
---------------------------------------------------------------------------------------------*/
let k1, k2, k3, k4, k5, k6;

k1 = menu.children[1].textContent;      //Obtener hijo
k2 = menu.parentElement.parentElement;  //Obtener padre
k3 = menu.nextElementSibling;           //Obtener siguiente elemento
k4 = menu.previousElementSibling;       //Obtener anterior elemento
k5 = menu.firstElementChild;            //Obtener primer hijo
k6 = menu.lastElementChild;             //Obtener ultimo hijo
