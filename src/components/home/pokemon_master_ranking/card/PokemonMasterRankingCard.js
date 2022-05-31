import { React } from 'react';
import styles from './PokemonMasterRankingCard.module.scss';

function PokemonMasterRankingCard(data) {
  return(
    <div className={styles.main}>
      <div className={styles.avatar} />
      <div className={styles.player_bio}>
        {data.player.player_bio}
      </div>
    </div>
  )
}

export default PokemonMasterRankingCard;
