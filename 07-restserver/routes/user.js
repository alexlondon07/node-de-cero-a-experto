const express = require('express');

const app = express();

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

module.exports = app;