import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';                    // Stiluri de bază
import './styles/animations.css';        // Animații
import './styles/components.css';        // Componente
import './styles/utilities.css';         // Clase utilitare
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);