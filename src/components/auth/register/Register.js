import { React, useState } from 'react';
import styles from './Register.module.scss';
import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import { useForm } from "react-hook-form";

function Register() {
  const { register, formState: { errors }, getValues, handleSubmit } = useForm();

  const { signUp } = useCurrentUser();

  const [errorMessage, setErrorMessage] = useState({})

  const onSubmit = data => {
    signUp(data).catch((error) => {
      setErrorMessage(error.response.data)
    })
  }

  return (
    <div className={styles.main}>
      <div className={styles.main_background} />
      <div className={styles.form_section_background} />
      <form className={styles.form_section} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.form_section_input} placeholder='Username' {...register("username", { required: "Username is required"})} />
        <div className={styles.input_error}> { errors.username && errors.username.message } </div>

        <input className={styles.form_section_input} placeholder='Email' type="email" {...register("email", { required: "Email is required" })} />
        <div className={styles.input_error}> { errors.email && errors.email.message } </div>

        <input className={styles.form_section_input} placeholder='Password' type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password too short'} })} />
        <div className={styles.input_error}> { errors.password && errors.password.message } </div>

        <input className={styles.form_section_input} placeholder='Password Confirmation' type="password" 
          {...register("password_confirmation", {
            validate: { matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'Password confirmation does not match password!';
              }}
            })
          } />
        <div className={styles.input_error}> { errors.password_confirmation?.type === 'matchesPreviousPassword' && errors.password_confirmation.message } </div>

        { errorMessage.email && errorMessage.email.length > 0 && (
          <div className={styles.form_error}>
            { `Email ${errorMessage.email}` }
          </div>
        ) }
        <button className={styles.form_section_submit_button}>Register</button>
      </form>
    </div>
  );
}

export default Register;
