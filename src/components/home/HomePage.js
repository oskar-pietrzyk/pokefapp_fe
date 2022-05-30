import React from 'react';
import Header from './header/Header';
import CatchemAll from './catchem_all/CatchemAll';
import EarnPokecoins from './earn_pokecoins/EarnPokecoins';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.vertical_cable} />
      <Header />
      <CatchemAll />
      <EarnPokecoins />
    </div>
  );
}

export default HomePage;
