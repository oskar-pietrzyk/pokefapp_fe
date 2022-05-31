import { React } from 'react';
import styles from './BecomeMaster.module.scss';
import { useTranslation } from 'react-i18next';

function BecomeMaster() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>

      <div className={styles.label_left}>
        <div className={styles.horizontal_hr} />
        <div className={styles.label_left_background}> 
          {t('home_page.become_master.label_left')}
        </div>
        <div className={styles.horizontal_hr} />
      </div>

      <div className={styles.pokemon}>
      </div>

      <div className={styles.label_right}> 
        <div className={styles.horizontal_hr} />
        <div className={styles.label_right_background}> 
          {t('home_page.become_master.label_right')}
        </div> 
        <div className={styles.horizontal_hr} />
      </div>

    </div>
  );
}

export default BecomeMaster;
