import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useLocation, useNavigate } from 'react-router-dom';

LoginPage.propTypes = {};

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnSubmit = async data => {
    const response = await dispatch(login(data));
    const userData = unwrapResult(response);
    const isLoginedSuccess = !!userData.user?.idUser;
    const prevPath = location.state?.prevPath;

    if (!isLoginedSuccess) return;
    if (prevPath === '/login' || !prevPath) navigate('/');
    else navigate(prevPath);
  };

  return (
    <main>
      <LoginForm onSubmit={handleOnSubmit} />
    </main>
  );
}

export default LoginPage;
