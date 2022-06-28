import React from 'react';
import HomePage from './components/home/HomePage';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import NotFound from './components/errors_handling/NotFound';
import './index.global.scss';
import { Routes, Route } from "react-router-dom";
import { CurrentUserContextProvider } from './contexts/CurrentUserContext'
import { RequireUser } from './guards/RequireUser';
import { AuthorizedUser } from './guards/AuthorizedUser';

function App() {
  return (
    <CurrentUserContextProvider>
      <Routes>
        <Route path="/" element={<RequireUser path='/'><HomePage /></RequireUser>} />
        <Route path="/login" element={<AuthorizedUser><Login /></AuthorizedUser>} />
        <Route path="/register" element={<AuthorizedUser><Register /></AuthorizedUser>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContextProvider>
  );
}

export default App;
