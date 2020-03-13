const nodemailer = require('nodemailer');
const sendEmail = (data) => {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: process.env.EMAIL_NAME,
            pass:  process.env.EMAIL_PASSWORD
        }
    });
    const sender = process.env.EMAIL_NAME;
    const topic = 'Tình hình Corona';
    //Sendgrid Data Requirements
    const msg = {
        to: 'thanhpv3380@gmail.com',
        from : sender,
        subject: topic,
        html: `	<h1>Stats Corona</h1>
		<h5>Global</h5>
		<ul> 
			<li>Cases: ${data.global.cases}</li>
			<li>Deaths: ${data.global.deaths}</li>
			<li>Recovered: ${data.global.recovered}</li>
		</ul>
		<h5>Việt Nam <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/23px-Flag_of_Vietnam.svg.png" style="width: 17px;"></h5>
		<ul> 
			<li>Cases: ${data.vietnam.cases}</li>
			<li>Deaths: ${data.vietnam.deaths}</li>
			<li>Recovered: ${data.vietnam.recovered}</li>
		</ul>`
    }
    transporter.sendMail(msg, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    console.log(msg);

}
module.exports = sendEmail;