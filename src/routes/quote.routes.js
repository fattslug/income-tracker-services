"use strict";

const express = require("express");
const router = new express.Router();

const QUOTE = require("../controllers/quote.controller");

router.get("/", QUOTE.getQuote);

module.exports = router;
