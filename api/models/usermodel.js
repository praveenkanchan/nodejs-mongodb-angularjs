var mongoose = require('mongoose');

var Usermodel = new mongoose.Schema({
    name        : {type: String, required: false},
    instrument  : {type: String, required: true}
});

module.exports = mongoose.model('Usermodel', Usermodel);