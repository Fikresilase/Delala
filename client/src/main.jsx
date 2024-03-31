import React from 'react';
import ReactDOM from 'react-dom/client'; // Replaced with the new import from ReactDOM/client in React 18
import './index.css'; // Import for your CSS stylesheet
import App from './App'; // Import your main application component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);