var http = require('http');
  const express = require('express');
  const app = express();
  const { config } = require('./config/index');
  const controllers = require('./routes/index.js');
const { appendFileSync } = require('fs');

  app.use(express.json());
  controllers(app);

  app.listen(config.port, function(){
      console.log(`Listening http://localhost:${config.port}`);
  });

   

//http.createServer(function (req, res){
//  res.writeHead(200, {'Content-Type':'text/plain'});
//res.end('Hola Mundo');
//}).listen(8080);
