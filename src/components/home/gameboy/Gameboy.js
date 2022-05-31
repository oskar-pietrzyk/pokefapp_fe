import { React } from 'react';
import styles from './Gameboy.module.scss';

function Gameboy() {
  return (
    <div className={styles.main}>
      <div className={styles.vertical_cable} />
      <div className={styles.gameboy} />
    </div>
  );
}

export default Gameboy;
