import React from 'react';
import ReactDOM from 'react-dom/client';
// Import CMS Design System CSS
import '@cmsgov/design-system/dist/css/index.css';
// Import our existing styles after CMS styles to ensure our overrides work
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();