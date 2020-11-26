const mongoose = require("mongoose");

const esquemaVenta = new mongoose.Schema({
    valor: Number,
    fecha:  {
        type: Date,
        default: Date.now,
    },
    token: Number,
    referencia: String,
});

const Venta = mongoose.model("venta", esquemaVenta);
module.exports.Venta = Venta;
