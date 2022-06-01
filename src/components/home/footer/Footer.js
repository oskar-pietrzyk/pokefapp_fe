import { React } from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.main_background} />
      <div className={styles.text}>
        <div className={styles.label}> 
          {t('home_page.footer.label')}
        </div>
        <div className={styles.description}>
          {t('home_page.footer.description')}
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
