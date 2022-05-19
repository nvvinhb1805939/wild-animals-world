import { ImageListItem, ImageListItemBar, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import toSpinalCase from '../../../../utils/spinalCase';
import { LoadingContext } from '../../../../App.js';

AnimalItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

function AnimalItem({ id, name, src }) {
  const { loading } = useContext(LoadingContext);
  return loading ? (
    <ImageListItem>
      <Skeleton variant='rectangular' width='100%' height='100%' />
    </ImageListItem>
  ) : (
    <ImageListItem>
      <Link to={`${toSpinalCase(name + '-' + id)}`} className='bird-item__link' style={{ height: '100%' }}>
        <img src={src} alt={name} loading='lazy' style={{ width: '100%', height: '100%' }} />
        <ImageListItemBar title={name} />
      </Link>
    </ImageListItem>
  );
}

export default AnimalItem;
