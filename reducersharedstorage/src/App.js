import React from 'react';
import store from './store';

const App = () => {
    console.log(store.getState(), "store");
  return <div></div>; 
};

export default App;