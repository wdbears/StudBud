const express = require("express");
const bodyParser = require("body-parser");

//setup express
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
