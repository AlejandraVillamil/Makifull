const express = require("express");
const router = express.Router();
//Modulos creados 
const {Usuario} = require("../model/usuario");
//Ruta
router.post("/", async (req, res) => {
    let usuario = await Usuario.findOne({
        correo: req.body.correo
    })
    //se encuentra correo en BD
    if (usuario) return res.status(400).send("El correo ya está registrado");

    //Si el correo aun no ecxiste en la BD
    usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        pass: req.body.pass,
    })
    //Guardar usuario que se va a crear con el JWT
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({
        jwtToken
    });
})
//Export
module.exports = router;