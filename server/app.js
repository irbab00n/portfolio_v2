const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const _public = path.join(__dirname, '../client/public');

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(`${_public}/index.html`);
});

module.exports = app;