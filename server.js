require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const cors = require('cors');
const passport = require('passport');
const chalk = require('chalk');

const app = express();
const db = require('./src/db');

if (process.env.USE_CORS) {
  const allowedOrigins = process.env.ALLOWED_ORIGINS;
  const corsOptions = {
    origin: '',
    optionsSuccessStatus: 200
  }

  app.use((req, res, next) => {
    console.log('Origin:', req.headers.origin);
    if (allowedOrigins.indexOf(req.headers.origin) > -1) {
      corsOptions.origin = req.headers.origin;
      next();
    } else {
      console.log(chalk.red('Access from invalid origin: '), req.headers.origin);
      res.sendStatus(403);
    }
  });
  app.use(cors(corsOptions));
}

app.use(bodyParser.json({
  limit: process.env.JSON_SIZE_LIMIT
}));
app.use(bodyParser.urlencoded({
  limit: process.env.JSON_SIZE_LIMIT,
  extended: true
}));

// Routes
const entryRoutes = require('./src/routes/entry.routes');
app.use('/entries', entryRoutes);

const authRoutes = require('./src/routes/auth.routes');
app.use('/auth', authRoutes);

let server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
  console.log(chalk.black.bgGreen(`==> Listening on port ${port}...`))
})