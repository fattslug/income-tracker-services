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
  console.log(chalk.blue('/entries/'));
  console.log(chalk.black.bgBlue('Adding Entry...'));
  
  const entry = new Entry(req.body.entry);
  console.log(entry);

  try {
    entry.save();
    res.status(200).send({
      success: true,
      body: entry
    });
  } catch (e) {
    console.log(chalk.red(e));
    res.status(500).send({
      success: false,
      message: 'Failed to save entry'
    })
  }
}