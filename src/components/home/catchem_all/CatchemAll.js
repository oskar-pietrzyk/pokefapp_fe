import { React } from 'react';
import styles from './CatchemAll.module.scss';
import { useTranslation } from 'react-i18next';

function CatchemAll() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.main_first_right_section} >
        <div className={styles.main_first_right_section_background} />
      </div>
      
      <div className={styles.section} >
        <div className={styles.section_label} >
          {t('home_page.catchem_all.label')}
        </div>
        <div className={styles.section_description} >
          {t('home_page.catchem_all.description')}
        </div>
        
        <div className={styles.section_pokemons}>
          <div className={styles.section_pokemons_background} /> 
          <div className={styles.section_pokemons_container}>
            <div className={styles.section_pokemons_starters}>
              <div className={styles.pokemons_section_starter_1} />
              <div className={styles.pokemons_section_starter_2} />
              <div className={styles.pokemons_section_starter_3} />
            </div>
            <div className={styles.section_pokemons_starters}>
              <div className={styles.pokemons_section_starter_4} />
              <div className={styles.pokemons_section_starter_5} />
              <div className={styles.pokemons_section_starter_6} />
            </div>
            <div className={styles.section_pokemons_starters}>
              <div className={styles.pokemons_section_starter_7} />
              <div className={styles.pokemons_section_starter_8} />
              <div className={styles.pokemons_section_starter_9} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default CatchemAll;
