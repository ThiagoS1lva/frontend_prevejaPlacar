import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Components/Menu.jsx'
import Sobre from './Components/Sobre.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Sobre />
    <App />
  </React.StrictMode>
);