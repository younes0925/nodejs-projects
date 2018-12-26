// imports 
var express = require('express');
var bodyParser = require('body-parser')
var apiRouter = require('./apiRouter').router;
//init server 
var server = express();


// configuration of BodyParser 
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

//root Configuration
server.get('/',function(req, res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>hello from my server!.</h1>');
    res.end();

})


server.use('/api/', apiRouter);

//launch server
server.listen(8080 , function(){
    console.log('server listening on 0.0.0.0 port 8080 ')
})