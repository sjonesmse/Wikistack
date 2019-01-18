const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const { db } = require('./models');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/posts', require('./routes/posts'));
const layout = require('./views/layout');

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res) => {
  res.send(layout(''));
});



const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

if (!module.parent) app.listen(3000);
