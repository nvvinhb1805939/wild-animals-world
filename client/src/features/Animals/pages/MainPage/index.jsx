import React, { useEffect, useState, useContext } from 'react';
import animalsApi from '../../../../api/animalsApi';
import Hero from '../../../../components/Hero';
import AnimalsList from '../../components/AnimalsList';
import { LoadingContext } from '../../../../App';

function MainPage(props) {
  const [animals, setAnimals] = useState([]);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    (async () => {
      const response = await animalsApi.getAll();
      setAnimals(response);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Hero />
      <main>
        <AnimalsList data={animals} />
      </main>
    </>
  );
}

export default MainPage;
