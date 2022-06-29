import { React, useState} from 'react';
import styles from './Login.module.scss';
import { useTranslation } from 'react-i18next';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';

function Login() {
  const { t } = useTranslation();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({})
  const { login } = useCurrentUser();

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault()
    login(userInfo).catch(()=> {
      setErrorMessage(t('errors_handling.invalid_login'))
    })
  }

  return (
    <div className={styles.main}>
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
