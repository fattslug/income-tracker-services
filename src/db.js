const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');

mongoose.connect('mongodb://localhost:27017/income-tracker', (err) => {
  if (err) {
    console.log(chalk.black.bgRed('Error connecting to database: '), err);
  } else {
    console.log(chalk.green('Successfully connected to MongoDB'));
  }
});