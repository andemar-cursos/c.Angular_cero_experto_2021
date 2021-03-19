const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const crearUsuario = async(req, res = response) => {

    const { email, name, password } = req.body;


    try {
        // Verificar el email
        let usuario = await Usuario.findOne({ email });

        if(usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            })
        }

        // Crear usuario con el modelo
        usuario = new Usuario(req.body);

    
        // Hashear la contrasena
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
    
        
        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);
        
    
        // Crear usuario de DB
        await usuario.save();

        // Generar respuesta exitosa

        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: `Por favor hable con el administrador`
        });
    }

}

const loginUsuario = (req, res = response) => {

    const {email, password} = req.body;

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