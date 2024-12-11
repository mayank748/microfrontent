import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendIncremntedValue } from '../../reducersharedstorage/src/App';

const dispatch = useDispatch();
const App = () => {

  const latestValue = useSelector((state) => state.sendIncremntedValue);

  // const [newvalue, setNewValue] = useState(latestValue);

  useEffect(() => { }, [newvalue])

  const updateIncremntedValue = () => {
    // newvalue = latestValue + 1
    // setNewValue(newvalue);
    dispatch(setIncremntedValue(5));
  };

  return <div className='App-header'>
    <div>
      Hello from Header App!
    </div>
    <div>
      <button onClick={updateIncremntedValue}>Increment value</button>
    </div>
  </div>;
};

export default App;