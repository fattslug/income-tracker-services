const User = require('../schema/user.schema');
const chalk = require('chalk');

exports.setToken = setToken;

/**
 * Sets user token
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {object} HTTP response
 */
function setToken(req, res) {
  var token = req.user.token;
  console.log('Redirecting to', process.env.APP_URL);
  res.redirect(`${process.env.APP_URL}?token=${token}`);
}