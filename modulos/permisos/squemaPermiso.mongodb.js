use("psbarber")

db.createCollection("permisos",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["nombre","estado"],
            properties:{
                nombre:{
                    bsonType: "string",
                    description: "el nombre debe ser tipo string"
                },
                estado:{
                    bsonType: "bool",
                    description: "el estado debe ser booleano"
                }
            }
        }
    }
})