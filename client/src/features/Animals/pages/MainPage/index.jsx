import React, { useEffect, useState } from 'react';
import animalsApi from '../../../../api/animalsApi';
import Hero from '../../../../components/Hero';
import AnimalsList from '../../components/AnimalsList';

function MainPage(props) {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await animalsApi.getAll();
      setAnimals(response);
    })();
  }, []);

  return (
    <>
      <Hero />
      <main>
        {/* <Slider images={IMAGES} paddingY={4} />
      <AlphaSearch /> */}
        <AnimalsList data={animals} />
      </main>
    </>
  );
}

export default MainPage;
