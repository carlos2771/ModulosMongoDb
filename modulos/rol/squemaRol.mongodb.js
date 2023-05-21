use("psbarber")

db.createCollection("roles",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["nombre","estado","id_rol"],
            properties:{
                nombre:{
                    bsonType: "string",
                    description: "el nombre debe ser tipo string"
                },
                estado:{
                    bsonType: "bool",
                    description: "el estado debe ser booleano"
                },
                id_rol:{
                    bsonType: "int",
                    description: "solo enteros"
                }
            }
        }
    }
})