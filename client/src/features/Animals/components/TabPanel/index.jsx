import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3, px: 2 }}>{children}</Box>}
    </Box>
  );
}

export default TabPanel;
