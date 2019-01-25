const User = require('../schema/user.schema');
const passport = require('passport');
require('../../config/passport');

const chalk = require('chalk');

exports.googleAuth = googleAuth;
exports.setToken = setToken;

/**
 * Authenticates using Google's OAuth Strategy
 */
function googleAuth() {
  console.log(chalk.blue('/auth/google'));
  console.log(chalk.black.bgBlue('Logging in with Google...'));

  console.log();

  return passport.authenticate("google", { scope: ["profile", "email"] });
}

/**
 * Sets user token
 * @param {object} req Request object
 * @param {object} res Response object
 * @returns {object} HTTP response
 */
function setToken(req, res) {
  var token = req.user.token;
  res.redirect("http://localhost:3000?token=" + token);
}