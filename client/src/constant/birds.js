import IMAGES from './images';

const BIRDS = [];

for (let index = 0; index < 100; index++) {
  const bird = {
    id: index + 1,
    name: `bird ${index + 1}`,
    imgSrc: IMAGES[index % IMAGES.length],
  };
  BIRDS.push(bird);
}

export default BIRDS;
