import { React, useState } from 'react';
import styles from './Register.module.scss';
import axios from 'axios';

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    console.log('yo')
    e.preventDefault()
    axios.post(`http://localhost:3000/api/v1/users`, userInfo, {  headers: { 'content-type': 'application/vnd.api+json' },  })
      .then(res => {
        console.log('asdf')
        console.log(res)
      })
      .catch((error) => {
        console.log(error.message)
        console.log(error.response.data.email)
      })
  }

  return (
    <div className={styles.main}>
      <div className={styles.main_background} />
      <div className={styles.form_section_background} />
      <form className={styles.form_section} >
        <input
          type="text"
          name="username"
          placeholder="username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="password_confirmation"
          value={userInfo.password_confirmation}
          onChange={handleChange}
        />
        <button className={styles.form_section_submit_button} onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default Register;
