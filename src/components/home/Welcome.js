import { React, useEffect, useState } from 'react';
import axios from '../../axios';
import styles from './Welcome.module.scss';

function Welcome() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`/welcome`)
      .then(res => {
        const data = res.data;
        console.log(res, data);
        setMessage(res.data.message)
      })
   }, []);

  return (
    <div className={styles.Welcome}>
      <header className={styles.WelcomeHeader}>
        <p>
          Welcome from REACT
        </p>
        <p>
          { message }
        </p>
      </header>
    </div>
  );
}

export default Welcome;
