// Modulo de node
const express = require("express");
const router = express.Router();
const app = express();

// Modulos internos
const {Servicio} = require("../model/servicio");
const {Usuario} = require("../model/usuario");
const auth = require("../middleware/auth");

// Api-CRUD
router.post("/", auth, async (req, res) => {
    // Obtenemos el id del usuario autenticado
    const usuario = await Usuario.findById(req.usuario._id); 
    // Si el usario no existe
    if (!usuario) return res.status(400).send("El usuario no existe");
    // Si el usuario existe creamos un actividad para ese usuario
    const servicio = new Servicio({
        idUsuario: usuario._id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tiempoDeEntrega:req.body.tiempoDeEntrega,
        tipoDeServicio:req.body.tipoDeServicio,
        precio: req.body.precio,   
    });
    // Enviamos resultado
    const result = await servicio.save();
    res.status(200).send(result);
});
/*
// respond with "hello world" when a GET request is made to the homepage
router.get('/lista',auth,  async (req, res) =>{

    res.send('Lista de servicios');
 // Buscamos el usuario
 const usuario = await Usuario.findById(req.usuario._id);
 // si no existe el usuario
 if (!usuario) return res.status(400).send("El usuario no existe en BD");
 // Si el usuario existe
 const servicio = await Servicio.find(); // trae el id usuario con todas las actividades y lo guarda en tablero
 res.send(servicio)
  });
  */
 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";
 
 MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   dbo.collection("customers").find({}).toArray(function(err, result) {
     if (err) throw err;
     console.log(result);
     db.close();
   });
 });

//
module.exports = router;

