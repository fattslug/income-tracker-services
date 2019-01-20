const Entry = require('../schema/entry.schema');
const chalk = require('chalk');

exports.addEntry = addEntry;

/**
 * Adds a new entry to the database
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {object} HTTP response
 */
function addEntry(req, res) {
  console.log('Adding Entry!');
}