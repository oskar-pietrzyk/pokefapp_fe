import { React } from 'react';
import styles from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className={styles.NotFound}>
      <header className={styles.NotFoundHeader}>
        <p>{t('errors_handling.not_found')}</p>
      </header>
    </div>
  );
}

export default NotFound;
