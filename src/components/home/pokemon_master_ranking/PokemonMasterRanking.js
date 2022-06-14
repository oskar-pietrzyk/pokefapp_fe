import { React, useState, useEffect } from 'react';
import styles from './PokemonMasterRanking.module.scss';
import { useTranslation } from 'react-i18next';
import axios from '../../../axios';
import PokemonMasterRankingCard from './card/PokemonMasterRankingCard';

function PokemonMasterRanking() {
  const { t } = useTranslation();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log('start fetch')
    axios.get(`/api/v1/pokemon_master_ranking`)
      .then(res => {
        setPlayers(res.data.players || [])
      })
      .catch(() => {
        setPlayers([])
      })
  }, []);


  return (
    players.length > 0 &&
    
    <div className={styles.main}>
      <div className={styles.label} >
        {t('home_page.pokemon_master_ranking.label')}
      </div>
      <div className={styles.players} data-testid='players'>
        {
          players.map((player) => <PokemonMasterRankingCard key={player.id} player={player} /> ) 
        }
      </div> 
    </div>
  );  
}

export default PokemonMasterRanking;
