const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const usuarios = require("../models/usuarios");
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Usuarios = require("../models/usuarios");

const client = new OAuth2Client(
  "633086225553-495c1chi0spf75vvs1h3j3n3hnfgkufa.apps.googleusercontent.com"
);
router.get("/", async (req, res) => {
  const usuarios = await Usuarios.find();
  console.log(usuarios);
  res.json(usuarios);
});

router.get("/:id", async (req, res) => {
  const usuarios = await Usuarios.findById(req.params.id);
  console.log(usuarios);
  res.json(usuarios);
});

router.post("/", (req, res) => {
  const { tokenId } = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "633086225553-495c1chi0spf75vvs1h3j3n3hnfgkufa.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email_verified, name, email } = response.payload;
      console.log(response);
      if (email_verified) {
        const usuarios = new Usuarios({
          nombre: name,
          email,
          rol : 'pendiente',
          estado : 'pendiente',
          fecha : Date.now()
        });
        Usuarios.findOne({ email }).exec((err, user) => {
          if (user ) {
            console.log("ya existe el usuario");
          } else {
            usuarios.save();
            res.json({ status: "guardado" });
          }
        });
      }
    });
});



router.get("/email/:mail", async (req, res, next) => {
  const usuarios = await Usuarios.find()
    .where("email")
    .equals(req.params.mail);

  console.log(usuarios);
  res.json(usuarios);
});


router.put("/:id", async (req, res) => {
  const {  rol, estado } = req.body;
  const usuarios = {
    rol,
    estado,
  };
  await Usuarios.findByIdAndUpdate(req.params.id, usuarios);
  res.json({ status: "actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Usuarios.findByIdAndRemove(req.params.id);
  res.json({ status: "eliminado" });
});

module.exports = router;
