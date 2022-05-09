import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../../../components/Hero';
import { fetchAnimals } from '../../animalsSlice';
import AnimalsList from '../../components/AnimalsList';

function MainPage(props) {
  const dispatch = useDispatch();
  const response = useSelector(state => state.animals);
  const { animals } = response;

  useEffect(() => {
    const getAllAnimals = async () => {
      await dispatch(fetchAnimals());
    };
    getAllAnimals();
  }, [animals.length]);

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
