const mongoose = require('mongoose');

const coronaSchema = new mongoose.Schema({
    global: Object,
    vietnam: Object
});
var Corona = mongoose.model('coronas', coronaSchema);
module.exports = Corona;
