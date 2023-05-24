use("psbarber")
db.usuarios.aggregate([
  {
    $lookup: {
      from: "roles",
      localField: "'_id'", //_id de usuarios
      foreignField: "'id_roles'",  // los 2 id tienen que cohincidir
      as: "usuariosRoles" //alias
    }
  }
])