// Modulo de node
const express = require("express");
const router = express.Router();

// Modulos internos
const { Venta } = require("../model/venta");
const { Usuario } = require("../model/usuario");
const auth = require("../middleware/auth");


// Api-CRUD
router.post("/nueva", auth, async (req, res) => {
    // Obtenemos el id del usuario autenticado
    const usuario = await Usuario.findById(req.usuario._id);
    // Si el usario no existe
    if (!usuario) return res.status(400).send("El usuario no existe");

    // Si el usuario existe creamos un actividad para ese usuario
    const venta = new Venta({
            valor: req.body.valor,
            fecha: req.body.fecha,
            token: req.body.token,
            referencia: req.body.referencia,
    });
    // Enviamos resultado
    const result = await venta.save();
    res.status(200).send(result);
});
module.exports = router;
