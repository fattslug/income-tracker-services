'use strict';

const mongoose = require('mongoose');

let entrySchema = new mongoose.Schema({
  ClientName: String,
  PaymentType: String,
  AmountPaid: Number,
  Tip: Number,
  ServicesRendered: Array,
  DateAdded: Date,
  Deleted: Boolean
}, {
  collection: 'entries'
});

module.exports = mongoose.model('Entry', entrySchema);