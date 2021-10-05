const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const indexRoutes = require('./routes/index.js');
const mongoose = require ('mongoose');
// escuchar al servidor
app.set('port',process.env.PORT || 3000);

//apuntar a las vistas
app.set('views', path.join(__dirname, 'views'));

//se configura el motor de vistas
app.set('view engine', 'ejs');
//conexion BD
mongoose.connect('mongodb+srv://ClusterMartin:t.3n%5c%$p8Emah@cluster0.rndga.mongodb.net/VicMusic?retryWrites=true&w=majority')
.then(bd => console.log('BD conectada')).catch(err => console.log('err'));

//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),() =>{
    console.log('Servidor en el puerto ', app.get('port'))
});