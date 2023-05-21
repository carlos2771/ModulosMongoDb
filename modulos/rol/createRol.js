const { MongoClient } = require("mongodb")
const uri = "mongodb+srv://admin:admin@cluster0.49jaesh.mongodb.net/?retryWrites=true&w=majority"
const { faker } = require('@faker-js/faker');

const agregarDocumento = async (documento) => {
    const client = new MongoClient(uri)
    try {
        await client.connect();
        const result = await client.db("psbarber").collection("roles").insertMany(documento)
        console.log(result);
        console.log(`Se creo una nueva propiedad con el siguiente id: ${result.insertedId}`);
    } catch (error) {
        console.error(error)
    } finally {
        await client.close()
    }
}
// let rol = {
//     "nombre":"carlos",
//     "estado": true
// }


for (let i = 0; i < 200; i++) {
    agregarDocumento([
        {
            "nombre": faker.internet.userName(),
            "estado": faker.datatype.boolean(),
            "id_rol": faker.number.int({min: 1, max: 2000})
        },
        
        {
            "nombre": faker.internet.userName(),
            "estado": faker.datatype.boolean(),
            "id_rol": faker.number.int({min: 1, max: 2000})
        },
        
        {
            "nombre": faker.internet.userName(),
            "estado": faker.datatype.boolean(),
            "id_rol": faker.number.int({min: 1, max: 2000})
        }
    ])
}