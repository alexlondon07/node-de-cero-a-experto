const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.post('/user', function (req, res) {
    let body = req.body;
    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync( body.password, 10),
        role: body.role
    });

    user.save( (err, userDB) =>{
        if( err ){
            res.status(400).json({
                ok:false,
                err
            })
        }

        res.json({
            ok: true,
            user: userDB
        })
    });
});

module.exports = app;