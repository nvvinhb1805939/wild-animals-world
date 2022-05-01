import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountInfo from './pages/AccountInfo';
import Management from './pages/Management';
import Dashboard from './pages/Dashboard';

function DashboardFeature(props) {
  return (
    <Routes>
      <Route path=':dashboardInfo' element={<Dashboard />} />
      <Route path=':dashboardInfo/account' element={<AccountInfo />} />
      <Route path=':dashboardInfo/management' element={<Management />} />
    </Routes>
  );
}

export default DashboardFeature;
