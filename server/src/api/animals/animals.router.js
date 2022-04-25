const router = require('express').Router();
const { getAll, get, add } = require('./animals.controller');
const multer = require('multer');
const path = require('path');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
}).array('images');

router.get('/get', getAll);
router.get('/get/:animal_ID', get);
router.post('/add', upload, add);

module.exports = router;
