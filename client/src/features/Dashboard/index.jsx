import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import SPACING from '../../constant/spacing';
import AccountInfo from './pages/AccountInfo';
import Animals from './pages/Animals';
import AddUpdateAnimal from './pages/Animals/addUpdate';
import Dashboard from './pages/Dashboard';

const PADDING_BOX = 4;

function DashboardFeature() {
  return (
    <Box
      sx={{
        p: PADDING_BOX,
        mt: `${SPACING.HEADER_HEIGHT}px`,
      }}
    >
      <Routes>
        <Route path=':dashboardInfo' element={<Dashboard />} />
        <Route path=':dashboardInfo/account' element={<AccountInfo />} />
        <Route path=':dashboardInfo/animals' element={<Animals />} />
        <Route path=':dashboardInfo/animals/add' element={<AddUpdateAnimal />} />
        <Route path=':dashboardInfo/animals/:animal_ID' element={<AddUpdateAnimal />} />
        <Route
          path='*'
          element={
            <Box sx={{ m: -PADDING_BOX, mt: -(PADDING_BOX + SPACING.HEADER_HEIGHT / SPACING.DEFAULT_PX_PER_SPACING) }}>
              <NotFound />
            </Box>
          }
        />
      </Routes>
    </Box>
  );
}

export default DashboardFeature;
