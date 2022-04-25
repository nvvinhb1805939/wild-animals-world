import React from 'react';
import PropTypes from 'prop-types';
import AnimalItem from '../AnimalItem';
import { Container } from '@mui/material';
import { ImageList } from '@mui/material';
import { useSelector } from 'react-redux';

AnimalsList.propTypes = {};

function AnimalsList(props) {
  const animals = useSelector(state => state.animals);
  return (
    <Container sx={{ mb: 8 }} component='section'>
      <ImageList cols={4} gap={24} rowHeight={200}>
        {animals.animals.map(animal => (
          <AnimalItem
            key={animal.animal_ID}
            id={animal.animal_ID}
            name={animal.vietnameseName}
            src={animal.images[0].url}
          />
        ))}
      </ImageList>
    </Container>
  );
}

export default AnimalsList;
