import { React, useState } from 'react';
import styles from './Register.module.scss';
import axios from 'axios';
import InputError from '../../errors_handling/InputError';
import { Navigate } from "react-router-dom";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const [loggedIn, setLoggedIn] = useState({})

  const [errorMessages, setErrorMessages] = useState({})

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault()
    axios.post(`http://localhost:3000/api/v1/users`, userInfo, {  headers: { 'content-type': 'application/vnd.api+json' },  })
      .then(res => {
        setLoggedIn(true)
      })
      .catch((error) => {
        setErrorMessages(error.response.data)
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
