import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NotFound from '../../components/NotFound';

AuthFeature.propTypes = {};

function AuthFeature(props) {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AuthFeature;
