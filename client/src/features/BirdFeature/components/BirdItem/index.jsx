import { ImageListItem, ImageListItemBar } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

BirdItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

function BirdItem({ id, name, src }) {
  const toSpinalCase = param => {
    return param
      .replace(/([A-Z])/g, ' $1')
      .replace(/[^A-Za-z0-9]/g, ' ')
      .replace(/\s{1,}/g, '-')
      .replace(/^\-|[\-]$/g, '')
      .toLowerCase();
  };

  return (
    <ImageListItem>
      <Link to={`${toSpinalCase(name)}`} className='bird-item__link' style={{ height: '100%' }}>
        <img src={src} alt={name} loading='lazy' style={{ height: '100%' }} />
        <ImageListItemBar title={name} subtitle='Bird' />
      </Link>
    </ImageListItem>
  );
}

export default BirdItem;
