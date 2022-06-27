import { React, useState, useContext } from 'react';
import styles from './Login.module.scss';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function Login() {
  const { t } = useTranslation();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({})
  const { loggedIn, setLoggedIn, setCurrentUser } = useContext(CurrentUserContext)

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`http://localhost:3000/api/v1/login`, userInfo, {  headers: { 'content-type': 'application/vnd.api+json' },  })
      .then(res => {
        setLoggedIn(true)
        setCurrentUser(res.data)
      })
      .catch(() => {
        setErrorMessage(true)
      })
  }

  return (
    <div className={styles.main}>
      { loggedIn === true && (<Navigate to='/'/>) }
      <div className={styles.main_background} />
      <div className={styles.form_section_background} />
      <form className={styles.form_section} >
        <input
          className={styles.form_section_input}
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          className={styles.form_section_input}
          type="password"
          name="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={handleChange}
        />
        { errorMessage === true && (
          <div className={styles.form_error}>
            { t('errors_handling.invalid_login') }
          </div>
        ) }
        <button className={styles.form_section_submit_button} onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
