import React from 'react';
import Welcome from './components/home/Welcome';
import './index.global.scss';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}

export default App;
