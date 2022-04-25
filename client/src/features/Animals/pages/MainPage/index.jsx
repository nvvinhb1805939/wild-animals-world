import React from 'react';
import AlphaSearch from '../../../../components/AlphaSearch';
import Slider from '../../../../components/Slider';
import AnimalsList from '../../components/AnimalsList';
import IMAGES from '../../../../constant/images';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAnimals } from '../../animalsSlice';
import Hero from '../../../../components/Hero';

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllAnimals = async () => {
      await dispatch(fetchAnimals());
    };
    getAllAnimals();
  }, []);

  return (
    <>
      <Hero />
      <main>
        {/* <Slider images={IMAGES} paddingY={4} />
      <AlphaSearch /> */}
        <AnimalsList />
      </main>
    </>
  );
}

export default MainPage;
