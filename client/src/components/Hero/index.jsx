import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { LoadingContext } from '../../App';
import hero from '../../assets/img/hero.jpg';
import { Skeleton } from '@mui/material';

Hero.propTypes = {};

function Hero(props) {
  const { loading } = useContext(LoadingContext);
  return loading ? (
    <Skeleton
      variant='rectangular'
      width='100%'
      height='100vh'
      sx={{
        position: 'relative',
        mt: 8,
      }}
    >
      <Box
        variant='rectangular'
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Skeleton variant='rectangular' width='fit-content' sx={{ visibility: 'visible' }}>
          <Typography variant='h4' sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </Typography>
        </Skeleton>
        <Skeleton variant='rectangular' sx={{ visibility: 'visible' }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore iste sint voluptas error saepe quos,
            voluptatem fugiat ab culpa ipsum, neque modi rem. Porro obcaecati voluptas qui quos quia perferendis.
          </Typography>
        </Skeleton>
      </Box>
    </Skeleton>
  ) : (
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
