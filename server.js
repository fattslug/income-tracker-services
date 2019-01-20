const express = require('express');
const port = 3001;
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const cors = require('cors');
const chalk = require('chalk');

const app = express();
const db = require('./src/db');

const allowedOrigins = ['http://localhost:3000'];
const corsOptions = {
  origin: '',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use((req, res, next) => {
  if (allowedOrigins.indexOf(req.headers.origin) > -1) {
    corsOptions.origin = req.headers.origin;
    next();
  } else {
    res.sendStatus(403);
  }
});
app.use(cors(corsOptions));

app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

// Routes
const entryRoutes = require('./src/routes/entry.routes');
app.use('/entries', entryRoutes);

let server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
  console.log(chalk.black.bgGreen(`==> Listening on port ${port}...`))
})