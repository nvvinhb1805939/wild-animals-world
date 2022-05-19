const router = require('express').Router();
const { login, getAll } = require('./login.controller');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.post('/', login);

module.exports = router;
