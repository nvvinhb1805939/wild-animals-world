import { Box } from '@mui/material';
import React from 'react';
import Header from '../../features/Dashboard/components/Header';
import Sidebar from '../../features/Dashboard/components/Sidebar';
import { useState } from 'react';

DashboardLayout.propTypes = {};

function DashboardLayout({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <Box>
      <Sidebar isOpen={isOpenSidebar} />
      <Box>
        <Header onToggleClick={handleToggleSidebar} isCollapse={isOpenSidebar} />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
