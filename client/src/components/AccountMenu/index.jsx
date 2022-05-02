import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SPACING from '../../constant/spacing';
import { logout } from '../../features/Auth/userSlice';
import AccountAvatar from '../AccountAvatar';

AccountMenu.propTypes = {
  userData: PropTypes.object.isRequired,
  isHomePage: PropTypes.bool,
};
AccountMenu.defaultProps = {
  isHomePage: true,
};

const TRIANGLE_WIDTH = 10;

function AccountMenu({ userData, isHomePage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const path = isHomePage ? `dashboard/${userData.userName}-${userData.user_ID}` : '/';

  const handleAvatarClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    const action = logout();
    dispatch(action);
    if (!isHomePage) {
      navigate('/login', {
        state: {
          pathname: location.pathname,
        },
      });
    }
  };

  return (
    <Box>
      <IconButton
        onClick={handleAvatarClick}
        size='small'
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        sx={{ mr: '-5px' }}
      >
        <AccountAvatar userData={userData} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.32))',
            mt: 1.5,

            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: SPACING.AVATAR_WIDTH / 2 - TRIANGLE_WIDTH / 2,
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,

              display: 'block',
              width: TRIANGLE_WIDTH,
              height: TRIANGLE_WIDTH,
              bgcolor: '#fff',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            cursor: 'text',
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
          disableRipple
        >
          <Typography sx={{ fontWeight: 600 }}>{userData.fullname}</Typography>
          <Typography>{userData.email}</Typography>
        </MenuItem>
        <Divider />
        <Link to={path} onClick={handleMenuClose}>
          <MenuItem>
            {isHomePage ? (
              <>
                <PersonOutlineIcon sx={{ mr: 1 }} /> Trang quản lý
              </>
            ) : (
              <>
                <HomeIcon sx={{ mr: 1 }} /> Trang chủ
              </>
            )}
          </MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>
          <PowerSettingsNewIcon sx={{ mr: 1 }} /> Đăng xuất
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default AccountMenu;
