import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import LoginPage from './pages/LoginPage';

function AuthFeature(props) {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AuthFeature;
