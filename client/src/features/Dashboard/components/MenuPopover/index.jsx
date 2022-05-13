import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

MenuPopover.propTypes = {
  onDeleteClick: PropTypes.func,
  path: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};
MenuPopover.defaultProps = {
  onDeleteClick: null,
};

function MenuPopover({ path, state, onDeleteClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const animalRemovedID = path.split('-').pop();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteClick = () => {
    handleClose();
    if (onDeleteClick) onDeleteClick(animalRemovedID);
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
        disableScrollLock
      >
        <Link to={path} state={state}>
          <MenuItem onClick={handleClose} sx={{ gap: 1, fontSize: 14 }}>
            <EditIcon sx={{ width: 20 }} />
            Cập nhật
          </MenuItem>
        </Link>
        {onDeleteClick && (
          <MenuItem onClick={handleDeleteClick} sx={{ gap: 1, fontSize: 14 }}>
            <DeleteIcon sx={{ width: 20 }} />
            Xoá
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}

export default MenuPopover;
