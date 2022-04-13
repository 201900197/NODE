const luhnApi = require('./luhn');
const luhnApi2 = require('./luhn2');

function controllers(app){
    luhnApi(app);
    luhnApi2(app);
} 

module.exports = controllers;