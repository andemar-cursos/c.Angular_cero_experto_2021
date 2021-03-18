const { response } = require('express');


const crearUsuario = (req, res = response) => {

    console.log(req.body);

    return res.json({
        ok: true,
        msg: `Crear usuario /new`
    });
}

const loginUsuario = (req, res) => {

    const {email, password} = req.body;
    console.log(`${email} - ${password}`);

    return res.json({
        ok: true,
        msg: `Login de usuario /`
    });
};


const revalidarToken =  (req, res) => {

    return res.json({
        ok: true,
        msg: `Renew /renew`
    });
};



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}