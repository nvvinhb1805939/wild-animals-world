import { ThemeProvider } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import AnimalsFeature from './features/Animals';
import AuthFeature from './features/Auth';
import DashboardFeature from './features/Dashboard';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';
import theme from './styles/Style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path='*'
          element={
            <PublicLayout>
              <AnimalsFeature />
            </PublicLayout>
          }
        />
        <Route
          path='login/*'
          element={
            <AuthLayout>
              <AuthFeature />
            </AuthLayout>
          }
        />
        <Route
          path='dashboard/*'
          element={
            <DashboardLayout>
              <DashboardFeature />
            </DashboardLayout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
