import { ImageListItem, ImageListItemBar } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

AnimalItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

function AnimalItem({ id, name, src }) {
  const toLatinString = vietNameseString =>
    vietNameseString
      .toLowerCase()
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
      .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
      .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
      .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
      .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
      .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
      .replace(/đ/g, 'd')
      .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
      .replace(/\u02C6|\u0306|\u031B/g, '');

  const toSpinalCase = param => {
    return toLatinString(param)
      .replace(/([A-Z])/g, ' $1')
      .replace(/[^A-Za-z0-9]/g, ' ')
      .replace(/\s{1,}/g, '-')
      .replace(/^\-|[\-]$/g, '')
      .toLowerCase();
  };

  return (
    <ImageListItem>
      <Link to={`${toSpinalCase(name + '-' + id)}`} className='bird-item__link' style={{ height: '100%' }}>
        <img src={src} alt={name} loading='lazy' style={{ width: '100%', height: '100%' }} />
        <ImageListItemBar title={name} />
      </Link>
    </ImageListItem>
  );
}

export default AnimalItem;
