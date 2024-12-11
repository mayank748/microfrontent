import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const latestValue = useSelector((state) => state.sendIncremntedValue);
  useEffect(() => { }, [latestValue])

  return (
    <div className="App-body">
      Hello from Body App! {latestValue}
    </div>
  );
}

export default App;
