import { Box, Typography } from '@mui/material';
import React from 'react';
import hero from '../../assets/img/hero.jpg';

Hero.propTypes = {};

function Hero(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        mt: 8,
        width: '100%',
        height: '100vh',

        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
        },

        '& > img': {
          width: '100%',
          height: '100%',
        },
      }}
    >
      <img src={hero} alt='img' />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'foreground.main',
        }}
      >
        <Typography variant='h4' sx={{ mb: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore iste sint voluptas error saepe quos,
          voluptatem fugiat ab culpa ipsum, neque modi rem. Porro obcaecati voluptas qui quos quia perferendis.
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
