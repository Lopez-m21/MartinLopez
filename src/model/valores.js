const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    Nombre: String,
    Apellido: String,
    Edad: String,
    Genero: String
}); 
module.exports =mongoose.model('VicMusic', Valor);