import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AppLayout from './layouts/AppLayout';
import Roulette from './pages/Roulette';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="roulette" element={<Roulette />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
