import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProviders } from './AppProviders';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
);
