import React from 'react';
import styles from '../styles/Home.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>EXPLORE</h1>
        <p>UM UNIVERSO DE CONHECIMENTO</p>
        <p>Evento exclusivo para mantenedores parceiros</p>
        <button className={styles.heroButton}>INSCREVA-SE</button>
      </div>
    </section>
  );
}

export default Hero;
