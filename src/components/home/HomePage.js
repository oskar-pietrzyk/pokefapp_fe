import React from 'react';
import Header from './header/Header';
import CatchemAll from './catchem_all/CatchemAll';
import EarnPokecoins from './earn_pokecoins/EarnPokecoins';
import BecomeMaster from './become_master/BecomeMaster';
import Gameboy from './gameboy/Gameboy';
import PokemonMasterRanking from './pokemon_master_ranking/PokemonMasterRanking';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.main}>
      <div className={styles.vertical_cable} />
      <Header />
      <CatchemAll />
      <EarnPokecoins />
      <BecomeMaster />
      <Gameboy />
      <PokemonMasterRanking />
    </div>
  );
}

export default HomePage;
