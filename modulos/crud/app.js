
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin:admin@cluster0.49jaesh.mongodb.net/?retryWrites=true&w=majority"
// Operaciones crud

// Create insertOne()
async function createPropiedad(propiedad) {
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const result = await client.db("psbarber").collection("permisos").insertMany(propiedad)
        console.log(result);
        console.log(`Se creo una nueva propuedad con el siguiente id: ${result.insertedId}`);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close() // pase lo que pase si falla o no que cierre la conexion
    }
}





//READ findone()//

async function buscarPropiedad(propiedad) {
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const result = await client.db("psbarber").collection("usuarios").findOne({ nombre: propiedad })
        if (result) {
            console.log(`se encontro una prodiedad nombre ${propiedad}}`);
            console.log(result);
        } else {
            console.log(`no se encontro una propiedad nombre ${propiedad}`);
        }
    } catch (error) {
        console.error(error);
    } finally {
        await client.close()
    }
}


async function actualizarPropiedad(prodiedad, nuevo){
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const result = await client.db("psbarber").collection("permisos").updateOne({nombre: prodiedad},
            {
                $set:{
                    nombre: nuevo
                }
            })
        console.log(`${result.matchedCount} propiedades que cumplen con el criterio de busqueda`);
        console.log(`${result.modifiedCount} propiedad(es) fue(ron) actualizada(s)`)

    } catch (error) {
        console.error(error);
    }finally{
        await client.close()
    }
}

async function elminarDocumento(nombre){
    const client = new MongoClient(uri); // el aca se conecta con esa direccion
    try {
        await client.connect();
        const result = await client.db("psbarber").collection("permisos").deleteOne({ nombre: nombre })
        console.log(`${result.deletedCount} propiedades que fueron eliminadas`);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close() // pase lo que pase si falla o no que cierre la conexion
    }
}




module.exports ={
    createPropiedad,
    buscarPropiedad,
    actualizarPropiedad,
    elminarDocumento
}




















// async function actualizarPropiedad(nombrePropiedad, campoActualizar){
//     const client = new MongoClient(uri); // el aca se conecta con esa direccion
//     try {
//      await client.connect();
//     const result =  await client.db("sampe_airbnb").collection("ListingsAndReviews").updateOne({name: nombrePropiedad},
//         {$set:{
//             summary : campoActualizar
//         }})
//         console.log(`${result.matchedCount} propiedades que cumplen con el criterio de busqueda`);
//         console.log(`${result.medifiedCount} propiedades que fueron actualizadas`);

//     } catch (error){
//         console.error(error);
//     }finally{
//         await client.close() // pase lo que pase si falla o no que cierre la conexion
//     }
// }

// //Eliminar
// async function eliminarPropiedad(nombrePropiedad){
//     const client = new MongoClient(uri); // el aca se conecta con esa direccion
//     try {
//      await client.connect();
//     const result =  await client.db("sampe_airbnb").collection("ListingsAndReviews").deleteOne({name: nombrePropiedad})
//         console.log(`${result.deletedCount} propiedades que fueron eliminadas`);
//     } catch (error){
//         console.error(error);
//     }finally{
//         await client.close() // pase lo que pase si falla o no que cierre la conexion
//     }
// }


// module.exports = {
//     createPropiedad,
//     buscarPropiedad,
//     actualizarPropiedad,
//     eliminarPropiedad
// }
