const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParse.urlencoded({ extended: false }));