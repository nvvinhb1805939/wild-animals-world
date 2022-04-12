const express = require('express');

const connection = require('../config/connectDB');
const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.post('/add', (req, res) => {
  const {
    scienceName,
    vietnameseName,
    namePlate,
    kingdom,
    phylum,
    classBird,
    orderBird,
    family,
    images,
    morphological,
    ecological,
    useValue,
    vietnameseStatus,
    distribution,
    coordinates,
    habitat,
    place,
  } = req.body;

  let query = `insert into bird(scienceName, vietnameseName, namePlate, kingdom, phylum, classBird, orderBird, family, images, morphological, ecological, useValue, vietnameseStatus, distribution, coordinates, habitat, place) values('${scienceName}', '${vietnameseName}', '${namePlate}', '${kingdom}', '${phylum}', '${classBird}', '${orderBird}','${family}', '${images}', '${morphological}', '${ecological}', '${useValue}', '${vietnameseStatus}', '${distribution}','${coordinates}', '${habitat}', '${place}')`;
  connection.query(query, (err, result) => {
    // console.log(err);
    if (err) return res.status(400).json({ success: false, message: 'Failed' });
    return res.status(200).json({ success: true, message: 'Success' });
  });
});

router.get('/getAnimals', (req, res) => {
  const query = `select * from bird`;

  connection.query(query, (err, result) => {
    if (err) return res.status(400).json({ success: false, message: 'Failed' });
    return res.status(200).json({ success: true, message: 'Success', animals: result });
  });
});

router.get(`/getAnimals/:id`, (req, res) => {
  const query = `select * from bird where idBird=${req.params.id}`;

  connection.query(query, (err, result) => {
    if (err) return res.status(400).json({ success: false, message: 'Failed' });
    return res.status(200).json({ success: true, message: 'Success', animals: result });
  });
});

router.patch('/updateAnimal', (req, res) => {
  const {
    idBird,
    scienceName,
    vietnameseName,
    namePlate,
    kingdom,
    phylum,
    classBird,
    orderBird,
    family,
    images,
    morphological,
    ecological,
    useValue,
    vietnameseStatus,
    distribution,
    coordinates,
    habitat,
    place,
  } = req.body;
  let query = `select * from bird where idBird = ${idBird}`;
  connection.query(query, (err, result) => {
    if (err) return res.status(400).json({ success: false, message: 'Failed' });
    let oldSciencename = result[0].scienceName;
    let oldVietnamesename = result[0].vietnameseName;
    let oldNameplate = result[0].namePlate;
    let oldKingdom = result[0].kingdom;
    let oldPhylum = result[0].phylum;
    let oldClassbird = result[0].classBird;
    let oldOrderbird = result[0].orderBird;
    let oldFamily = result[0].family;
    let oldImages = result[0].images;
    let oldMorphological = result[0].morphological;
    let oldEcological = result[0].ecological;
    let oldUsevalue = result[0].useValue;
    let oldVietnamesestatus = result[0].vietnameseStatus;
    let oldDistribution = result[0].distribution;
    let oldCoordinates = result[0].coordinates;
    let oldHabitat = result[0].habitat;
    let oldPlace = result[0].place;

    let scienceNames,
      vietnameseNames,
      namePlates,
      kingdoms,
      phylums,
      classBirds,
      orderBirds,
      familys,
      imagess,
      morphologicals,
      ecologicals,
      useValues,
      vietnameseStatuss,
      distributions,
      coordinatess,
      habitats,
      places;

    if (scienceName === '') {
      scienceNames = oldSciencename;
    } else {
      scienceNames = scienceName;
    }
    if (vietnameseName === '') {
      vietnameseNames = oldVietnamesename;
    } else {
      vietnameseNames = vietnameseName;
    }
    if (namePlate === '') {
      namePlates = oldNameplate;
    } else {
      namePlates = namePlate;
    }
    if (kingdom === '') {
      kingdoms = oldKingdom;
    } else {
      kingdoms = kingdom;
    }
    if (phylum === '') {
      phylums = oldPhylum;
    } else {
      phylums = phylum;
    }
    if (classBird === '') {
      classBirds = oldClassbird;
    } else {
      classBirds = classBird;
    }
    if (orderBird === '') {
      orderBirds = oldOrderbird;
    } else {
      orderBirds = orderBird;
    }
    if (family === '') {
      familys = oldFamily;
    } else {
      familys = family;
    }
    if (images === '') {
      imagess = oldImages;
    } else {
      imagess = images;
    }
    if (morphological === '') {
      morphologicals = oldMorphological;
    } else {
      morphologicals = morphological;
    }
    if (ecological === '') {
      ecologicals = oldEcological;
    } else {
      ecologicals = ecological;
    }
    if (useValue === '') {
      useValues = oldUsevalue;
    } else {
      useValues = useValue;
    }
    if (vietnameseStatus === '') {
      vietnameseStatuss = oldVietnamesestatus;
    } else {
      vietnameseStatuss = vietnameseStatus;
    }
    if (distribution === '') {
      distributions = oldDistribution;
    } else {
      distributions = distribution;
    }
    if (coordinates === '') {
      coordinatess = oldCoordinates;
    } else {
      coordinatess = coordinates;
    }
    if (habitat === '') {
      habitats = oldHabitat;
    } else {
      habitats = habitat;
    }
    if (place === '') {
      places = oldPlace;
    } else {
      places = place;
    }

    let query1 = `update bird set scienceName = '${scienceNames}', vietnameseName ='${vietnameseNames}',namePlate = '${namePlates}',
            kingdom = '${kingdoms}', phylum = '${phylums}', classBird = '${classBirds}', orderBird= '${orderBirds}', family='${familys}',
            images= '${imagess}', morphological ='${morphologicals}', ecological = '${ecologicals}', useValue = '${useValues}', 
            vietnameseStatus = '${vietnameseStatuss}', distribution = '${distributions}', coordinates= '${coordinatess}', habitat = '${habitats}',
            place = '${places}'`;

    connection.query(query1, (err, result) => {
      if (err) return res.status(400).json({ success: false, message: 'Failed8' });
      return res.status(200).json({ success: true, message: 'update success' });
    });
  });
});

router.delete('/deleteAnimal', (req, res) => {
  const { idBird } = req.body;
  let query = `delete from bird where idBird = ${idBird}`;
  connection.query(query, (err, result) => {
    if (err) return res.status(400).json({ success: false, message: 'Failed' });
    return res.status(200).json({ success: true, message: 'Success' });
  });
});

module.exports = router;
