import { createContext } from 'react';

const CurrentUserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {},
  loggedIn: false,
  setLoggedIn: () => {}
});

export { CurrentUserContext };
