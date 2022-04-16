import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import { login } from '../../userSlice';

LoginPage.propTypes = {};

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoginSuccess, setIsLoginSuccess] = useState(() => JSON.parse(localStorage.getItem('loginStatus')) || false);

  useEffect(() => {
    if (isLoginSuccess) navigate(-1);
  }, [isLoginSuccess]);

  const handleOnSubmit = async data => {
    const response = await dispatch(login(data));
    const userData = unwrapResult(response);
    const hasData = !!userData?.user_ID;

    setIsLoginSuccess(hasData);
    localStorage.setItem('loginStatus', JSON.stringify(hasData));
  };

  return (
    <main>
      <LoginForm onSubmit={handleOnSubmit} />
    </main>
  );
}

export default LoginPage;
