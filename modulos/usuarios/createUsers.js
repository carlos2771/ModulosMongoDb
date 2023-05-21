const { MongoClient } = require("mongodb")
const uri = "mongodb+srv://admin:admin@cluster0.49jaesh.mongodb.net/?retryWrites=true&w=majority"
const { faker } = require('@faker-js/faker');
//InsertOne()

const agregarDocumento = async (documento) => {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const result = await client.db("psbarber").collection("usuarios").insertMany(documento)
        console.log(result);
        console.log(`Se creo una nueva propiedad con el siguiente id: ${result.insertedId}`);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close()
    }
}

for (let i = 0; i < 200; i++) {
    agregarDocumento([


        {
            "nombre": faker.internet.userName(),
            "apellido": faker.internet.userName(),
            "contraseña": faker.internet.password(),
            "email": faker.internet.email(),
            "estado": faker.datatype.boolean()
        },
        {
            "nombre": faker.internet.userName(),
            "apellido": faker.internet.userName(),
            "contraseña": faker.internet.password(),
            "email": faker.internet.email(),
            "estado": faker.datatype.boolean()
        },
        {
            "nombre": faker.internet.userName(),
            "apellido": faker.internet.userName(),
            "contraseña": faker.internet.password(),
            "email": faker.internet.email(),
            "estado": faker.datatype.boolean()
        }
    ])

}































