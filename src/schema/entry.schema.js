'use strict';

const mongoose = require('mongoose');

let entrySchema = new mongoose.Schema({
  ClientName: String,
  PaymentType: String,
  AmountPaid: Number,
  ServicesRendered: Array,
  DateAdded: Date
}, {
  collection: 'entries'
});

module.exports = mongoose.model('Entry', entrySchema);