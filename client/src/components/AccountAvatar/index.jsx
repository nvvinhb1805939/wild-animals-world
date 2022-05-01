import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

AccountAvatar.propTypes = {
  userData: PropTypes.object,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
    boxShadow: `0 0 0 2px ${theme.palette.foreground.main}`,

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,

      width: '100%',
      height: '100%',

      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function AccountAvatar({ userData }) {
  return (
    <StyledBadge overlap='circular' variant='dot' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Avatar alt={userData.fullname} src={userData.avatar} />
    </StyledBadge>
  );
}

export default AccountAvatar;
