import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SayHelloProps from './components/SayHelloProps';
import App from './App';
import Compteur from './components/compteur';
import ClickCounter from './components/click';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClickCounter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();