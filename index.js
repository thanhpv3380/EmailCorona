const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');

// config env
require('dotenv').config();

const app = express();

// create static
app.use(express.static('public'));

// Create PORT
const PORT = process.env.PORT || 3000;

// link api
const apiCorona = require('./api/corona.api');

// connection db
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }).then(db => console.log('DB is Connected'));



app.get('/', (req, res) => {
    // const task = cron.schedule('*/1 * * * *', () => {
    //     apiCorona();
    // });
    apiCorona();
    res.send('hello');
});
app.listen(PORT, () => console.log('start '+PORT));
