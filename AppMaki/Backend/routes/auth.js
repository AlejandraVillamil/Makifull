const express = require("express");
const router = express.Router();

//Modulos internos 
const {Usuario} = require("../model/usuario");
//Ruta 
router.post("/", async (req, res) => {
    //validamos que correo exista 
    const usuario = await Usuario.findOne({
        correo: req.body.correo
    });
    //si el correo no existe 
    if (!usuario) return res.status(400).send("Correo y/o contraseña no son validos");
    //
    if (usuario.pass !== req.body.pass) return res.status(400).send("Correo y/o contraseña no son validos")

    //generar JWT
    const jwtToken = usuario.generateJWT();
    res.status(200).send({
        jwtToken
    });
})
module.exports = router;
