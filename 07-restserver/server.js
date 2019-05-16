require('./config/config');

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()
const port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/user', function (req, res) {

    let body = req.body;
    if( body.name === undefined ){
        res.status(400).json({
            ok: false,
            message: 'The name field is required'
        })
    }else{
        res.json({
            body
        })
    }
});


mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true}, (err, res)=>{
    if( err ) throw err;

    console.log('DataBase Online');
});

app.listen(process.env.PORT, () => {
    console.log('Listen to port', process.env.PORT)
})