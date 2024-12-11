import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BodyApp from './BodyApp';

const App = () => {
  return (
    <div>
      <Header/>
      <BodyApp/>
      <Footer/>
    </div>
  );
};

export default App;
