import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
// import { Provider} from 'react-redux';
// import store from 'reducersharedstorage/store';

ReactDOM.render(
  //<React.StrictMode>
    // <Provider store={store}>
      <App />
    //</Provider>
  //</React.StrictMode>
  ,
  document.getElementById('root')
);
reportWebVitals();

