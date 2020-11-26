//modulos node
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//modulos internos
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const servicio = require("./routes/servicio");
const serviciovendido = require("./routes/serviciovendido");
const venta = require("./routes/venta");

//App
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);
app.use("/api/servicio/", servicio);
app.use("/api/serviciovendido/", serviciovendido);
app.use("/api/venta/", venta);

//puerto para ejecutar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Ejecutando en puerto " + port));
//conexion con mongo
mongoose
  .connect("mongodb://localhost/AppMaky", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conexión a MongoDB: Online"))
  .catch((error) => console.log("conexión a MongoDB: fallida"));
