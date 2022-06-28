import { useCurrentUser } from "../contexts/CurrentUserContext";
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

const AuthorizedUser = ({ path, children }) => {
  const { state } = useCurrentUser();
  const navigate = useNavigate();

  if (state.isLoggedIn === true) {
    return navigate(-1)
  } else {
    return children
  }
}

AuthorizedUser.propTypes = {
  path: propTypes.string,
  children: propTypes.element
}

export { AuthorizedUser };
