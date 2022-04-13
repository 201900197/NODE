class ComprasService{

    constructor() {
        this.collection = 'compras';
        this.mongoDB = new MongoLib();
    }
async createProduct(n) {
    const productCreated = await this.mongoDB.createProduct(this.collection, n); 
    return productCreated; 
}

async getProduct(n) {
    const product = await this.mongoDB.getProduct(this.collection, n); 
    console.log('luhn from serice', product);
    return product || {}; 
}

async updateProduct(data) {
    const productUpdate = await this.mongoDB.updateProduct(this.collection, data.id, data.data); 
    console.log('luhn from serice', productUpdate);
    return prductUpdate || {}; 
}
 
async deleteProduct(id) {
    const productDeleted = await this.mongoDB.deleteProduct(this.collection, id); 
    console.log('luhn deleted', productDeleted);
    return productDeleted || {}; 
}

}

module.exports = ComprasService;