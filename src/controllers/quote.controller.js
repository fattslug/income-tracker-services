const chalk = require("chalk");
const quotes = require("../data/love-quotes.json");

exports.getQuote = getQuote;

/**
 * Returns one love quote, rotating once per calendar day.
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {object} HTTP response
 */
function getQuote(req, res) {
  console.log("GET", chalk.blue("/quotes"));
  console.log(chalk.black.bgBlue("Getting Quote..."));

  if (!Array.isArray(quotes) || quotes.length === 0) {
    return res.status(500).send({
      success: false,
      message: "No quotes available",
    });
  }

  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const quote = quotes[dayIndex % quotes.length];

  return res.status(200).send({
    success: true,
    quote: quote.quote,
    author: quote.author,
    year: quote.year,
    source: quote.source,
    theme: quote.theme,
  });
}
