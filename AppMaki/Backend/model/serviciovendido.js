//Módulos internos
const mongoose = require("mongoose")

//Esquema
const esquemaServiciovendido = new mongoose.Schema({
    idUsuario: String,
    idServicio:String,
    idVenta:String,
    estado: String,
    fechaInicio:  {
        type: Date,
        default: Date.now,
    },
    fechaFin:Date,
    fechaEstimada:Date,
    fecha: {
        type: Date,
        default: Date.now,
    },
});

const Serviciovendido = mongoose.model("serviciovendido", esquemaServiciovendido);
module.exports.Serviciovendido = Serviciovendido;
