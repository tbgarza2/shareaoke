const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { apiRouter } = require('./api/index');
const { spotifyRouter } = require('./auth-server/authorization_code/app');

const app = express();

const PORT = process.env.PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(parser.json());
app.use('/api', apiRouter);
app.use('/spotify', spotifyRouter);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});

module.exports.app = app;
