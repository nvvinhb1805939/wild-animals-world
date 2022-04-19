require('dotenv').config();
const express = require('express');
const app = express();
const animals = require('./src/api/animals/animals.router');
const login = require('./src/api/login/login.router');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/upload', express.static('upload/images'));
app.use('/api/login', login);
app.use('/api/animals', animals);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('server up and running on PORT :', port);
});

// jsajsdfj
//sdsfsfd
//3