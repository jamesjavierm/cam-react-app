import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Welcome from './Welcome.jsx'; // Uncomment this line
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome /> 
  </StrictMode>
);