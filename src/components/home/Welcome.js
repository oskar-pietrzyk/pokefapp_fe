import { React, useEffect, useState } from 'react';
import axios from '../../axios';
import styles from './Welcome.module.scss';
import { useTranslation } from 'react-i18next';

function Welcome() {
  const { t } = useTranslation();
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
        <p>{t('Welcome')}</p>
        <p>
          { message }
        </p>
      </header>
    </div>
  );
}

export default Welcome;
