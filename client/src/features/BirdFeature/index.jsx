import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import './BirdFeature.scss';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

BirdFeature.propTypes = {};

function BirdFeature(props) {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path=':birdName' element={<DetailPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default BirdFeature;
