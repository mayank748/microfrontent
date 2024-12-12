import React, { useState,useEffect } from 'react';
import './App.css';
import useStore from './SharedStore';

function App() {

  const { count} = useStore();
  useEffect(() => { }, [count])

  return (
    <div className="App-body">
      This is a demo of micro frontend with shared store<br/>
      Hit + and - button to increase the counter
      <p className={count>-1?'counter-color-positive':'counter-color-negative'}> {count}</p>
    </div>
  );
}

export default App;
