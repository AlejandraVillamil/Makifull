//Módulos internos
const mongoose = require("mongoose")

//Esquema
const esquemaServicio = new mongoose.Schema({
    idUsuario: String,
    nombre: String,
    descripcion: String,
    tiempoDeEntrega:String,
    tipoDeServicio:String,
    precio: Number,
    // sticker: String,
    // estado: String,
    fecha: {
        type: Date,
        default: Date.now,
    },
});

const Servicio = mongoose.model("servicio", esquemaServicio);
module.exports.Servicio = Servicio;
module.exports.esquemaServicio = esquemaServicio;