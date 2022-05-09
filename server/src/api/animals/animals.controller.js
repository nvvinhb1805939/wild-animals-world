const { getAll, get, add } = require('./animals.services');

module.exports = {
  getAll: async (req, res) => {
    try {
      const user_ID = req.query.user_ID;
      const result = await getAll(user_ID);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        message: 'Internal Server Error',
        e,
      });
    }
  },
  get: async (req, res) => {
    try {
      const animal_ID = req.params.animal_ID;
      const result = await get(animal_ID);
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
