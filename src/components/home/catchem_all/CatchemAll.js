import { React } from 'react';
import styles from './CatchemAll.module.scss';
import { useTranslation } from 'react-i18next';

function CatchemAll() {
  const { t } = useTranslation();

  return (
    <div className={styles.CatchemAll}>
      <div className={styles.catchem_all_mewtwo_placeholder} >
        <div className={styles.catchem_all_mewtwo_bg} />
      </div>
      
      <div className={styles.catchem_all_section} >
        <div className={styles.catchem_all_label} >
          {t('home_page.catchem_all.label')}
        </div>
        <div className={styles.catchem_all_description} >
          {t('home_page.catchem_all.description')}
        </div>
        
        <div className={styles.catchem_all_pokemons_section}>
          <div className={styles.catchem_all_pokemons_bg} /> 
          <div className={styles.catchem_all_pokemons}>
            <div className={styles.catchem_all_pokemons_starters}>
              <div className={styles.catchem_all_pokemons_starter_1} />
              <div className={styles.catchem_all_pokemons_starter_2} />
              <div className={styles.catchem_all_pokemons_starter_3} />
            </div>
            <div className={styles.catchem_all_pokemons_starters}>
              <div className={styles.catchem_all_pokemons_starter_4} />
              <div className={styles.catchem_all_pokemons_starter_5} />
              <div className={styles.catchem_all_pokemons_starter_6} />
            </div>
            <div className={styles.catchem_all_pokemons_starters}>
              <div className={styles.catchem_all_pokemons_starter_7} />
              <div className={styles.catchem_all_pokemons_starter_8} />
              <div className={styles.catchem_all_pokemons_starter_9} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default CatchemAll;
