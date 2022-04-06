import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className='logo' to='/'>
      .bird
    </Link>
  );
}

export default Logo;
