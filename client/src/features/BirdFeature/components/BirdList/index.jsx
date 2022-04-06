import React from 'react';
import PropTypes from 'prop-types';
import BirdItem from '../BirdItem';
import BIRDS from '../../../../constant/birds';
import { Container } from '@mui/material';
import { ImageList } from '@mui/material';

BirdList.propTypes = {};

function BirdList(props) {
  return (
    <Container className='bird-list' component='section'>
      <ImageList cols={4} gap={24}>
        {BIRDS.map(bird => (
          <BirdItem key={bird.id} id={bird.id} name={bird.name} src={bird.imgSrc} />
        ))}
      </ImageList>
    </Container>
  );
}

export default BirdList;
