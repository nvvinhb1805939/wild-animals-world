import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';

function AnimalsFeature() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path=':animalInfo' element={<DetailPage />} />
    </Routes>
  );
}

export default AnimalsFeature;
