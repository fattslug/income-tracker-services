'use strict';

const express = require('express');
const router = new express.Router();
const passport = require('passport');
const chalk = require('chalk');

const ENTRY = require('../controllers/entry.controller');

router.post('/', passport.authenticate('bearer', { session: true }), ENTRY.addEntry);
router.get('/', passport.authenticate('bearer', { session: true }), ENTRY.getAllEntries);
router.get('/:entryID', passport.authenticate('bearer', { session: true }), ENTRY.getEntryByID);
router.put('/:entryID', passport.authenticate('bearer', { session: true }), ENTRY.updateEntryByID);

module.exports = router;