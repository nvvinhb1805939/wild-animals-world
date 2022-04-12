import { Stack } from '@mui/material';
import React from 'react';
import './NotFound.scss';

function NotFound() {
  return (
    <main>
      <Stack component='section' className='not-found' justifyContent='center' alignItems='center'>
        <div className='not-found__content'>
          <p className='not-found__code'>404</p>
          <p className='not-found__error'>Ooops...</p>
          <p className='not-found__message'>page not found</p>
        </div>
      </Stack>
    </main>
  );
}

export default NotFound;
