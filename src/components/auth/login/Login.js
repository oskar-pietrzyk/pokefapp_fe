import { React, useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './Login.module.scss';
import { useTranslation } from 'react-i18next';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';

function Login() {
  const { t } = useTranslation();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [errorMessage, setErrorMessage] = useState({})
  
  const { login } = useCurrentUser();

  const onSubmit = data => {
    login(data).catch(()=> {
      setErrorMessage(t('errors_handling.invalid_login'))
    })
  }

  return (
    <div className={styles.main}>
      <div className={styles.main_background} />
      <div className={styles.form_section_background} />

      <form className={styles.form_section} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.form_section_input} placeholder='email' type="email" {...register("email", { required: true })} />
        <div className={styles.input_error}> {errors.password?.type === 'required' && "Email is required"} </div>
        <input className={styles.form_section_input} placeholder='password' type="password" {...register("password", { required: true })} />
        <div className={styles.input_error}> {errors.password?.type === 'required' && "Password is required"} </div>

        { errorMessage.length > 0 && (
          <div className={styles.form_error}>
            { errorMessage }
          </div>
        ) }
        <button className={styles.form_section_submit_button}>Login</button>
      </form>
    </div>
  ); 
}

export default Login;
