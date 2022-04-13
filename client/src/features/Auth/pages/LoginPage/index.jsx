import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../components/Login';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

LoginPage.propTypes = {};

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = async data => {
    const response = await dispatch(login(data));
    const userData = unwrapResult(response);
    const isLoginedSuccess = !!userData.user?.idUser;
    if (isLoginedSuccess) navigate('/');
  };

  return (
    <main>
      <Login onSubmit={handleOnSubmit} />
    </main>
  );
}

export default LoginPage;
