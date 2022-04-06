import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import BirdFeature from './features/BirdFeature';
import theme from './styles/Style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Routes>
        <Route path='*' element={<BirdFeature />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
