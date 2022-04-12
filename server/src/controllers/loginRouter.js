const express = require('express');
const connection = require('../config/connectDB');
const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  let query = `select * from users`;

  connection.query(query, (err, result) => {
    if (err) return res.status(400).json({ success: false, message: 'connection fail' });

    const user = result.find(resultItem => username === resultItem.username && password === resultItem.password);

    if (!user) {
      return res.status(200).json({ success: true, message: 'Sai tên tài khoản hoặc mật khẩu' });
    } else {
      return res.status(200).json({
        success: true,
        message: 'Đăng nhập thành công',
        user: { ...user, password: '**************' },
      });
    }
  });
});

module.exports = router;
