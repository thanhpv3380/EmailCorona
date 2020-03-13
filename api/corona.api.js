const request = require('request');
const fs = require('fs');
const sendEmail = require('../sendEmail/sendEmail');
const checkObj = require('../utils/checkObj');
const Corona = require('../models/corona.model');
const ApiCorona = () => {
    request('https://code.junookyo.xyz/api/ncov-moh/data.json?fbclid=IwAR2b9wABp9I_fiWbIgf7nF3WRHqv9KozHKvK6fRwFzntjbv2aERkeg1LKZ4', async (error, response, body) => {
        if (error !== null) {
            console.error('error:', error); // Print the error if one occurred
        } else {
            let dataCurrent = JSON.parse(body);
            let db = {
                global: dataCurrent.data.global,
                vietnam: dataCurrent.data.vietnam
            };
            
            //let rs = fs.readFileSync('./data.json');
            //let rs = await Corona.create(db);
            let dataOld = await Corona.findOne({_id: '5e6ba1543095720fc89047a0'});
            if (!checkObj(dataOld, db)) {  
                console.log('fds');              
                const updateDate = await Corona.update({_id: '5e6ba1543095720fc89047a0'}, {global: db.global, vietnam: db.vietnam });
                sendEmail(db);
            }
        }
    });
}
module.exports = ApiCorona;