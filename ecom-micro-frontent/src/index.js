import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from '../Reducers/SharedStore/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    //<h3>Test</h3>
    <Provider store={store}>
      <App />
    </Provider>
 // </React.StrictMode>
);

reportWebVitals();
