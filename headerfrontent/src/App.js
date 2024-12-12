import React, { useEffect, useState } from 'react';
import './App.css';
import useStore from './SharedStore';


const App = () => {
  const { count, increment, decrement } = useStore();
  useEffect(() => { }, [count])

  return <div className='App-header'>
    <div>
      Counter App!
    </div>
    <div className='App-header app-header-button-div'>
      <div className='app-header-button'>
        <button onClick={increment}>+</button>
      </div>
      <div className='app-header-button'>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  </div>;
};


export default App;