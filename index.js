const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
const apiCorona = require('./api/corona.api');

const task = cron.schedule('*/5 * * * *', () => {
    apiCorona();
});
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(PORT, () => console.log('start '+PORT));
