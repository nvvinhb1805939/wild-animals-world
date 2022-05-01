import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import { login } from '../../userSlice';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [isLoginSuccess, setIsLoginSuccess] = useState(() => JSON.parse(localStorage.getItem('loginStatus')) || false);

  useEffect(() => {
    if (!isLoginSuccess) return;
    if (location.state?.pathname.split('/')[1] === 'dashboard') {
      const path = `${user.data?.userName}-${user.data?.user_ID}`;
      navigate(`/dashboard/${path}`);
      return;
    }
    navigate(-1);
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
