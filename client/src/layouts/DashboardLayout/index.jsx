import { Box } from '@mui/material';
import React, { useState } from 'react';
import DashboardFeature from '../../features/Dashboard';
import Header from '../../features/Dashboard/components/Header';
import Sidebar from '../../features/Dashboard/components/Sidebar';

function DashboardLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <Box>
      <Sidebar isOpen={isOpenSidebar} />
      <Box
        sx={{
          ml: isOpenSidebar ? '300px' : 0,
          transition: 'margin-left 0.25s linear',
        }}
      >
        <Header onToggleClick={handleToggleSidebar} isCollapse={isOpenSidebar} />
        <DashboardFeature />
      </Box>
    </Box>
  );
}

export default DashboardLayout;
