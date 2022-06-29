import { React, createContext, useCallback, useReducer, useEffect, useContext } from 'react';
import { reducer, initialState } from './loggedIn'
import axios from 'axios';
import propTypes from 'prop-types';

const CurrentUserContext = createContext({
  state: initialState,
  login: () => Boolean,
});

const CurrentUserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const login = useCallback(async (data) => {
    await axios.post(`http://localhost:3000/api/v1/login`, data, {  headers: { 'content-type': 'application/vnd.api+json' },  })
    dispatch({type: 'logged_in'})
  }, []);

  const signUp = useCallback(async(data) => {
    await axios.post(`http://localhost:3000/api/v1/users`, data, {  headers: { 'content-type': 'application/vnd.api+json' },  })
    dispatch({type: 'logged_in'})
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem('loggedIn') === 'true') {
      dispatch({type: 'logged_in'})
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('loggedIn', state.isLoggedIn);
  }, [state.isLoggedIn]);

  return( 
    <CurrentUserContext.Provider value={{state, login, signUp}}>
      {children}
    </CurrentUserContext.Provider>
  )
}

const useCurrentUser = () => {
  return useContext(CurrentUserContext)
}

CurrentUserContextProvider.propTypes = {
  children: propTypes.element
}

export { CurrentUserContext, CurrentUserContextProvider, useCurrentUser };
