const Entry = require('../schema/entry.schema');
const chalk = require('chalk');

exports.addEntry = addEntry;
exports.getAllEntries = getAllEntries;

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
  entry.DateAdded = new Date();

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

/**
 * Gets all entries from database
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {object} HTTP response
 */
function getAllEntries(req, res) {
  console.log(chalk.blue('/entries/'));
  console.log(chalk.black.bgBlue('Getting All Entries...'));

  try {
    Entry.find({}).exec((err, entries) => {
      if (err) { throw(err); }
      console.log('Entries Found:', entries.length);
      res.status(200).send({
        success: true,
        body: {
          totalAmount: entries.reduce((acc, curr) => {
            console.log('----------');
            console.log('Accumulator:', acc);
            console.log('Current:', curr);
            console.log(acc + curr.AmountPaid);
            return acc + curr.AmountPaid;
          }, 0),
          entries: entries
        }
      })
    })
  } catch (e) {
    console.log(chalk.red(e));
    res.status(500).send({
      success: false,
      message: 'Failed to get all entries'
    })
  }
}