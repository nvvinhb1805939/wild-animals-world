import { Stack, Typography } from '@mui/material';
import React from 'react';
import SPACING from '../../constant/spacing';

function NotFound() {
  return (
    <Stack
      component='main'
      className='not-found'
      justifyContent='center'
      alignItems='center'
      sx={{
        height: `calc(100vh - ${SPACING.HEADER_HEIGHT}px)`,
        color: 'foreground.main',
        bgcolor: 'primary.main',
        transition: 'all 0.25s ease-in-out',
      }}
    >
      <Typography sx={{ fontSize: '6rem', fontWeight: 600, lineHeight: 1 }}>404</Typography>
      <Typography sx={{ my: 2, fontSize: '2rem' }}>Ooops...</Typography>
      <Typography sx={{ fontSize: '1.5rem', lineHeight: 2 }}>page not found</Typography>
    </Stack>
  );
}

export default NotFound;
