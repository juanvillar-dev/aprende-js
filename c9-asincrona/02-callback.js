class Usuarios {
    static lista = [
        { id: 1, nombre: "Juan", edad: 25 },
        { id: 2, nombre: "María", edad: 30 },
        { id: 3, nombre: "Pedro", edad: 28 },
        { id: 4, nombre: "Lucía", edad: 22 },
        { id: 5, nombre: "Carlos", edad: 35 }
    ];



    static findById(id, callback){
        const data  = this.lista.find(u => u.id === id);

        if(data)    callback(data, null);
        else        callback(null, new Error("Persona no encontrada"));
    }


    static findById2(id){
        const data = this.lista.find(u => u.id === id);

        const API = {
            then(callback){
                if(data && callback){
                    const r = callback(data);
                }
                return API;
            },
            error(callback){
                if(!data && callback)   {
                    callback(new Error("Persona no encontrada"));
                }
            }
        }
        return API;
    }


    static findById3(id){
        const usuario = this.lista.find(u => u.id === id);

        function crearAPI(data, error){
            const API = {
                then(callback){
                    if(data && callback){
                        const newData = callback(data);
                        return crearAPI(newData, null)
                    }
                    return API;
                },
                error(callback){
                    if(error && callback)   {
                        callback(new Error("Persona no encontrada"));
                    }
                    return API;
                }
            }

            return API;
        }

        if(usuario) return crearAPI(usuario, null);
        else        return crearAPI(null, new Error("Persona no encontrada"));
    }
}



Usuarios.findById3(2)
        .then(data => {
            console.log(data);
            return JSON.stringify(data);
        })
        .then(json =>{ 
            console.log(json);
            return (JSON.parse(json)).nombre
        })
        .then(nombre => 
            console.log(nombre)
        )
        .error(err => console.log(err.message));
