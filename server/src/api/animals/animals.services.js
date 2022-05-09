const pool = require('../../config/connectDB');

const toLatinString = vietNameseString =>
  vietNameseString
    .toLowerCase()
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
    .replace(/\u02C6|\u0306|\u031B/g, '');

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
  update: async (animals, images) => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const queryResult = await connection.query(`update animals set 
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
        habitat = '${animals.habitat}'
        where animal_ID = ${animals.animal_ID}`);
      // const animal_ID = animals.animal_ID;
      // const fetchResult = await connection.query(`SELECT * FROM images WHERE animal_ID = ${animal_ID}`);
      // for (let i in fetchResult[0]) {
      //   await connection.query(
      //     `update images set url = '${images[i].filename}' where image_ID = ${fetchResult[0][i].image_ID}`
      //   );
      // }
      await connection.commit();
      const result = fetchResult[0];
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  remove: async animal_ID => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const result = await connection.query(`update animals set visibility = 0 where animal_ID = ${animal_ID}`);
      await connection.commit();
      return result;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  search: async vietnameseName => {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      const fetchAnimalResults = await connection.query(`select * from animals where visibility = 1`);
      const [result] = fetchAnimalResults;
      const animals = result.filter(item => toLatinString(item.vietnameseName).includes(vietnameseName));

      for (let i in animals) {
        const fetchAnimalImageResults = await connection.query(
          `SELECT image_ID, CONCAT('${process.env.URL}', url) as url FROM images WHERE animal_ID = ?`,
          [animals[i].animal_ID]
        );
        animals[i]['images'] = fetchAnimalImageResults[0];
      }
      return animals;
    } catch (error) {
      return error;
    } finally {
      connection.release();
    }
  },
  // search: async vietnameseName => {
  //   const connection = await pool.getConnection();
  //   try {
  //     await connection.beginTransaction();
  //     const resultQuery = await connection.query(`select vietnameseName from animals`);
  //     const arrAnimals = [];
  //     for (let i = 0; i < resultQuery[0].length; i++) {
  //       if (resultQuery[0][i].vietnameseName.search(vietnameseName) != -1) {
  //         arrAnimals.push(resultQuery[0][i]);
  //       }
  //     }
  //     const arrAnimal_ID = [];
  //     for (let i = 0; i < arrAnimals.length; i++) {
  //       const result = await connection.query(
  //         `select * from animals where visibility = 1 and vietnameseName = '${arrAnimals[i].vietnameseName}'`
  //       );
  //       arrAnimal_ID.push(result[0][0]);
  //     }
  //     await connection.commit();
  //     return arrAnimal_ID;
  //   } catch (error) {
  //     return error;
  //   } finally {
  //     connection.release();
  //   }
  // },
};
