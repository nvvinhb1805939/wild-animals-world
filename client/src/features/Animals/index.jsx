import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import { fetchAnimals } from './animalsSlice';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';

AnimalsFeature.propTypes = {};

function AnimalsFeature(props) {
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path=':birdName' element={<DetailPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AnimalsFeature;
