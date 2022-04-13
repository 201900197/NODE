const { isConstructorDeclaration } = require('typescript');
const MongoLib = require('../lib/mongo');

class LuhnService {

    constructor() {
        this.collection = 'appweb';
        this.mongoDB = new MongoLib();
    }
async createLuhn(n) {
    const luhnCreated = await this.mongoDB.createLuhn(this.collection, n); 
    return luhnCreated; 
}

async getLuhn(n) {
    const luhn = await this.mongoDB.getLuhn(this.collection, n); 
    console.log('luhn from serice', luhn);
    return luhn || {}; 
}

async updateLuhn(data) {
    const luhnUpdate = await this.mongoDB.updateLuhn(this.collection, data.id, data.data); 
    console.log('luhn from serice', luhnUpdate);
    return luhnUpdate || {}; 
}

async deleteLuhn(id) {
    const luhnDeleted = await this.mongoDB.deleteLuhn(this.collection, id); 
    console.log('luhn deleted', luhnDeleted);
    return luhnDeleted || {}; 
}

}

module.exports =LuhnService;
