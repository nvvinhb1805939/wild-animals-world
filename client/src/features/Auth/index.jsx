import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import NotFound from '../../components/NotFound';

AuthFeature.propTypes = {};

function AuthFeature(props) {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='login' />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
      <Route path='reset' element={<ForgetPasswordPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AuthFeature;
