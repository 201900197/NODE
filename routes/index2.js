const comprasApi = require ('./compras');

function controllers(app){
    comprasApi(app);
    
} 
module.exports = controllers;