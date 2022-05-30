import { React } from 'react';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.main_background} />
      <div className={styles.main_pokemons} >
        <div className={styles.main_pokemons_background} />
      </div>
      <div className={styles.lets_play_button}> 
        {t('home_page.lets_play_button')}
      </div>
    </div>
    
  );
}

export default Header;
