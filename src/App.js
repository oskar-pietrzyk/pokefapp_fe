import { React, useState } from 'react';
import HomePage from './components/home/HomePage';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import NotFound from './components/errors_handling/NotFound';
import './index.global.scss';
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from './contexts/CurrentUserContext'

function App() {
  const [loggedIn, setLoggedIn, currentUser, setCurrentUser] = useState({loggedIn: true});
  const value = { loggedIn, setLoggedIn, currentUser, setCurrentUser }
  return (
    <CurrentUserContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        { loggedIn === false (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
