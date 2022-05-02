import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import AccountMenu from '../../../../components/AccountMenu';
import SPACING from '../../../../constant/spacing';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PropTypes from 'prop-types';
import CustomTooltip from '../../../../components/CustomTooltip';

Header.propTypes = {
  onToggleClick: PropTypes.func,
  isCollapse: PropTypes.bool,
};
Header.defaultProps = {
  onToggleClick: null,
  isCollapse: true,
};

function Header({ onToggleClick, isCollapse }) {
  const user = useSelector(state => state.user);
  const userData = user.data || {};

  const handleOnToggleClick = () => {
    if (onToggleClick) onToggleClick();
  };

  return (
    <AppBar
      color='foreground'
      sx={{ left: isCollapse ? SPACING.SIDEBAR_WIDTH : 0, width: 'unset', px: 4, transition: 'all 0.25s ease-in-out' }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        {isCollapse ? (
          <CustomTooltip title='Ẩn sidebar'>
            <IconButton onClick={handleOnToggleClick}>
              <KeyboardArrowLeftIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </CustomTooltip>
        ) : (
          <CustomTooltip title='Hiện sidebar'>
            <IconButton onClick={handleOnToggleClick}>
              <MenuIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </CustomTooltip>
        )}
        <AccountMenu userData={userData} isHomePage={false} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
