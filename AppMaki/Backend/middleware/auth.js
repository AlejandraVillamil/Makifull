// modulo de node
const jwt = require("jsonwebtoken");

// Creamos validacion para identificar el usuario loguado y todos sus procesos
function auth(req, res, next){
    let jwtToken = req.header("Authorization"); 
    jwtToken = jwtToken.split(" ")[1]

    // Si el token no existe
    if(!jwtToken) return res.status(405).send("No hay token para un acceso");
    
    // si el token existe
    try{
        const payload = jwt.verify(jwtToken, "maky");
        req.usuario = payload;
        next();
    }catch(error){
        res.status(405).send("Token sin autorización")
    }
} 

// Exports 
module.exports = auth;
