    // Modulo de node
    const express = require("express");
    const router = express.Router();

    // Modulos internos
    const { Serviciovendido }  = require("../model/serviciovendido");
    const { Usuario } = require("../model/usuario");
    const { Servicio }  = require("../model/servicio");
    const { Venta }  = require("../model/venta");
    const auth = require("../middleware/auth");

    // Api-CRUD
    router.post("/nuevo", auth, async (req, res) => {
        // Obtenemos el id del usuario autenticado
        const usuario = await Usuario.findById(req.usuario._id);
        const servicio = await Servicio.findById(req.body.idServicio); 
        const venta = await Venta.findById(req.body.idVenta); 
        console.log(servicio)
        // Si el usario no existe
        if (!usuario) return res.status(400).send("El usuario no existe");
            // Si el servicio no existe
        if (!servicio) return res.status(400).send("El servicio no existe");
        // Si el usuario existe creamos un actividad para ese usuario
        const serviciovendido = new Serviciovendido({
                idUsuario: usuario._id,  //Filtro comprador
                idServicio: servicio._id,//Filtro vendedor idUsuario dentro de la tabla servicio
                idVenta: venta._id,
                estado: req.body.estado,
                fechaInicio: Date.parse(req.body.fechaInicio),
                fechaFin: Date.parse(req.body.fechaFin),
                fechaEstimada: Date.parse(req.body.fechaEstimada),      
        });
        // Enviamos resultado
        const result = await serviciovendido.save();
        res.status(200).send(result);
    });
    module.exports = router;

