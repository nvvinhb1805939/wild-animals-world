import { ThemeProvider } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import AnimalsFeature from './features/Animals';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';
import theme from './styles/Style';
import { createContext } from 'react';
import { useState } from 'react';

export const LoadingContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
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
          <Route path='login/*' element={<AuthLayout />} />
          <Route path='dashboard/*' element={<DashboardLayout />} />
        </Routes>
      </ThemeProvider>
    </LoadingContext.Provider>
  );
}

export default App;
