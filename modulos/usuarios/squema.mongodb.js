const database = 'psbarber';
use(database);
db.createCollection(collection);

use("psbarber")
db.createCollection("usuarios", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["nombre", "apellido", "contraseña","email","estado"],
         properties: {
            nombre: {
               bsonType: "string",
               description: "Nombre del usuario, debe ser tipo string"
            },
            apellido: {
               bsonType: "string",
               description: "Apellido del usurio, debe ser tipo string"
            },
            contraseña: {
               bsonType: "string",
               description: "Contraseña, debe ser tipo string"
            },
            email: {
               bsonType: "string",
               pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
               description: "Correo tipo string, con formato de correo@mail.com"
            },
            estado: {
               bsonType: "bool",
               description: "Estado tipo booleano de la empresa"
            }
         }
      }
   }
})





