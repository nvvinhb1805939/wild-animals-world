import { Tooltip, Zoom } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

CustomTooltip.propTypes = {
  title: PropTypes.string.isRequired,
};

function CustomTooltip({ title, children }) {
  return (
    <Tooltip title={title} TransitionComponent={Zoom} arrow>
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;
