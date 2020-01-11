'use strict';

const mongoose = require('mongoose');

let entrySchema = new mongoose.Schema({
  ClientName: String,
  ServicesRendered: Array,
  DateAdded: Date,
  Deleted: Boolean,
  PaymentMethods: [{
    PaymentType: String,
    AmountPaid: Number
  }],

  PaymentType: String, // Legacy
  AmountPaid: Number, // Legacy
}, {
  collection: 'entries'
});

module.exports = mongoose.model('Entry', entrySchema);