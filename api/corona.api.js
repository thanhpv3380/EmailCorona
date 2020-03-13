const request = require('request');
const fs = require('fs');
const sendEmail = require('../sendEmail/sendEmail');
const checkObj = require('../utils/checkObj');
const ApiCorona = () => {
    request('https://code.junookyo.xyz/api/ncov-moh/data.json?fbclid=IwAR2b9wABp9I_fiWbIgf7nF3WRHqv9KozHKvK6fRwFzntjbv2aERkeg1LKZ4', function (error, response, body) {
        if (error !== null) {
            console.error('error:', error); // Print the error if one occurred
        } else {
            let dataCurrent = JSON.parse(body);

            let rs = fs.readFileSync('./data.json');
            //console.log(rs);

            let result = JSON.parse(rs);
            console.log(checkObj(result, dataCurrent));
            if (!checkObj(result, dataCurrent)) {
                console.log('fds');
                rs = fs.writeFileSync('./data.json', JSON.stringify(dataCurrent));
                sendEmail(dataCurrent.data);
            }
        }
    });
}
module.exports = ApiCorona;