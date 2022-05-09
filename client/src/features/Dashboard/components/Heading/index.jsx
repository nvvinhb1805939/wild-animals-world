import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

function Heading({ text }) {
  return (
    <Typography variant='h5' component='h3' sx={{ fontWeight: 500 }}>
      {text}
    </Typography>
  );
}

export default Heading;
