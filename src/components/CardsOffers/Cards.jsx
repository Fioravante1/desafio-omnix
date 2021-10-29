import React from 'react';
import styles from './cards.module.css';

function Cards() {
  return (
    <section className={styles.section__container__cards}>
      <div className={styles.card} />
      <div className={styles.card} />
      <div className={styles.card} />
    </section>
  );
}

export default Cards;
