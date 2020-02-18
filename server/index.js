const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { apiRouter } = require('./api/index');

const app = express();

const PORT = 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(parser.json());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});
