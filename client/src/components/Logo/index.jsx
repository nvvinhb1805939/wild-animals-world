import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className='logo' to='/'>
      .waw
    </Link>
  );
}

export default Logo;
