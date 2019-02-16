const express = require('express');
const bodyParser = require('body-parser');


let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());