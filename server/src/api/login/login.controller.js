const { login } = require('./login.services');

module.exports = {
  login: async (req, res) => {
    try {
      const { userName, password } = req.body;
      const result = await login(userName, password);
      return res.status(201).json(result);
    } catch (e) {
      return res.status(500).json({
        message: 'Internal Server Error',
        e,
      });
    }
  },
};
