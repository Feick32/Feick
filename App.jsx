import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Giris from './giris';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Giris />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
