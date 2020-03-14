const twilio = require('twilio');

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);
const sendMsg = (data) => {
    const recipient = '+84386577672';
    // send message
    const body = `Global : (${data.global.cases}, ${data.global.deaths}, ${data.global.recovered}) - Vietnam: (${data.vietnam.cases}, ${data.vietnam.deaths}, ${data.vietnam.recovered})`;
    client.messages.create({
        body,
        to: recipient,
        from:'+12064660417'
    
    }).then((message) => {console.log(message.body)})
}
module.exports = sendMsg;
