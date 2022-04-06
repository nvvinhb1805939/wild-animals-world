import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

AlphaSearchItem.propTypes = {
  alpha: PropTypes.string.isRequired,
};

function AlphaSearchItem({ alpha }) {
  return (
    <Button color='primary' size='small' square='true'>
      {alpha}
    </Button>
  );
}

export default AlphaSearchItem;
