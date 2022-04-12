import bodyParser from 'body-parser';

const express = require('express');
const loginRouter = require('./src/controllers/loginRouter');
const animalsRouter = require('./src/controllers/animalsRouter');
const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', loginRouter);
app.use('/api/animals', animalsRouter);
app.use('/api/animals', animalsRouter);
app.use('/api/animals', animalsRouter);
app.use('/api/animals', animalsRouter);

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log('Nodejs running at the port: ' + port);
});
