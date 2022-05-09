import { Tooltip, Zoom } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

CustomTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  placement: PropTypes.string,
};
CustomTooltip.defaultProps = {
  placement: 'bottom',
};

function CustomTooltip({ title, placement, children }) {
  return (
    <Tooltip title={title} placement={placement} TransitionComponent={Zoom} arrow>
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;
