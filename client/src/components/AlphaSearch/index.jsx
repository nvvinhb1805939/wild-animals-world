import { Container, Stack } from '@mui/material';
import React from 'react';
import ALPHAS from '../../constant/alphas';
import AlphaSearchItem from './components/AlphaSearchItem';

AlphaSearch.propTypes = {};

function AlphaSearch(props) {
  return (
    <Container sx={{ pb: 4 }} component='section'>
      <Stack direction='row' justifyContent='space-between'>
        {ALPHAS.map((alpha, index) => (
          <AlphaSearchItem key={index} alpha={alpha} />
        ))}
      </Stack>
    </Container>
  );
}

export default AlphaSearch;
