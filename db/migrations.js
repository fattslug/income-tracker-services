const mongoose = require('mongoose');
const chalk = require('chalk');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, 'production.env') });

const Entry = require('../src/schema/entry.schema');

async function updateEntries(req, res) {
  console.log(chalk.black.bgBlue('Updating Entries...'));

  try {
    return Entry.updateMany({
      $or: [
        { AmountPaid: { $gt: 0 } },
        { PaymentType: { $exists: true } }
      ]
    }, {
      $set: {
        "PaymentMethods": [{
          "AmountPaid": "$AmountPaid",
          "PaymentType": "$PaymentType"
        }]
      },
      $unset: ["AmountPaid", "PaymentType", "Tip"]
    }).exec();
  } catch (e) {
    console.log('Error: ', e);
  }
}

console.log('Mongo URL:', process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL, async (err) => {
  if (err) {
    console.log(chalk.black.bgRed('Error connecting to database: '), err);
    return process.exit(22);
  } else {
    console.log(chalk.green('Successfully connected to MongoDB'));
    await updateEntries();
    console.log('Finished!');
    return process.exit(0);
  }
});
