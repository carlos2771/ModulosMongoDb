const { MongoClient } = require("mongodb")
const uri = "mongodb+srv://admin:admin@cluster0.49jaesh.mongodb.net/?retryWrites=true&w=majority"
const { faker } = require('@faker-js/faker');
//InsertOne()

const agregarDocumento = async (documento) => {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const result = await client.db("psbarber").collection("ventas").insertMany(documento)
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
            "id_venta": faker.number.int({min:1, max:2000}),
            "fecha" : faker.date.weekday(),
            "total":faker.number.int({min:1000, max:15000}),
            "estado": faker.datatype.boolean()
        
        },
        {
            "id_venta": faker.number.int({min:1, max:2000}),
            "fecha" : faker.date.weekday(),
            "total":faker.number.int({min:1000, max:15000}),
            "estado": faker.datatype.boolean()
        
        },
        {
            "id_venta": faker.number.int({min:1, max:2000}),
            "fecha" : faker.date.weekday(),
            "total":faker.number.int({min:1000, max:15000}),
            "estado": faker.datatype.boolean()
        
        },
        {
            "id_venta": faker.number.int({min:1, max:2000}),
            "fecha" : faker.date.weekday(),
            "total":faker.number.int({min:1000, max:15000}),
            "estado": faker.datatype.boolean()
        
        },
        {
            "id_venta": faker.number.int({min:1, max:2000}),
            "fecha" : faker.date.weekday(),
            "total":faker.number.int({min:1000, max:15000}),
            "estado": faker.datatype.boolean()
        
        }
        
        

    ])

}


