const pool = require('../../config/connectDB');

module.exports = {
  getAll: async (user_ID = '') => {
    const connection = await pool.getConnection();
    const conditionQuery = user_ID ? `and user_ID = ${user_ID}` : '';
    try {
      await connection.beginTransaction();
      const fetchAnimalResults = await connection.query(`select * from animals where visibility = 1 ${conditionQuery}`);
      const [result] = fetchAnimalResults;
      for (let i in result) {
        const fetchAnimalImageResults = await connection.query(
          `SELECT image_ID, CONCAT('${process.env.URL}', url) as url FROM images WHERE animal_ID = ?`,
          [result[i].animal_ID]
        );
        result[i]['images'] = fetchAnimalImageResults[0];
      }
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  get: async animal_ID => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const fetchAnimalResults = await connection.query(
        `select * from animals where animal_ID = '${animal_ID}' and visibility = 1`
      );
      const [result] = fetchAnimalResults;
      for (let i in result) {
        const fetchAnimalImageResults = await connection.query(
          `SELECT image_ID, CONCAT('${process.env.URL}', url) as url FROM images WHERE animal_ID = ?`,
          [result[i].animal_ID]
        );
        result[i]['images'] = fetchAnimalImageResults[0];
      }
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  add: async (animals, images) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const date = new Date().toLocaleString();
      console.log(date);
      const queryResult = await connection.query(
        `insert into animals values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0, ?, ?)`,
        [
          animals.sciencetificName,
          animals.vietnameseName,
          animals.localName,
          animals.regnum,
          animals.phylum,
          animals.animalClass,
          animals.ordo,
          animals.familia,
          animals.morphological,
          animals.ecological,
          animals.usageValue,
          animals.IUCN,
          animals.redBook,
          animals.goverment,
          animals.CITES,
          animals.allocation,
          animals.templateStatus,
          animals.habitat,
          date,
          animals.author,
          animals.rejectedReason,
          animals.user_ID,
        ]
      );
      const animal_ID = queryResult[0].insertId;
      for (let i in images) {
        await connection.query(`insert into images (url, animal_ID) values(?,?)`, [images[i].filename, animal_ID]);
      }
      const fetchResult = await connection.query(`SELECT * FROM animals WHERE animal_ID = ?`, [
        queryResult[0].insertId,
      ]);
      const animal_images = await connection.query(
        `SELECT image_ID, CONCAT('${process.env.URL}', url) as url FROM images WHERE animal_ID = ?`,
        [queryResult[0].insertId]
      );

      await connection.commit();
      const result = fetchResult[0][0];
      result['images'] = animal_images[0];
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
};
