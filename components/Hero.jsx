import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './Header';
import Section from './Section';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Head>
        <title>Explore - Seu Evento de Conhecimento</title>
        <meta name="description" content="Evento exclusivo para mantenedores parceiros. Explore um universo de conhecimento!" />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>EXPLORE</h1>
        <p>UM UNIVERSO DE CONHECIMENTO</p>
        <p>Evento exclusivo para mantenedores parceiros</p>
        <button className={styles.heroButton}>INSCREVA-SE</button>
      </div>
      <Section />
    </section>
  );
}

export default Hero;
