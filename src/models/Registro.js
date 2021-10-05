const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Registrar = new Schema({
    Nombre: String,
    Apellido: String,
    Edad: Int32Array,
    Genero: String
});
module.exports = mongoose.model('Registro', Registrar);
