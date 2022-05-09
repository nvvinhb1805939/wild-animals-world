import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

MenuPopover.propTypes = {
  path: PropTypes.string.isRequired,
};

function MenuPopover({ path }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Link to={path}>
          <MenuItem onClick={handleClose} sx={{ gap: 1, fontSize: 14 }}>
            <EditIcon sx={{ width: 20 }} />
            Cập nhật
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose} sx={{ gap: 1, fontSize: 14 }}>
          <DeleteIcon sx={{ width: 20 }} />
          Xoá
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default MenuPopover;
