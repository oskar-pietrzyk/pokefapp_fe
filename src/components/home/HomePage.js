import React from 'react';
import Header from './header/Header';
import CatchemAll from './catchem_all/CatchemAll';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.home_page_hr} />
      <Header />
      <CatchemAll />
    </div>
  );
}

export default HomePage;
