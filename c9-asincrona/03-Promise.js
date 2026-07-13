const personas = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "María", edad: 30 },
    { id: 3, nombre: "Pedro", edad: 28 },
    { id: 4, nombre: "Lucía", edad: 22 },
    { id: 5, nombre: "Carlos", edad: 35 }
];

const pedidos = [
    {id : 11, usuarioID : 1, fecha : "2025-08-10", estado : "Enviado"},
    {id : 12, usuarioID : 2, fecha : "2026-01-02", estado : "Enviado"},
    {id : 13, usuarioID : 3, fecha : "2026-01-03", estado : "Cancelado"},
    {id : 14, usuarioID : 1, fecha : "2026-01-01", estado : "Enviado"},

];

const detallePedido = [
    {pedidoID : 11, producto : "Laptop"},
    {pedidoID : 11, producto : "Mouse"},
    {pedidoID : 11, producto : "Monitor"}
];








/*-------------------------------------------------------------------------------------------------
    PROMISES
-------------------------------------------------------------------------------------------------*/
function obtenerUsuario(id){
    return new Promise((resolve, reject) =>{
            const persona   = personas.find(p => p.id === id);
            persona
                ? resolve   (persona) 
                : reject    ("Usuario no encontrado");
    });
}

function obtenerPedidos(usuarioID){
    return new Promise((resolve, reject) => {
            const pedidosX  = pedidos.filter(p=>p.usuarioID === usuarioID);
            
            if (pedidosX.length > 0)    resolve(pedidosX);
            else                        reject("No hay pedidos");
    })
}

function obtenerDetalle(pedidoID){
    return new Promise((resolve, reject) => {
            const detalles = detallePedido.filter(d=>d.pedidoID=== pedidoID);
            
            if (detalles.length > 0)    resolve(detalles);
            else                        reject("No hay productos");
    })
}








/*-------------------------------------------------------------------------------------------------
    Uso con promesas encadenadas    
-------------------------------------------------------------------------------------------------*/
function modo1(){
        obtenerUsuario(1)
            .then(usuario => {
                    console.log(`Usuario: ${usuario.nombre}`)
                    return obtenerPedidos(usuario.id);
            })
            .then(pedidosX => {
                    for(const p of pedidosX){
                        console.log(p);
                        obtenerDetalle(p.id)
                                .then   (detalles=>detalles.forEach(d=>console.log(`- ${d.producto}`)))
                                .catch  (error   =>console.log(error));
                    }
            })
            .catch(error => console.log(error));
}




/*-------------------------------------------------------------------------------------------------
    Con async / await 
-------------------------------------------------------------------------------------------------*/
async function modo2() {
        try{
            const usuario = await obtenerUsuario(1);
            console.log(`Usuario: ${usuario.nombre}`)
            
            const pedidosX = await obtenerPedidos(usuario.id);

            for(const p of pedidosX){
                console.log(p);
                const detalles = await obtenerDetalle(p.id);
                detalles.forEach(d=>console.log(`- ${d.producto}`));
            }
        }
        catch(error){
            console.log(error);
        }
}




/*-------------------------------------------------------------------------------------------------
    Uso de Promise.all
-------------------------------------------------------------------------------------------------*/
async function modo3() {
        try{
            const usuario = await obtenerUsuario(1);
            console.log(`Usuario: ${usuario.nombre}`)
            
            const pedidosX = await obtenerPedidos(usuario.id);

            // Lanza todas las promesas de detalle en paralelo
            const resultados = await Promise.all(
                pedidosX.map(async p=>{
                    try {
                        const detalles = await obtenerDetalle(p.id);
                        return {pedido: p, detalles};
                    } catch (error){
                        return {pedido: p, error};
                    }
                })
            );

            resultados.forEach(r=>{
                console.log(r.pedido);
                r.detalles 
                        ? r.detalles.forEach(d=>console.log(` - ${d.producto}`))
                        : console.log(r.error);
            });
        }
        catch(error){
            console.log(error);
        }
}

modo3();