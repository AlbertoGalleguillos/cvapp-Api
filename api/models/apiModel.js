'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Company, Lapse, Role
var JobSchema = new Schema({
    company: {
        type: String,
        required: 'Kindly enter the name of the company'
    },
    lapse: {
        type: String,
        required: 'Kindly enter the lapse working in the company'
    },
    role: {
        type: String,
        required: 'Kindly enter the role in the company'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Jobs', JobSchema);