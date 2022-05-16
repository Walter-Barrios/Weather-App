import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales.
import App from './containers/App';
import { BrowserRouter as Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routes>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Routes>
);