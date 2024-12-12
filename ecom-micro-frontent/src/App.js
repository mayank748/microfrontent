import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BodyApp from './BodyApp';

const App = () => {
  return (
    // <Provider store={store}>
    <div>
      <Header />
      <BodyApp />
      <Footer />
    </div>
    //</Provider>
  );
};

export default App;
