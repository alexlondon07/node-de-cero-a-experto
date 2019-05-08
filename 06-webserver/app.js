const http = require('http');

http.createServer( (req, res) =>{

    res.writeHead( 200, { 'Content-Type': 'application/json'});
    let response = {
        name: "Alexander",
        age: 27,
        url: req.url
    }
    res.write( JSON.stringify( response ));
    res.end();
})
.listen(8181);

console.log('Listen to port 8181');