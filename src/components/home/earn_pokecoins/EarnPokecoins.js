import { React } from 'react';
import styles from './EarnPokecoins.module.scss';
import { useTranslation } from 'react-i18next';

function EarnPokecoins() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.section_background} />
        <div className={styles.section_text}>
          <div className={styles.section_label} >
            {t('home_page.earn_pokecoins.label')}
          </div>
          <div className={styles.section_description} >
            {t('home_page.earn_pokecoins.description')}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default EarnPokecoins;
