const pool = require('../../config/connectDB');

module.exports = {
  login: async (userName, password) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const [result] = await connection.query('select * from users');
      const user = result.find(resultItem => userName === resultItem.userName && password === resultItem.password);

      if (!user) {
        return { message: 'Sai tên tài khoản hoặc mật khẩu' };
      }

      user.password = '**************';

      await connection.commit();
      return user;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
};
