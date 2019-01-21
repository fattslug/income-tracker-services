'use strict';

const express = require('express');
const router = new express.Router();
const chalk = require('chalk');

const ENTRY = require('../controllers/entry.controller');

router.post('/', ENTRY.addEntry);

module.exports = router;