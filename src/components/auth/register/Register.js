import { React, useState, useContext, useEffect } from 'react';
import styles from './Register.module.scss';
import axios from 'axios';
import InputError from '../../errors_handling/InputError';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const [loggedIn, setLoggedIn] = useContext(CurrentUserContext)
  useEffect(() => {
    if (window.localStorage.getItem('loggedIn') === 'true') {
      setLoggedIn({type: 'logged_in'})
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('loggedIn', loggedIn.loggedIn);
  }, [loggedIn.loggedIn]);

  const [errorMessages, setErrorMessages] = useState({})

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`http://localhost:3000/api/v1/users`, userInfo, {  headers: { 'content-type': 'application/vnd.api+json' },  })
      .then(res => {
        setLoggedIn({type: 'logged_in'})
      })
      .catch((error) => {
        setErrorMessages(error.response.data)
      })
  }

  return (
    <div className={styles.main}>
      <div className={styles.main_background} />
      <div className={styles.form_section_background} />
      <form className={styles.form_section} >
        <input
          className={styles.form_section_input}
          type="text"
          name="username"
          placeholder="Username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <InputError key={errorMessages.id} error_message={`Username ${errorMessages.username}`} error={errorMessages.username} />
        <input
          className={styles.form_section_input}
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <InputError key={errorMessages.id} error_message={`Email ${errorMessages.email}`} error={errorMessages.email} />
        <input
          className={styles.form_section_input}
          type="password"
          name="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <InputError key={errorMessages.id} error_message={`Password ${errorMessages.password}`} error={errorMessages.password} />
        <input
          className={styles.form_section_input}
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={userInfo.password_confirmation}
          onChange={handleChange}
        />
        <InputError key={errorMessages.id} error_message={`Password Confirmation ${errorMessages.password_confirmation}`} error={errorMessages.password_confirmation} />
        <button className={styles.form_section_submit_button} onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default Register;
