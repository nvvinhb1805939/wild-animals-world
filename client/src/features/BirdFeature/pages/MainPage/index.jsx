import React from 'react';
import AlphaSearch from '../../../../components/AlphaSearch';
import Slider from '../../../../components/Slider';
import BirdList from '../../components/BirdList';
import IMAGES from '../../../../constant/images';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <main>
      <Slider images={IMAGES} paddingY={4} />
      <AlphaSearch />
      <BirdList />
    </main>
  );
}

export default MainPage;
