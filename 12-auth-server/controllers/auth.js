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
        const token = await generarJWT(usuario.id, usuario.name, usuario.email);
        
        
        // Crear usuario de DB
        await usuario.save();
        
        // Generar respuesta exitosa
        
        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name,
            email,
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

const loginUsuario = async(req, res = response) => {
    
    const {email, password} = req.body;
    
    try {
        
        const usuario = await Usuario.findOne({email}); 
        
        if(!usuario) {
            return res.status(500).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }
        
        // Confirmar match pass
        const validPassword = bcrypt.compareSync(password, usuario.password);
        
        if(!validPassword) {
            return res.status(500).json({
                ok: false,
                msg: 'El pass no es valido'
            })
        }
        
        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name, usuario.email);
        
        // Respuesta del servicio
        return res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            email: usuario.email,
            token
        })
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};


const revalidarToken =  async(req, res) => {
    
    const {uid, name, email} = req;
    
    // Generar JWT
    const token = await generarJWT(uid, name, email);
    
    
    return res.json({
        ok: true,
        uid,
        name,
        email,
        token
    });
};



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}