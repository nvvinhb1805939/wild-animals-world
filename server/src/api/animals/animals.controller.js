const { get, add, update, getAnimalById, remove} = require('./animals.services');

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
      console.log(animals)
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
  getAnimalById: async (req, res) => {
    try {
      const animal_ID = req.query;
      let id = animal_ID.animail_ID
      console.log(id)
      const result = await getAnimalById(id);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        message: 'Internal Server Error',
        e,
      });
    }
  },
  update: async (req, res) => {
    try {
      const animals = req.body;
      const images = req.files;
      const result = await update(animals, images)

      return res.status(201).json(result);

    } catch (e) {
      return res.status(500).json({
        message: 'Internal Server Error',
        e,
      });
    }
  },
  remove: async (req, res) => {
    try {
      const {animal_ID} = req.body

      const result = await remove(animal_ID);
      return res.status(201).json(result);
    } catch (e) {
      return res.status(500).json({
        message: 'Internal Server Erorr',
        e,
      });
    }
  },
};

