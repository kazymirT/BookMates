import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
);

// eslint-disable-next-line no-console
reportWebVitals(console.log);
