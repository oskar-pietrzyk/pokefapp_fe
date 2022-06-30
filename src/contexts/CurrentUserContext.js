import { React, createContext, useCallback, useReducer, useEffect, useContext } from 'react';
import { reducer, initialState } from './loggedIn'
import axios from 'axios';
import propTypes from 'prop-types';

const CurrentUserContext = createContext({
  state: initialState,
  login: () => Boolean
});

const CurrentUserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const login = useCallback(async (data) => {
    const res = await axios.post(`http://localhost:3000/api/v1/login`, data, {  headers: { 'content-type': 'application/vnd.api+json'} })
    dispatch({type: 'logged_in'}, {authToken: `${res.data.jti}` })
  }, []);

  const signUp = useCallback(async(data) => {
    const res = await axios.post(`http://localhost:3000/api/v1/users`, data, {  headers: { 'content-type': 'application/vnd.api+json' } })
    dispatch({type: 'logged_in'}, { authToken: `${res.data.jti}` })
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem('loggedIn') === 'true' && window.localStorage.getItem('authToken').length > 0) {
      dispatch({type: 'logged_in'}, { authToken: window.localStorage.getItem('authToken')})
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('loggedIn', state.isLoggedIn);
    window.localStorage.setItem('authToken', state.authToken);
  }, [state.isLoggedIn, state.authToken]);

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
