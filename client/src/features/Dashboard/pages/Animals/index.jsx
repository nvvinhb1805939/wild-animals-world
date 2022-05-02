import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomTooltip from '../../../../components/CustomTooltip';

function AnimalPage() {
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h5' component='h3' sx={{ fontWeight: 500 }}>
          Động vật
        </Typography>
        <CustomTooltip title='Thêm động vật'>
          <Link to='add'>
            <Button rounded='true' size='medium'>
              <AddIcon sx={{ width: 32, height: 32 }} />
            </Button>
          </Link>
        </CustomTooltip>
      </Stack>
    </Box>
  );
}

export default AnimalPage;
