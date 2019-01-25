'use strict';

const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  Username: String,
  FirstName: String,
  LastName: String
}, {
  collection: 'users'
});

module.exports = mongoose.model('User', userSchema);