const pool = require('../../config/connectDB');

module.exports = {
  get: async () => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const fetchAnimalResults = await connection.query('select * from animals');
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
      const queryResult = await connection.query(
        `insert into animals values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
          animals.postDate,
          animals.author,
        ]
      );
      const animal_ID = queryResult[0][0].insertId;
      for (let i in images) {
        await connection.query(`insert into images (url, animal_ID) values(?,?)`, [images[i].filename, animal_ID]);
      }
      const fetchResult = await connection.query(`SELECT * FROM animals WHERE animal_ID = ?`, [
        queryResult[0][0].insertId,
      ]);
      const animal_images = await connection.query(
        `SELECT image_ID, CONCAT('${process.env.URL}', url) as url FROM images WHERE animal_ID = ?`,
        [queryResult[0][0].insertId]
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
  getAnimalById: async (animal_ID) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const fetchAnimalResults = await connection.query('select * from animals where animal_ID = ?', animal_ID);
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
  update: async (animals, images) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const queryResult = await connection.query(`update animals set 
        animal_ID = ${animals.animal_ID},
        sciencetificName = '${animals.sciencetificName}',
        vietnameseName = '${animals.vietnameseName}',
        localName = '${animals.localName}',
        regnum = '${animals.regnum}',
        phylum = '${animals.phylum}',
        animalClass = '${animals.animalClass}',
        ordo = '${animals.ordo}',
        familia = '${animals.familia}',
        morphological = '${animals.morphological}',
        ecological = '${animals.ecological}',
        usageValue = '${animals.usageValue}',
        IUCN = '${animals.IUCN}',
        redBook = '${animals.redBook}',
        goverment = '${animals.goverment}',
        CITES = '${animals.CITES}',
        allocation = '${animals.allocation}',
        templateStatus = '${animals.templateStatus}',
        habitat = '${animals.habitat}',
        postDate = '${animals.postDate}',
        author = '${animals.author}' where animal_ID = ${animals.animal_ID}`
      )
      const animal_ID = animals.animal_ID;
      const fetchResult = await connection.query(`SELECT * FROM images WHERE animal_ID = ${animal_ID}`);
      for (let i in fetchResult[0]) {
        await connection.query(`update images set url = '${images[i].filename}' where image_ID = ${fetchResult[0][i].image_ID}`);
      }
      await connection.commit();
      const result = fetchResult[0];
      return result
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  remove: async (animal_ID) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const result = await connection.query(`update animals set visibility = 0 where animal_ID = ?`, animal_ID)
      await connection.commit();
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  search: async (vietnameseName) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const resultQuery = await connection.query(`select vietnameseName from animals`)
      const arrAnimals = [];
      for (let i = 0; i < resultQuery[0].length; i++) {
        if (resultQuery[0][i].vietnameseName.search(vietnameseName) != -1) {
          arrAnimals.push(resultQuery[0][i])
        }
      }
      const arrAnimal_ID = [];
      for (let i = 0; i < arrAnimals.length; i++) {
        const result = await connection.query(`select animal_ID from animals where vietnameseName = '${arrAnimals[i].vietnameseName}'`)
        arrAnimal_ID.push(result[0][0])
      }
      await connection.commit();
      return arrAnimal_ID;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
};
