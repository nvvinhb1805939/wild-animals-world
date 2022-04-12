import React from 'react';
import AlphaSearch from '../../../../components/AlphaSearch';
import Slider from '../../../../components/Slider';
import AnimalsList from '../../components/AnimalsList';
import IMAGES from '../../../../constant/images';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <main>
      <Slider images={IMAGES} paddingY={4} />
      <AlphaSearch />
      <AnimalsList />
    </main>
  );
}

export default MainPage;
