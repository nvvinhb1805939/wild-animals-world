import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PublicLayout;
