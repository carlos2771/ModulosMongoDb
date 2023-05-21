// use("psbarber")
// // updateOne con upsert

//Actualizar un campo por su id
// db.permisos.updateOne(
//     {_id: "6466fa806c9fd88501ea9267"},
//     {
//         $set:{ // si no existen los crea y si existen los actualiza
//             "nombre": "carlos1",
//             "estado": false
//         }
//     },
//     {upsert: true}
//     )
// db.permisos.findOne({_id:"6466fa806c9fd88501ea9267"})


// updateOne
// use("psbarber")
// // actualizar un campo a traves de su nombre
// db.usuarios.updateOne(
//     {nombre:"carlosS"},
//     {$set:{nombre: "andress"}}
// )
// db.usuarios.find({nombre:"andress"})

//updateMany
use("psbarber")
// actualizar un usuario a través de su estado
// db.usuarios.updateMany(
//     { estado: true }, {
//     $set: { "password": "12345" }
// })
// db.usuarios.find({estado:true})

//updateMany Upsert
// actualizar el email todos los  usuarios que tengan apellido diaz 
use("psbarber")
// db.usuarios.updateMany(
//       {
//         apellido: "diaz" //Preguntamos si no tiene el correo
//       },
//       {
//         $set:{"email":"aprendiz@sena.edu.co"} // Se crea el correo si no lo tiene
//       },
//       {
//         $upsert:true // si no existe lo crea
//       }
// ) 
// db.usuarios.find({apellido:"diaz"})

//DeleteOne
use("psbarber")
//eliminar usuarios por su id
// db.usuarios.deleteOne({_id:"6465a931f2057b43c23882dc"})
// db.usuarios.find({_id:"6465a931f2057b43c23882dc"})

//eliminar usuario a través de su nombre
// db.usuarios.deleteOne({nombre:"Bradley93"})
// db.usuarios.find({nombre:"Brandley93"})

//DeleteMany
use("psbarber")
// eliminar todos los usuarios que tengan el email Katrine_Jacobson51@yahoo.com
// db.usuarios.deleteMany({email:"Katrine_Jacobson51@yahoo.com"})
// db.usuarios.find({email :"Katrine_Jacobson51@yahoo.com"})

//Drop
// eliminar una coleccion 
// db.ensayo.drop() // cree una colleccion temporal para no eliminar las importantes

//Drop Database
// eliminar una base de datos
// use("vacio")
// db.dropDatabase()



//Agregaciones
// todas las personas que tengan estado activo se le concatene el nombre y el apellido, se muestre el email, se ordene alfabeticamente y me muestre solo 2 usuarios 
use("psbarber")
// use("psbarber")
// db.usuarios.aggregate([
//     {
//         $match: {
//             estado: true
//         }
//     },
//     {
//         $project: {
//             "_id": false,
//             "nombreCompleto": {
//                 $concat: ["$nombre", " ", "$apellido"]
//             }
//         , "email": true
//         }
//     },
//     {
//         $sort: {
//             nombre: 1
//         }
//     },
//     {
//         $limit: 2
//     }
// ])

use("psbarber")
// todos los usuarios que tengan estado activo los cuente y me mueste solo 10 de ellos
// db.usuarios.aggregate([
//     {
//         $match: {
//           "estado":true
//         }
//     },
//     {
//         $count: "Cantidad es usuarios con estado activo"
//     },
//     {
//         $limit: 10
//     }
// ])

// use("arreglos")
// a las propiedades de cada usuario de un documento tome el primer valor del arrat me las ordene y me muestre solo 4 de esos usuarios
// db.arrays.aggregate([
//   {
//     $unwind: "$sizes"
//   },
//   {
//     $sort: {
//       sizes: 1
//     }
//   },
//   { $limit: 4 }

// ])


