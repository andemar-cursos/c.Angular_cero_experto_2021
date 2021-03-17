const express = require('express');


// Crear el servidor/app de express
const app = express();

// GET
app.get('/', ( req, res) => {
    console.log(`Peticion en el /`)
    res.status(500).json({
        ok: true,
        msg: 'todo Ok'
    })
})

app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
} )