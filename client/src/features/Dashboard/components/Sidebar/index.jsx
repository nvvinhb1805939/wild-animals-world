import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewListIcon from '@mui/icons-material/ViewList';
import { alpha, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../../../components/Logo';
import SPACING from '../../../../constant/spacing.js';

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};
Sidebar.defaultProps = {
  isOpen: true,
};

function Sidebar({ isOpen }) {
  const user = useSelector(state => state.user);
  const userData = user.data || {};

  return (
    <Drawer
      open={isOpen}
      variant='persistent'
      PaperProps={{
        sx: {
          width: SPACING.SIDEBAR_WIDTH,
          borderRightStyle: 'dashed',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Logo />
      </Box>
      <List sx={{ mx: 1 }}>
        <Box
          sx={{
            '.active .MuiListItemButton-root': {
              fontWeight: 500,
              color: 'primary.main',
              bgcolor: theme => alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <NavLink className='sidebar__nav-link' to={`${userData.userName}-${userData.user_ID}`} end>
            <ListItemButton sx={{ gap: 2, borderRadius: '10px' }}>
              <ListItemIcon sx={{ color: 'inherit' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' sx={{ '& > span': { fontWeight: 'inherit' } }} />
            </ListItemButton>
          </NavLink>
        </Box>
        <Box
          sx={{
            '.active .MuiListItemButton-root': {
              fontWeight: 500,
              color: 'primary.main',
              bgcolor: theme => alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <NavLink className='sidebar__nav-link' to={`${userData.userName}-${userData.user_ID}/account`} end>
            <ListItemButton sx={{ gap: 2, borderRadius: '10px' }}>
              <ListItemIcon sx={{ color: 'inherit' }}>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary='Tài khoản' sx={{ '& > span': { fontWeight: 'inherit' } }} />
            </ListItemButton>
          </NavLink>
        </Box>
        <Box
          sx={{
            '.active .MuiListItemButton-root': {
              fontWeight: 500,
              color: 'primary.main',
              bgcolor: theme => alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <NavLink className='sidebar__nav-link' to={`${userData.userName}-${userData.user_ID}/management`} end>
            <ListItemButton
              sx={{
                gap: 2,
                borderRadius: '10px',
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                <ViewListIcon />
              </ListItemIcon>
              <ListItemText primary='Quản lý' sx={{ '& > span': { fontWeight: 'inherit' } }} />
            </ListItemButton>
          </NavLink>
        </Box>
      </List>
    </Drawer>
  );
}

export default Sidebar;
