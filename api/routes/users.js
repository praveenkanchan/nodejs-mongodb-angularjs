require("../models/usermodel");

var express = require('express');
var mongoose = require('mongoose');
var userModel = mongoose.model('Usermodel');

module.exports = (function() {
    'use strict';
    var api = express.Router();

    // Import user details
    api.get('/import', function(req, res){
        var list = [
            { "name": "Bismillah Khan", "instrument": "Shehnai" },
            { "name": "Hariprasad Chaurasia", "instrument": "Bansuri" },
            { "name": "Cowtown Guitars",  "instrument": "guitar" },
            { "name": "virtuoso", "instrument": "piano" }
        ];

        userModel.create(list, function (err) {
            if (err) return console.log(err);
            res.json({'status':200});
        });
    });

    // Get user list
    api.get('/getall', function(req, res){
        userModel.find({},function(err, results) {
            if (err) return console.log(err);
            res.json(results);
        });
    })

    // Add new user
    api.post('/add', function(req, res){
        var addData = new userModel(req.body);
        addData.save(function(err, results) {
            if (err) return console.log(err);
            var response = {
                message: 'add Record successfully',
                details: results,
                status: 200
            }
            res.json(response);
        });
    })

    // Update old user details
    api.post('/update/:id', function(req, res){
        userModel.findOneAndUpdate({_id:req.params.id},req.body,function(err, results) {
            if (err) return console.log(err);
            var response = {
                message: 'Record updated',
                status: 200
            }
            res.json(response);
        });
    })

    // Delete user details
    api.get('/delete/:id', function(req, res){
        var condition = { _id: req.params.id };
        userModel.findOneAndRemove(condition, function(err, results){
            if (err) return console.log(err);
            var response = {
                message: 'Record deleted',
                status: 200
            }
            res.json(response);
        });
    })
    
    return api;
})();