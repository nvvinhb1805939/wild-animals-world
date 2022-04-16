const { get, add } = require('./animals.services');

module.exports = {
  get: async (req, res) => {
    try {
      const result = await get();
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        message: 'Internal Server Error',
        e,
      });
    }
  },
  add: async (req, res) => {
    try {
      const animals = req.body;
      const images = req.files;

      const result = await add(animals, images);
      return res.status(201).json(result);
    } catch (e) {
      return res.status(500).json({
        message: 'Internal Server Error',
        e,
      });
    }
  },
};
