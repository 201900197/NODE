const express = require('express');
const ComprasService = require('../services/compras');

function comprasApi(app) {
    const router = express.Router();
    app.use("/compras", router);
    const ComprasService = new ComprasService();

    router.get("/", async function(req, res, next){
        const { body: product } = req;
        console.log('getluhn', product);
        try {
          const product1 = await luhnService.getProduct(product.product);  
          console.log('product1', product);
          res.status(200).json({
              product: product1,
              message: 'product requested'
          });
        } catch (err) {
            next(err);
        }
    });

    router.put("/", async function(req, res, next){
        const { body: number } = req;
        try {
            const isValid = await isValidNumberCreditCard(number);
            if(isValid) {
                const productCreated = await luhnService.createProduct(number);
          res.status(200).json({
              data: productCreated,
              message: 'product created succesgully' 
          });
        } else{
            res.status(200).json({
                message: 'the credit card is invalid' 
            });
        } 
    } catch (err) {
            next(err);
        }
    });

    router.post("/", async function(req, res, next){
        const { body: number } = req;
        console.log('req', number);
        try {
            if(isValid) {
                const productUpdate = await luhnService.updateProduct(number);
          res.status(200).json({
              data: productUpdate,
              message: 'Product succesgully updated' 
          });
        } else{
            res.status(200).json({
                message: 'the credit card is invalid' 
            });
        } 
        } catch (err) {
            next(err);
        }
    });

    router.delete("/", async function(req, res, next){
        const { body: product } = req;
        console.log('product to delete', luhn);
        try {
          const productDeleted = await luhnService.deleteProduct(luhn.id);
          res.status(200).json({
              product: productDeleted,
              message: 'luhn succesfuly deleted'
          });
        } catch (err) {
            next(err);
        }
    });


    function split_numbers(n) {
        console.log('split_numbers', n);
        return new Promise((resolve) => {
            if (n.number) {
                resolve((n.number + '').split('').map((i) => { return Number(i); }));
            } else {
                resolve((n + '').split('').map((i) => { return Number(i); }));
            }
        });
    }

    async function luhn(n) {
        console.log('product', n);
        const number_splitted = await split_numbers(n);
        console.log('number_splitted', number_splitted);
        const number_reversed = number_splitted.reverse();

        let result;
        let results = [];

        for (let i=0; i<number_reversed.length; i++) {
            const even_number = i%2;
            if (even_number == 0) {
                result = number_reversed[i] * 1;
                results.push(result);
            } else {
                result = number_reversed[i] * 2;
                if (result > 9) {
                    result = await isGraterThanNine(result);
                }
                results.push(result);
            }

        }
        return results;
    }

    async function isGraterThanNine(result) {
        const value = await split_numbers(result);
        console.log('value', value);
        let plus = 0;
        for (let i=0; i<value.length; i++) {
            plus = plus + parseInt(value[i].toString(),10);
        }
        return plus;
    }

    async function isValidNumberCreditCard(n) {
        console.log('isValidNumberCreditCard', n);
        const results = await product(n);
        let isValid = false;
        let plus = 0;
        results.forEach(element => {
            plus = plus + element;
        });
        base = plus%10;
        if (base == 0) {
            isValid = true;
        } else {
            isValid = false;
        }
        return isValid;
    }

}
module.exports = comprasApi; 