import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";
import React from 'react';
import propTypes from 'prop-types';

const RequireUser = ({ path, children }) => {
  const { state } = useCurrentUser();

  if (state.isLoggedIn === true) {
    return children
  } else {
    return <Navigate to={path} />
  }
}

RequireUser.propTypes = {
  path: propTypes.string,
  children: propTypes.element
}

export { RequireUser };
