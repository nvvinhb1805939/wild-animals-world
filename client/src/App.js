import { ThemeProvider } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AnimalsFeature from './features/Animals';
import AuthFeature from './features/Auth';
import theme from './styles/Style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Routes>
        <Route path='*' element={<AnimalsFeature />} />
        <Route path='login/*' element={<AuthFeature />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
