/*-------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
    MAP
    -   Es una colección de pares clave → valor.
    -   Las claves pueden ser de cualquier tipo (no solo strings como en los objetos).
    -   Mantiene el orden de inserción.
    -   Tiene métodos específicos para manipular y recorrer sus elementos.

---------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/
function ejemplo1(){
        const mapa = new Map();

        const persona = new Map([
            ["nombre","Juan"],
            ["edad",20],
            ["activo",true]
        ]);


        persona.set("pais","Perú");

        const x1 = persona.size
        const x2 = persona.has("nombre");
        const x3 = persona.get("nombre");
        const x4 = persona.delete("nombre");

        console.log(persona);

        persona.clear();
}






function ejemplo2(){
        const persona = new Map([
            ["nombre","Juan"],
            ["edad",20],
            ["activo",true]
        ]);


        for(const [clave, valor] of persona){
            console.log(`${clave} = ${valor}`);
        }


        for(const x of persona){
            const clave = x[0], valor = x[1];
            console.log(`${clave} = ${valor}`);
        }
}

ejemplo2();
