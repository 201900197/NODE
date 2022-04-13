const express = require('express');

function luhnApi2(app) {
    const router = express.Router();
    app.use("/luhn2", router);

    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./routes/index.html', 'UTF-8').pipe(res);
    }else if(req.method == 'POST'){
        
    
    router.get("/", async function(req, res, next){
        try {
          res.status(200).json({
              isValid: isValidNumberCreditCard()
          });
        } catch (error) {
            next(err);
        }
    });
    }
    function split_numbers(n) {
        return (n + '').split('').map((i) => { return Number(i); });
    }

    function luhn2() {
        const numberCreditCard = nombre;
        const number_splitted = split_numbers(numberCreditCard);
        const number_reversed = number_splitted.reverse();

        let result;
        let results = [];

        for (let i=0; i<number_reversed.length; i++) {
            const even_number = i%2;
            if (even_number == 0) {
                result = number_reversed[i] * 1;
                if (result > 9) {
                    result = isGraterThanNine(result);
                }
                results.push(result);
            } else {
                result = number_reversed[i] * 2;
                if (result > 9) {
                    result = isGraterThanNine(result);
                }
                results.push(result); 
            }

        }
        return results;
    }

    function isGraterThanNine(result) {
        const value = split_numbers(result);
        let plus = 0;
        for (let i=0; i<value.length; i++) {
            plus = plus + parseInt(value[i].toString(),10);
        }
        return plus;
    }

    function isValidNumberCreditCard() {
        const results = luhn2();
        console.log('results', results);
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
    req.on('end', () =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
        <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Resultados</title>
</head>
<body>
<h1>Datos del formulario recibidos</h1>
<p>${isValidNumberCreditCard}</p>
</body>
</html>
        `);

}
    
}
module.exports = luhnApi2;
