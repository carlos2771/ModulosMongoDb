use("psbarber")
db.usuarios.aggregate([
  {
    $lookup: {
      from: "roles",
      localField: "'_id'",
      foreignField: "'id_roles'",
      as: "llave foranea de usuario a rol"
    }
  }
])