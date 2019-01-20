'use strict';

const express = require('express');
const router = new express.Router();

const ENTRY = require('../controllers/entry.controller');

router.get('/', ENTRY.addEntry);

module.exports = router;