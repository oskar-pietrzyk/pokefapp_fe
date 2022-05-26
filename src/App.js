import React from 'react';
import HomePage from './components/home/HomePage';
import NotFound from './components/errors_handling/NotFound';
import './index.global.scss';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
