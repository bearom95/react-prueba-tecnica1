import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home';
import { Peliculas } from './pages/Peliculas';
import { Series } from './pages/Series';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="series" element={<Series />} />
          <Route path="peliculas" element={<Peliculas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
