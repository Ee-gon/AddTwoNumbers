import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AddTwoNumbers from './theSum.jsx';
// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddTwoNumbers />
  </StrictMode>,
)
