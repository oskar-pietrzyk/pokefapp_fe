import React from 'react';
import Header from './header/Header';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <Header />
    </div>
  );
}

export default HomePage;
