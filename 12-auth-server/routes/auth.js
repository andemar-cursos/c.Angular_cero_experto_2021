const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Crear un nuevo usuario
router.post('/new', [
    check('name', 'El name debe ser valido').not().isEmpty(),
    check('email', 'El email debe ser valido').isEmail(),
    check('password', 'El password debe ser valido').isLength({min: 6}),
    validarCampos
] ,crearUsuario);


// Login usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6}),
    validarCampos
] ,loginUsuario);


// Validar y revalidar token
router.get('/renew', revalidarToken);







module.exports = router;