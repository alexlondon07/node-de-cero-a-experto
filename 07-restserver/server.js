require('./config/config');

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Routes
app.use(require('./routes/user'));

//Conexion
mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true}, (err, res)=>{
    if( err ) throw err;

    console.log('DataBase Online');
});

app.listen(process.env.PORT, () => {
    console.log('Listen to port', process.env.PORT)
})