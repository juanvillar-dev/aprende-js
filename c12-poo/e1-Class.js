/*--------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
    CLASE BASE
----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/
function ejemplo1(){
            
        class Persona{
            constructor(nombre, edad, altura){
                this.nombre = nombre;
                this.edad   = edad  ;
                this.altura = altura;
            }

            detalle(){
                return `Persona[nombre:${this.nombre}, edad:${this.edad}], altura:${this.altura}`;
            }
            
            cumplirAnios(){
                this.edad++;
            }
        }

        const juan = new Persona("Juan", 23,170);
        juan.cumplirAnios;
        console.log(juan.detalle());
}








/*--------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
    ENCAPSULAMIENTO
----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/
function ejemplo2(){
            
        class Persona2{
            //Constructor
            constructor(nombre, edad){
                this._nombre = nombre;  /* (_) antes de la propiedad es una convencion, pero no bloquea realmente*/
                this._edad   = edad  ;
            }

            //Getters y Setters
            getNombre(){
                return this._nombre;
            }
            setNombre(nombre){
                if(nombre) this._nombre = nombre;
            }


            getEdad(){
                return this._edad;
            }
            setEdad(edad){
                if(edad>0) this._edad = edad;
            }
        }

        const lucas = new Persona2("Lucas", 15);
        console.log(lucas._nombre);
}







function ejemplo3() {
    
        class Persona3{
            #nombre;                /* (#) antes de la propiedad, si bloquea*/
            #edad;

            //Constructor
            constructor(nombre, edad){
                this.#nombre = nombre;
                this.#edad   = edad;
            }
            
            //Métodos
            detalle(){
                return `Persona[nombre:${this.#nombre}, edad:${this.#edad}]}`;
            }

            //Getters y Setters
            getNombre()         { return        this.#nombre;}
            setNombre(nombre)   { if(nombre)    this.#nombre = nombre;}

            getEdad()           { return        this.#edad;}
            setEdad(edad)       { if(edad>0)    this.#edad = edad;}
        }

        const marcos = new Persona3("Marcos",20);
        console.log(marcos.nombre);
}





/*--------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
    HERENCIA
----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/
function ejemplo4(){

        class Persona{
            #nombre;
            #edad;
            
            constructor(nombre, edad){
                this.#nombre = nombre;
                this.#edad   = edad;
            }
            
            detalle(){  
                return `Persona[nombre:${this.#nombre}, edad:${this.#edad}]}`;
            }
        }



        class Empleado extends Persona{
            #cargo;

            //Constructor
            constructor(nombre, edad, cargo){
                super(nombre, edad);        
                this.#cargo = cargo;
            }

            //Métodos
            detalle(){
                return `Empleado[${super.detalle()}, cargo: ${this.cargo}]`;
            }
        }

        const mateo = new Empleado("Mateo",20,"Contador publico");
        console.log(mateo.detalle());









        class Producto{
            #nombre;
            #precio;
            #stock;

            constructor(nombre, precio, stock){
                this.#nombre = nombre;
                this.#precio = precio;
                this.#stock  = stock;
            }

            descripcion(){
                return `Producto[nombre: ${this.#nombre}, precio: ${this.#precio}, stock : ${this.#stock}]`;
            }
        }


        class Libro extends Producto{
            #autor;
            #genero;

            constructor(nombre, precio, stock, autor, genero){
                super(nombre, precio, stock);
                this.#autor = autor;
                this.#genero= genero;
            }

            descripcion(){
                return `${super.descripcion()}, autor: ${this.#autor}, genero: ${this.#genero}`;
            }
        }


        const a = new Producto  ("El mundo de sofia", 10, 24);
        const b = new Libro     ("El yerno millonario", 15, 38, "Anonimo", "Ficcion");

        console.log(a);
        console.log(a.descripcion());
        console.log(b.descripcion());
}






/*--------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
    ESTATIC
----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------*/
function ejemplo5(){

        class Producto{
            static c = 0;
            #id;
            #nombre;
            #precio;

            constructor(nombre, precio){
                this.#nombre = nombre;
                this.#precio  = precio;

                Producto.c ++;
                this.#id = Producto.c;
            }

            static cantidad(){
                return this.c;
            }

            detalle(){
                return `Producto[id:${this.#id}, nombre:${this.#nombre}, precio:${this.#precio}]`;
            }
        }

        const p1 = new Producto("teclado"   ,170.99);
        const p2 = new Producto("microfono" ,300);
        const p3 = new Producto("monitor"   ,770);

        console.log(
            p1.detalle()+"\n"+
            p2.detalle()+"\n"+
            p3.detalle()+"\n"+
            Producto.cantidad()
        );
}


