import { Container, ImageList } from '@mui/material';
import React from 'react';
import AnimalItem from '../AnimalItem';
import PropTypes from 'prop-types';

AnimalsList.propTypes = {
  data: PropTypes.array,
};
AnimalsList.defaultProps = {
  data: [],
};

function AnimalsList({ data }) {
  return (
    <Container sx={{ mb: 8 }} component='section'>
      <ImageList cols={4} gap={24} rowHeight={200}>
        {Array.isArray(data) &&
          data.map(animal => (
            <AnimalItem
              key={animal.animal_ID}
              id={animal.animal_ID}
              name={animal.vietnameseName}
              src={animal.images[0]?.url}
            />
          ))}
      </ImageList>
    </Container>
  );
}

export default AnimalsList;
