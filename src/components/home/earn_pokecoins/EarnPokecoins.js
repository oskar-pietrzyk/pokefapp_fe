import { React } from 'react';
import styles from './EarnPokecoins.module.scss';
import { useTranslation } from 'react-i18next';

function EarnPokecoins() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.earn_pokecoins_section}>
        <div className={styles.earn_pokecoins_section_background} />
        <div className={styles.earn_pokecoins_section_text}>
          <div className={styles.earn_pokecoins_section_label} >
            {t('home_page.earn_pokecoins.label')}
          </div>
          <div className={styles.earn_pokecoins_section_description} >
            {t('home_page.earn_pokecoins.description')}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default EarnPokecoins;
